<template>
    <main>
        <div class="container">
            <div class="w-8/12 mx-auto flex flex-wrap">
                <ArticleList></ArticleList>
            </div>
        </div>
    </main>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue';
export default {
    name: 'Home',
    components: {
        ArticleList,
    },
};
</script>

<style scoped></style>
