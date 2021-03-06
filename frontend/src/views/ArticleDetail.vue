<template>
    <main>
        <div class="container">
            <div class="w-full md:w-10/12 mx-auto py-6 md:py-12">
                <section
                    class="
                        px-6
                        md:px-8
                        lg:px-12
                        xl:px-16
                        mb-2
                        md:mb-10
                        lg:mb-12
                    "
                >
                    <div class="flex items-center mb-3">
                        <h6
                            class="
                                h-8
                                inline-flex
                                items-center
                                bg-blue-500
                                font-semibold
                                text-sm text-gray-100
                                tracking-wide
                                uppercase
                                rounded
                                px-4
                                mr-5
                            "
                        >
                            {{ article.category }}
                        </h6>
                        <strong class="font-medium text-purple-500 text-sm">{{
                            article.location
                        }}</strong>
                    </div>
                    <h1
                        class="
                            font-bold
                            text-3xl
                            md:text-5xl
                            lg:text-6xl
                            text-gray-900
                            tracking-wide
                            mb-5
                            md:mb-6
                        "
                    >
                        {{ article.title }}
                    </h1>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <img
                                class="h-8 w-8 object-cover rounded-full mr-2"
                                :src="getImage('users', article.picture)"
                                :alt="article.author"
                            />
                            <strong
                                class="font-medoum text-sm text-red-400 mr-5"
                                >{{ article.author }}</strong
                            >
                            <span class="text-sm text-gray-800">{{
                                reWriteDate(article.created_at)
                            }}</span>
                        </div>
                    </div>
                </section>
                <div class="w-full py-8 md:py-10 lg:py-12">
                    <img
                        class="w-full object-cover rounded"
                        :src="getImage('articles', article.image)"
                        :alt="article.title"
                    />
                </div>
                <article class="px-6 md:px-8 lg:px-12 xl:px-16">
                    <p class="text-base text-gray-800">
                        {{ article.description }}
                    </p>
                </article>
            </div>
        </div>
    </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'ArticleDetail',
    props: {
        slug: {
            type: String,
            required: true,
        },
    },
    created() {
        this.getArticle(this.slug);
    },
    methods: {
        getImage(path, img) {
            let imgShow =
                img == null
                    ? 'https://avatars.dicebear.com/api/avataaars/fbi.svg'
                    : `http://localhost:4500/images/${path}/${img}`;
            return imgShow;
        },
        reWriteDate() {
            const date = new Date(this.article.created_at);
            return date.toLocaleString(['en-US'], {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
            });
        },
        ...mapActions({
            getArticle: 'article/getSingleArticle',
        }),
    },
    computed: {
        ...mapState({
            article: (state) => state.article.article,
        }),
    },
};
</script>

<style scoped></style>
