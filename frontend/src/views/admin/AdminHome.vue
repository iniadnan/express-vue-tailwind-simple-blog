<template>
    <main>
        <div class="container">
            <div class="w-8/12 mx-auto flex flex-wrap pt-5 pb-10">
                <section class="w-full grid grid-flow-cols grid-cols-4 gap-x-4">
                    <router-link
                        class="bg-blue-500 text-center rounded py-4 px-8"
                        :to="{ name: 'AdminListUser' }"
                    >
                        <h3
                            class="
                                font-semibold
                                text-sm text-gray-200 text-left
                                mb-4
                            "
                        >
                            Users
                        </h3>
                        <strong
                            class="inline-block text-5xl text-gray-50 pb-5"
                            >{{ countUser }}</strong
                        >
                    </router-link>
                    <router-link
                        class="bg-blue-500 text-center rounded py-4 px-8"
                        :to="{ name: 'AdminListArticle' }"
                    >
                        <h3
                            class="
                                font-semibold
                                text-sm text-gray-200 text-left
                                mb-4
                            "
                        >
                            Article
                        </h3>
                        <strong
                            class="inline-block text-5xl text-gray-50 pb-5"
                            >{{ countArticle }}</strong
                        >
                    </router-link>
                </section>
            </div>
        </div>
    </main>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'AdminHome',
    created() {
        this.$store.dispatch('article/getAllAdminArticle');
        this.$store.dispatch('user/getAllUser');
    },
    computed: {
        ...mapState({
            countArticle: (state) => state.article.articles.length,
            countUser: (state) => state.user.users.length,
        }),
    },
};
</script>

<style scoped></style>
