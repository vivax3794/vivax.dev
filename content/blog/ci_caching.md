+++
title = "Caching, the most leaky abstraction."
date = 2026-03-28
description = "A journey through skipping work in GitHub Actions."

[taxonomies]
tags = ["serpentine", "ci"]
+++

I have been writing complex integration suits for my projects for a while, the most complex by far being the one for [Natrix](https://github.com/serpent-Tools/natrix), which involves running around 4 different kinds of integration tests, alongside two unit test suits, and a whole range of linters. 

And thru all of that I jumped between a few different tools for this, raw github actions, dagger, and eventually writing my own. 
There were many ergonomics issues and similar with the previous tools that didnt work for my kind of integration tests, but the thing that was ultimately the biggets limiting factor was caching, especially in github runners. 

## Caching should be invisible.

This is, in my opinion, one of the most important aspects of a good cache. The only signs that a cache was used should be lower execution time, and less log output. There should be no way to tell that the cache was used based on the final output. And it's at this point a lot of edge cases pop up, but we won't get into them here.

If you in your user code of a system ever have to write `if is_cached(): ...` something has gone very wrong with the cache design in said system.
As I said before, at its core caching is an optimization, and optimizations shouldn't affect semantics.

Naturally this stuff can never be fully perfect, for example docker assumes any step can be cached, but ultimately `apt install ...` can't be correctly cached because it talks to an external system, in general stuff that talks to external systems is harder to cache correctly, but in general we bite the bullet and do so anyway because in most cases it's okay, especially if you pin versions. In other words making caches invisible isn't just on the cache implementation itself but also on its users to write code that is able to be cached.

> [!NOTE]
> I am speaking from the perspective of most caches one touches during development work, in other domains this constraint might not hold.

### What should we cache?

In general this is a question that has been solved before, if you are looking at your CI and wondering what to cache, a good first bet is to cache the caches.
What I mean is, most build systems maintain caches of artifacts built to avoid work, you certainly notice this locally. So a good first candidate for caching in your CI, is your build system's caches, because those are already designed to be persisted between runs.
And here is a very important abstraction boundary to consider when it comes to caching in CI, which comes in two flavors.

1. Caching info so that you can explicitly skip steps on cache hit.
2. Caching a tools cache so it can skip steps automatically for you.

The second one is almost always better, because you can then entrust a widely tested tool to have figured out the cache invalidation for you, your job is just persisting its cache between runs. This is the path cargo, npm, docker, lend themselves to.

## Caching in GitHub Actions

[GitHub Actions](https://docs.github.com/en/actions) are maybe one of the most popular CI platforms, and as such it naturally has a caching story.

### [`actions/cache`](https://github.com/actions/cache)

GitHub's official cache action is amazing for caching caches like we talked about above, this action lets you very easily store and restore a given folder or file, which is exactly what you need for caching build caches. It's easy to use, and when given a good cache key will mostly just work.
So whenever what you need caching is nicely exposed as a well documented folder or file the solution is simple and easy.

### [`swatinem/rust-cache`](https://github.com/Swatinem/rust-cache)
Now sometimes it's nice to have abstractions that hide what folders and files to hide, and use domain knowledge to make the cache smaller. For example this rust cache strips out unneeded data from `./target`, but at its core it's still just caching a folder or file, simple easy.

## Caching docker layers?

What if your CI builds docker images? Well as you might know docker does cache layers, but where?
Well docker stores its metadata in a few internal places, and trying to cache these would be a losing battle, luckily docker uses buildkit, which does expose some [options](https://docs.docker.com/build/cache/backends/) here:

### [Local Files](https://docs.docker.com/build/cache/backends/local/)
Docker supports exporting its cache to a local file, or more correctly [buildkit](https://docs.docker.com/build/buildkit/) does, and docker exposes wrapper options for it.

> ```bash
> docker buildx build --push -t <registry>/<image> \
>   --cache-to type=local,dest=path/to/local/dir[,parameters...] \
>   --cache-from type=local,src=path/to/local/dir .
> ```

And now you can use `actions/cache` to save and restore this folder to gain the benefit of dockers layer caching in your CI, or in any CI for that matter.

### [GitHub Actions Cache](https://docs.docker.com/build/cache/backends/gha/)
Buildkit/docker also supports talking to the GitHub Actions cache directly, this is easiest done via the [docker/build-push-action](https://github.com/docker/build-push-action) action as it will ensure the proper GitHub tokens are set in the docker arguments etc.
This is more efficient because instead of needing to save and restore the entire cache to and from the local runner, this action will lazily pull layer data as it gets cache hits, and only upload the new layers.

## [Dagger](https://dagger.io/)

Now GitHub Actions is all fine and good, until you want to run CI locally as well, here we have some interesting tools, one I really enjoyed for a while was Dagger. Its programming based interface for docker was really nice to work with, and let me do some stuff I had been wanting to express in docker files for a while. Eventually I ran into some UX issues that drove me away, but their core tool is really unique and cool!

Now let's look at their caching story, at its core it's essentially the same caching system as buildkit and docker, because well dagger uses buildkit internally. Locally all works well, now since it's based on buildkit in theory the CI caching story should be the same!

To quote their [docs](https://docs.dagger.io/getting-started/ci-integrations/github-actions):
> Dagger has also partnered with Depot to provide managed, Dagger Powered GitHub Actions runners. These runners, which serve as drop-in replacements for GitHub's own runners, come with Dagger pre-installed and pre-configured to best practices, *automatic persistent layer caching*, and multi-architecture support. They make it faster and easier to run Dagger pipelines in GitHub repositories.

Oh, well I guess they need to make money somehow, that's fair! Let's just find where they talk about gha or local file based caches so we can make this work on GitHub runners... okay nothing in the main docs, let's check the docs for [dagger/dagger-for-github](https://github.com/dagger/dagger-for-github), hmm nothing there. Okay for these, apparently very niche use cases, GitHub issues is the goto! Aha! found it, [#39](https://github.com/dagger/dagger-for-github/issues/39)

> jpadams closed this as not plannedon Feb 13, 2023

Oh... well I guess moving on then.

## How about my tool?

I am developing my own workflow runner called [Serpentine](https://github.com/Serpent-Tools/serpentine), let's take a look at how it handles caching in CI.

By default serpentine stores a *non-portable* cache in the platforms default cache directory, okay so no just slapping `actions/cache` on it right away, but it does expose some cli arguments to make the cache portable between systems, `--standalone-cache`, and naturally also a flag to control the cache location, now we can `actions/cache` it!

```bash
serpentine run --cache /tmp/serpentine.cache --standalone-cache --ci
```

> [!TIP]
> The reason serpentine's cache isn't portable by default is that it's actually storing most of its data in a [containerd](https://containerd.io/) daemon, what the standalone flag does is instruct serpentine to export this data to the cache file, which on local only runs would be wasted time.

## So whats the hardest thing in CS?
Honestly cache invalidation is hard, I wont deny that, but tools keep getting it right, what we do see big tools still fail at is the user facing *cache api design*. Caching is a optimization, and if your optimization requires user collaberation it better be easy and clear what they need to do. `cargo` just asks you to save a target directory, `npm` asks you to save `node_modules`, and `dagger` just asks you to please pay them.

# Further reading

* <https://en.wikipedia.org/wiki/Cache_(computing)>
* <https://docs.docker.com/build/cache/>
