<template>
    <main>
        <div class="container">
            <main class="w-8/12 mx-auto flex flex-wrap">
                <ArticleList
                    v-for="article in articles"
                    :key="article.id"
                    :article="article"
                ></ArticleList>
            </main>
        </div>
    </main>
</template>

<script>
import { mapState } from 'vuex';
import ArticleList from '@/components/ArticleList.vue';
export default {
    name: 'Home',
    components: {
        ArticleList,
    },
    created() {
        this.$store.dispatch('article/getAllArticle');
    },
    computed: {
        ...mapState({
            articles: (state) => state.article.articles,
        }),
    },
};
</script>

<style scoped></style>
