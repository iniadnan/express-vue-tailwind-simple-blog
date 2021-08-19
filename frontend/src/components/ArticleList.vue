<template>
    <article class="w-full">
        <router-link
            class="
                w-full
                block
                relative
                rounded-md
                p-8
                mb-5
                group
                hover:shadow-md
            "
            to="/"
        >
            <div class="w-full">
                <img
                    class="w-full h-96 object-cover rounded-md"
                    :src="getImage('article-3.jpg')"
                    alt="Title"
                />
            </div>
            <section class="pt-6 px-8">
                <h2
                    class="
                        font-semibold
                        text-2xl text-gray-800
                        tracking-wide
                        mb-5
                        group-hover:text-red-400
                    "
                >
                    Lorem Ipsum See You In Morning
                </h2>
                <p class="text-lg text-gray-700 tracking-wide mb-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ducimus ad aspernatur consequuntur minus...
                </p>
                <div class="flex items-center">
                    <div class="flex items-center text-blue-400">
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
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            ></path>
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                        </svg>
                        <span class="pl-2 font-semibold text-sm text-blue-500"
                            >Banjarnegara, Central Java</span
                        >
                    </div>
                </div>
            </section>
        </router-link>
    </article>
</template>

<script>
export default {
    name: 'ArticleList',
    methods: {
        getImage(img) {
            return require(`@/assets/images/articles/${img}`);
        },
    },
};
</script>
