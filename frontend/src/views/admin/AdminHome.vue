<template>
    <main>
        <div class="container">
            <div class="w-8/12 mx-auto flex flex-wrap pt-5 pb-10">
                <section class="w-full flex flex-wrap items-center">
                    <router-link
                        class="w-1/4 bg-blue-500 text-center rounded py-4 px-8"
                        :to="{ name: 'AdminAddArticle' }"
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
                        <strong class="inline-block text-5xl text-gray-50 pb-5"
                            >1</strong
                        >
                    </router-link>
                </section>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'AdminHome',
};
</script>

<style scoped></style>
