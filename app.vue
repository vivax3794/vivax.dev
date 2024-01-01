<template>
    <QToolbar class="q-py-md bg-black">
        <QBtn flat :icon="`img:${$img('favicon.png', { width: 34 })}`" to="/" size="lg">
            <div class="text-h5 q-ml-sm">
                Vivax.dev
            </div>
        </QBtn>
        <QToolbarTitle class="text-h4">
            !!!Under construction!!!
        </QToolbarTitle>
        <QBtn flat :icon="matPalette" to="/art" size="lg">Art</QBtn>
        <QBtn flat :icon="matViewList" to="/projects" size="lg">Projects</QBtn>
        <QBtn flat :icon="matNewspaper" to="/blog" size="lg">Blog</QBtn>
    </QToolbar>
    <QSeparator></QSeparator>
    <NuxtPage />
</template>

<script setup lang="ts">
import { matPalette, matViewList, matNewspaper } from "@quasar/extras/material-icons";

useSeoMeta({
    title: 'Vivax.dev',
    description: 'The place for all my projects and art, and also a blog.',
    ogImage: '/favicon.png',
})
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
    transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    transform: translateY(-50px);
}
</style>
