<template>
    <main>
        <div class="container">
            <main
                class="
                    w-full
                    md:w-10/12
                    lg:w-8/12
                    mx-auto
                    flex flex-wrap
                    px-5
                    md:px-0
                "
            >
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
import { mapState, mapActions } from 'vuex';
import ArticleList from '@/components/ArticleList.vue';
export default {
    name: 'Home',
    components: {
        ArticleList,
    },
    created() {
        this.getArticles();
    },
    methods: {
        ...mapActions({
            getArticles: 'article/getAllArticle',
        }),
    },
    computed: {
        ...mapState({
            articles: (state) => state.article.articles,
        }),
    },
};
</script>

<style scoped></style>
