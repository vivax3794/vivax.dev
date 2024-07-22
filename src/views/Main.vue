<template>
    <h1 id="title">Viv</h1>
    <div id="grid">
        <a v-for="project of PROJECTS" :href="project.link">
            <div class="card">
                <h2 class="card-title">{{ project.title }}</h2>
                <p>{{ project.desc }}</p>
                <p class="stats">{{ project.stats }}</p>
            </div>
        </a>
    </div>

    <p id="footer">
        I am honestly just too tired of updating this site, time for some minimal bs
    </p>
</template>

<script setup lang="ts">
interface Project {
    title: string,
    link: string,
    desc: string,
    stats: string,
}

const PROJECTS: Project[] = [
    {
        title: "ComfyUi-Subnodes",
        link: "https://github.com/vivax3794/ComfyUI-Sub-Nodes",
        desc: "Sub node/graph support for comfyui",
        stats: "Stars: 100+"
    },
    {
        title: "Spinny jumper",
        link: "https://vivax.itch.io/spinny-jumper",
        desc: "Small platformer game made for a game jam",
        stats: "Jam placement (Gameplay): 17/82"
    },
]
</script>

<style scoped>
#title {
    font-size: 8rem;
    text-shadow: black 2px 2px 5px;
    color: rgb(60, 10, 60);

    margin-left: 50%;
    translate: -50%;
    display: inline-block;
}

#grid {
    display: grid;
    grid-template-columns: 50% 50%;
}

.card {

    background-color: var(--color-background-soft);
    margin: 20px;
    padding: 20px;

    border-radius: 20px;
    box-shadow: black 5px 5px 3px;

    transition: all 0.3s linear;

    font-size: 1.5rem;
}

.card:hover {
    background-color: var(--color-border-hover);
}

.stats {
    font-size: 1rem;
    color: gray;
}

a {
    text-decoration: none;
    color: unset;
}

#footer {
    text-align: center;
}
</style>
