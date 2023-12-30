<template>
    <div>
        <ContentDoc>
            <template #not-found>
                <h1 class="text-center ">Page not found</h1>
                <h2 class="text-center text-grey">i am sowwy</h2>
                TODO: draw a cute robot here
                <QSkeleton type="rect" width="80%" height="50vh" class="vi-center"></QSkeleton>
            </template>

            <template v-slot="{ doc }">
                <div class="article">
                    <ContentRenderer :value="doc"></ContentRenderer>
                </div>
            </template>
        </ContentDoc>
    </div>
</template>


<style scoped lang="scss">
$article-width: 1000px;

.article {
    background-color: rgb(47, 47, 47);
    border-radius: 10px;
    max-width: $article-width;
    margin-left: calc(max(50% - $article-width/2, 0px));
    margin-top: 100px;
    padding: 10px;
    font-size: 1.1rem;
    margin-bottom: 500px;
}
</style>
