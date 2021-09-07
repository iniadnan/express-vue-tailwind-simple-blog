<template>
    <main>
        <div class="container">
            <div
                class="
                    w-full
                    md:w-10/12
                    lg:w-8/12
                    mx-auto
                    flex flex-wrap
                    pt-5
                    pb-10
                    px-5
                    md:px-0
                "
            >
                <form class="w-full block" @submit.prevent="createArticle">
                    <div class="mb-5">
                        <label
                            class="
                                font-medium
                                text-base
                                md:text-lg
                                text-gray-800
                            "
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
                                lowercase
                                rounded
                                py-3
                                px-5
                                mt-2
                            "
                            type="text"
                            id="author"
                            placeholder="Author"
                            v-model="dataArticle.author"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            class="
                                font-medium
                                text-base
                                md:text-lg
                                text-gray-800
                            "
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
                            v-model="dataArticle.title"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            class="
                                font-medium
                                text-base
                                md:text-lg
                                text-gray-800
                            "
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
                                lowercase
                                rounded
                                py-3
                                px-5
                                mt-2
                            "
                            type="text"
                            id="category"
                            placeholder="Category"
                            v-model="dataArticle.category"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            class="
                                font-medium
                                text-base
                                md:text-lg
                                text-gray-800
                            "
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
                                lowercase
                                rounded
                                py-3
                                px-5
                                mt-2
                            "
                            type="text"
                            id="slug"
                            placeholder="Slug"
                            v-model="dataArticle.slug"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            class="
                                font-medium
                                text-base
                                md:text-lg
                                text-gray-800
                            "
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
                            v-model="dataArticle.description"
                        ></textarea>
                    </div>
                    <div class="mb-5">
                        <label
                            class="
                                font-medium
                                text-base
                                md:text-lg
                                text-gray-800
                            "
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
                                lowercase
                                rounded
                                py-3
                                px-5
                                mt-2
                            "
                            type="text"
                            id="tags"
                            placeholder="Tags"
                            v-model="dataArticle.tags"
                        />
                    </div>
                    <div class="mb-8">
                        <label
                            class="
                                font-medium
                                text-base
                                md:text-lg
                                text-gray-800
                            "
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
                            v-model="dataArticle.location"
                        />
                    </div>
                    <div class="mb-12">
                        <template v-if="dataArticle.image != ''">
                            <div class="h-60 w-1/3 relative mx-auto">
                                <img
                                    class="h-full w-full object-cover"
                                    :src="
                                        previewImg == ''
                                            ? getImage(dataArticle.image)
                                            : previewImg
                                    "
                                    alt="Image"
                                />
                                <label
                                    for="image"
                                    class="
                                        h-7
                                        w-7
                                        inline-flex
                                        items-center
                                        justify-center
                                        absolute
                                        bottom-1
                                        right-1
                                        rounded-full
                                        text-white
                                        bg-blue-500
                                        cursor-pointer
                                        z-10
                                    "
                                >
                                    <svg
                                        class="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                        ></path>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                        ></path>
                                    </svg>
                                </label>
                            </div>
                        </template>
                        <template v-else>
                            <label
                                for="image"
                                class="
                                    w-full
                                    h-16
                                    mx-auto
                                    relative
                                    block
                                    rounded
                                    bg-blue-500
                                    text-white
                                    cursor-pointer
                                "
                            >
                                <svg
                                    class="
                                        w-8
                                        h-8
                                        absolute
                                        top-1/2
                                        left-5
                                        transform
                                        -translate-y-1/2
                                    "
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    ></path>
                                </svg>
                            </label>
                        </template>
                        <input
                            class="hidden"
                            type="file"
                            id="image"
                            accept="image/png, image/gif, image/jpeg, image/jpg"
                            @change="checkImage"
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
export default {
    name: 'AdminAddArticle',
    data() {
        return {
            dataArticle: {
                author: '',
                title: '',
                category: '',
                slug: '',
                description: '',
                tags: '',
                location: '',
                image: '',
            },
        };
    },
    methods: {
        checkImage(event) {
            this.dataArticle.image = event.target.files[0];
            this.previewImg = URL.createObjectURL(event.target.files[0]);
        },
        createArticle() {
            const formData = new FormData();
            formData.append('id', this.dataArticle.id);
            formData.append('author', this.dataArticle.author);
            formData.append('title', this.dataArticle.title);
            formData.append('category', this.dataArticle.category);
            formData.append('slug', this.dataArticle.slug);
            formData.append('description', this.dataArticle.description);
            formData.append('tags', this.dataArticle.tags);
            formData.append('location', this.dataArticle.location);
            formData.append('file', this.dataArticle.image);
            this.$store
                .dispatch('article/createArticle', formData)
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
