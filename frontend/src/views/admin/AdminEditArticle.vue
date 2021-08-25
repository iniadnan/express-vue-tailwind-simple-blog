<template>
    <main>
        <div class="container">
            <div class="w-8/12 mx-auto flex flex-wrap pt-5 pb-10">
                <form class="w-full block" @submit.prevent="updateArticle">
                    <div class="mb-5">
                        <label
                            class="font-medium text-lg text-gray-800"
                            for="author"
                            >Author</label
                        >
                        <input
                            class="
                                block
                                w-full
                                bg-white
                                border border-gray-500
                                text-base text-gray-700
                                rounded
                                py-3
                                px-5
                                mt-2
                            "
                            type="text"
                            id="author"
                            placeholder="Author"
                            v-model="article.author"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            class="font-medium text-lg text-gray-800"
                            for="title"
                            >Title</label
                        >
                        <input
                            class="
                                block
                                w-full
                                bg-white
                                border border-gray-500
                                text-base text-gray-700
                                rounded
                                py-3
                                px-5
                                mt-2
                            "
                            type="text"
                            id="title"
                            placeholder="Title"
                            v-model="article.title"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            class="font-medium text-lg text-gray-800"
                            for="category"
                            >Category</label
                        >
                        <input
                            class="
                                block
                                w-full
                                bg-white
                                border border-gray-500
                                text-base text-gray-700
                                rounded
                                py-3
                                px-5
                                mt-2
                            "
                            type="text"
                            id="category"
                            placeholder="Category"
                            v-model="article.category"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            class="font-medium text-lg text-gray-800"
                            for="slug"
                            >Slug</label
                        >
                        <input
                            class="
                                block
                                w-full
                                bg-white
                                border border-gray-500
                                text-base text-gray-700
                                rounded
                                py-3
                                px-5
                                mt-2
                            "
                            type="text"
                            id="slug"
                            placeholder="Slug"
                            v-model="article.slug"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            class="font-medium text-lg text-gray-800"
                            for="description"
                            >Description</label
                        >
                        <textarea
                            class="
                                block
                                w-full
                                bg-white
                                border border-gray-500
                                text-base text-gray-700
                                rounded
                                py-3
                                px-5
                                mt-2
                            "
                            rows="8"
                            id="description"
                            placeholder="Description"
                            v-model="article.description"
                        ></textarea>
                    </div>
                    <div class="mb-5">
                        <label
                            class="font-medium text-lg text-gray-800"
                            for="tags"
                            >Tags</label
                        >
                        <input
                            class="
                                block
                                w-full
                                bg-white
                                border border-gray-500
                                text-base text-gray-700
                                rounded
                                py-3
                                px-5
                                mt-2
                            "
                            type="text"
                            id="tags"
                            placeholder="Tags"
                            v-model="article.tags"
                        />
                    </div>
                    <div class="mb-8">
                        <label
                            class="font-medium text-lg text-gray-800"
                            for="location"
                            >Location</label
                        >
                        <input
                            class="
                                block
                                w-full
                                bg-white
                                border border-gray-500
                                text-base text-gray-700
                                rounded
                                py-3
                                px-5
                                mt-2
                            "
                            type="text"
                            id="location"
                            placeholder="Location"
                            v-model="article.location"
                        />
                    </div>
                    <div>
                        <button
                            class="
                                w-full
                                bg-blue-400
                                hover:bg-blue-500
                                font-medium
                                text-lg text-gray-100
                                hover:text-gray-50
                                rounded
                                py-3
                            "
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'AdminEditArticle',
    props: {
        slug: {
            type: String,
            required: true,
        },
    },
    created() {
        this.$store.dispatch('article/getSingleArticle', this.slug);
    },
    computed: {
        ...mapState({
            article: (state) => state.article.article,
        }),
    },
    methods: {
        updateArticle() {
            this.$store
                .dispatch('article/updateArticle', this.article)
                .then(() => {
                    this.$router.push({
                        name: 'AdminListArticle',
                    });
                })
                .catch((error) => {
                    console.log('Something Wrong: ' + error);
                });
        },
    },
};
</script>

<style scoped></style>
