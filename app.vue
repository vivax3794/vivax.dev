<template>
    <QToolbar class="q-py-md bg-black">
        <QBtn flat icon="img:/favicon.png" to="/" size="lg">
            <div class="text-h5 q-ml-sm">
                Vivax.dev
            </div>
        </QBtn>
        <QToolbarTitle class="text-h4">
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
</script>
