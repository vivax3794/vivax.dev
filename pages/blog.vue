<template>
    <div>
        <ContentList path="/blog" v-slot="{ list }">
            <div class="page">
                <NuxtLink v-for="article in list.slice().reverse()" :key="article._path" :to="article._path">
                    <div class="card q-ma-md shadow-3 row">
                        <div class="col-8">
                            <div class="text-h4 text-white">{{ article.title }}</div>
                            <div class="desc">{{ article.description }}</div>
                        </div>
                        <div class="col" v-if="article.image !== undefined">
                            <img class="image" :src="article.image" />
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </ContentList>
    </div>
</template>

<style scoped lang="scss">
$page-width: 40%;

.page {
    width: $page-width;
    margin-left: (100% - $page-width) / 2;
}

.card {
    background-color: rgb(53, 53, 53);
    border-radius: 10px;
    padding-left: 20px;
    // overflow: hidden;
}

.image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.desc {
    color: gray;
}
</style>
