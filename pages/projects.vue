<template>
    <div class="row justify-center">
        <div class="row q-ma-md card shadow-3" v-for="project in PROJECTS">
            <QImg class="col" :src="$img(project.image, { height: 300 })" v-if="project.image !== undefined" />
            <div class="col relative-position">
                <div class="text-h4 text-center full-width q-mb-sm">{{ project.name }}</div>
                <QSeparator></QSeparator>
                <div class="q-px-md text-subtitle1 desc">{{ project.description }}</div>
                <div class="absolute-bottom">
                    <QSeparator></QSeparator>
                    <div class="row justify-center">
                        <QBtn size="20px" flat v-for="link in project.links" :icon="LINK_ICONS[link.type] || FALLBACK_ICON"
                            :href="link.type === 'Blog' ? undefined : link.href"
                            :to="link.type === 'Blog' ? link.href : undefined">
                        </QBtn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    width: 400px;
    min-height: 300px;
    background-color: rgb(47, 47, 47);
    border-radius: 20px;
    overflow: hidden;
}
</style>

<script setup lang="ts">
import { mdiWeb, mdiGamepad, mdiSourceBranch, mdiNewspaper } from "@quasar/extras/mdi-v7"

const LINK_ICONS = {
    "Itch": mdiGamepad,
    "GitHub": mdiSourceBranch,
    "Blog": mdiNewspaper
} as const;
const FALLBACK_ICON = mdiWeb;


interface Link {
    type?: keyof typeof LINK_ICONS,
    href: string,
}
interface Project {
    name: string,
    description: string,
    image?: string,
    links: Link[]
}

const PROJECTS: Project[] = [{
    name: "This page",
    description: "This page which is made with nuxt and quasar.",
    links: [
        { href: "https://vivax.dev" }
    ]
},
{
    name: "Deepnarration",
    description: "A frontend for an ai platform that I am paid to make.",
    links: [
        { type: "GitHub", href: "https://github.com/vivax3794/deepnarration" },
        { href: "https://deepnarration.matissetec.dev/" }
    ]
},
{
    name: "Ai node editor",
    description: "A node editor to connect together a bunch of ai apis.",
    image: "/projects/Node.png",
    links: [
        { type: "GitHub", href: "https://github.com/vivax3794/deepnarration/tree/nuxt-rewrite" },
    ],
},
{
    name: "FluentWeb",
    description: "A rust frontend web framework using single file componentes inspired by vue.",
    links: [
        { type: "GitHub", href: "https://github.com/vivax3794/FluentWeb" }
    ]
},
{
    name: "Compiler",
    description: "Compiler for a staticly typed language that I am writing a blog series on.",
    links: [
        { type: "Blog", href: "/blog" },
        { type: "GitHub", href: "https://github.com/vivax3794/viv_script_blog" }
    ]
},
{
    name: "Spinny Jumper",
    description: "Small foddian game I made for a game in the course of a week",
    image: "https://img.itch.zone/aW1nLzEzMDYyMDYwLnBuZw==/original/QoYYFX.png",
    links: [
        { type: "Itch", href: "https://vivax.itch.io/spinny-jumper" }
    ]
},
{
    name: "WFC",
    description: "A implementation of Wave Function Collapse in the bevy game engine.",
    image: "/projects/WFC.png",
    links: [
        { type: "Itch", href: "https://vivax.itch.io/wave-generation-demo" },
        { type: "GitHub", href: "https://github.com/vivax3794/wave_function_collapse" }
    ]
}
];
</script>
