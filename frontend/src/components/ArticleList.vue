<template>
    <article class="w-full">
        <router-link
            class="
                w-full
                block
                relative
                rounded-md
                p-4
                md:p-8
                mb-5
                group
                hover:shadow-md
            "
            :to="{ name: 'ArticleDetail', params: { slug: article.slug } }"
        >
            <div class="w-full">
                <img
                    class="w-full h-72 md:h-80 lg:h-96 object-cover rounded-md"
                    :src="getImage(article.image)"
                    alt="Title"
                />
            </div>
            <section class="pt-4 md:pt-6 px-5 md:px-8">
                <h2
                    class="
                        font-semibold
                        text-xl
                        md:text-2xl
                        text-gray-800
                        tracking-wide
                        mb-4
                        md:mb-5
                        group-hover:text-red-400
                    "
                >
                    {{ article.title }}
                </h2>
                <p
                    class="
                        text-base
                        md:text-lg
                        text-gray-700
                        tracking-wide
                        mb-6
                    "
                >
                    {{ sliceString(article.description) }}...
                </p>
                <div class="flex items-center">
                    <div class="flex items-center text-purple-400">
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
                        <span
                            class="pl-2 font-semibold text-sm text-purple-400"
                            >{{ article.location }}</span
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
    props: {
        article: {
            type: Object,
            required: true,
        },
    },
    methods: {
        getImage(img) {
            let imgShow =
                img == null
                    ? 'https://avatars.dicebear.com/api/avataaars/fbi.svg'
                    : `http://localhost:4500/images/articles/${img}`;
            return imgShow;
        },
        sliceString(val) {
            return val.slice(0, 200);
        },
    },
};
</script>
