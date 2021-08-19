<template>
    <header class="w-full">
        <div class="container">
            <nav
                class="
                    w-10/12
                    mx-auto
                    flex flex-wrap
                    items-center
                    justify-between
                    py-12
                "
            >
                <router-link
                    class="font-bold text-2xl text-gray-900 tracking-wider"
                    to="/"
                    >INIBLOG</router-link
                >
                <router-link
                    class="
                        h-12
                        w-12
                        inline-flex
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-500
                        text-gray-100
                    "
                    :to="{ name: 'Login' }"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                </router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped></style>
