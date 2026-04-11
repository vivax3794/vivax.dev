+++
title = "The curse of cross-platform tools."
date = 2026-04-11
description = "Why do I have to pay Microsoft to provide better quality dev tools?"

[taxonomies]
tags = ["serpentine", "ci"]
+++

## The problem
Imagine this: you are writing a developer tool, maybe something like [`natrix_cli`](https://github.com/serpent-Tools/natrix), there is nothing in your tool that would stop it from working on Windows or Mac. But you are developing on Linux, so how do you make sure you don't have any silly bugs that break on Windows (usually path handling :/)?

Well we all know what you do! You run a matrix job in *github actions*, simple. Of course you might have other CI platforms you like, or maybe you like being able to run your CI locally so you use something like earthly or dagger, but neither of those seem to support Windows containers.

## What if you want to make something better?

> [!caution]
> I am not a lawyer, do not take anything here as legal advice.

So why don't we build something that lets you do that? Well I am building my own CI tool called [Serpentine](https://github.com/Serpent-Tools/serpentine), and we do have an [issue for Windows containers](https://github.com/Serpent-Tools/serpentine/issues/65), so when can we expect that feature implemented?

Never, well in theory we can support it, the issue is serpentine can't seamlessly spin up a Windows VM, because automatically downloading a Windows image and booting is not allowed by Microsoft, and even besides that Windows containers are only [allowed to be used on windows pro or windows servers](https://learn.microsoft.com/en-us/virtualization/windowscontainers/images-eula), which require a license. And honestly we are not gonna implement a feature whose UX is "Buy and self host a Windows VM".

> The Container Image may only be used with a validly licensed copy of:
>
> Windows Server Standard or Windows Server Datacenter software (collectively “Server Host Software”), or Microsoft Windows Operating System (version 10) software (“Client Host Software”), or Windows 10 IoT Enterprise and Windows 10 IoT Core (collectively “IoT Host Software”). 

For example the cheapest option for running Windows containers locally is buying a Windows Pro license for 199 USD. And the cheapest option for running Windows jobs in CI is... GitHub Actions for 0 USD. It seems Microsoft considers testing software on Windows a CI-only concern, or only for devs who happen to be on a Windows machine. Now yes GitHub is a nice offer, we use it ourselves to test serpentine on Windows, the bigger issue is really two things.
* Running your CI locally as well
* Avoiding vendor lock-in.

Both of which are goals serpentine aims to accomplish, but as long as running Windows pipelines locally on Linux is impossible without throwing money at Microsoft we can't do that for tools that want to test on Windows, which includes serpentine itself.

Luckily both the [EC](https://ec.europa.eu/commission/presscorner/detail/en/ip_25_2717) and [CMA](https://www.theregister.com/2026/03/31/microsoft_cma_probe/) have launched investigations into Microsoft's restrictive cloud licensing, this targets mainly cloud platforms, but if we are very lucky any changes they force could open up for using Windows servers locally for development.

