<template>
    <div class="markdown-code relative-position">
        <div class="lang absolute-top-right">{{ language }}</div>
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps<{ language: string }>();
</script>

<style lang="scss">
.markdown-code {
    background-color: rgb(24, 24, 24);
    border-radius: 10px;
    padding: 1px 10px;
}

.markdown-code .line:before {
    content: attr(line);
    margin-right: 10px;
    color: rgb(79, 79, 105);
    font-weight: bold;
    font-size: 1.2rem;
}

.markdown-code .lang {
    margin-right: 10px;
    font-size: 1.5rem;
    color: grey;
}
</style>
