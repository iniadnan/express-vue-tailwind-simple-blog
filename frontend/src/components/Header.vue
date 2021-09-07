<template>
    <header class="w-full">
        <div class="container">
            <nav
                class="
                    w-full
                    md:w-10/12
                    mx-auto
                    flex flex-wrap
                    items-center
                    py-8
                    md:py-12
                    px-5
                    md:px-0
                "
            >
                <div>
                    <router-link
                        class="
                            font-bold
                            text-xl
                            md:text-2xl
                            text-gray-900
                            tracking-wider
                        "
                        to="/"
                        >INIBLOG</router-link
                    >
                </div>
                <div class="ml-auto">
                    <template v-if="session === null">
                        <router-link
                            class="
                                h-10
                                md:h-12
                                w-10
                                md:w-12
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
                                class="w-5 md:w-6 h-5 md:h-6"
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
                    </template>
                    <template v-else>
                        <div class="relative">
                            <button
                                type="button"
                                class="h-10 md:h-12 flex items-center"
                                @click="changeToggleProfile"
                            >
                                <img
                                    class="
                                        h-10
                                        md:h-12
                                        w-10
                                        md:w-12
                                        block
                                        rounded-full
                                    "
                                    :src="getImage(session.picture)"
                                />
                                <span class="text-gray-600"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 md:h-6 w-5 md:w-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        /></svg
                                ></span>
                            </button>
                            <div
                                class="
                                    w-36
                                    block
                                    absolute
                                    top-full
                                    -left-24
                                    md:left-0
                                    transform
                                    bg-white
                                    transition-all
                                    shadow
                                    border
                                    rounded
                                    py-3
                                    px-4
                                    z-10
                                "
                                :class="{
                                    '-translate-y-1 invisible opacity-0':
                                        toggleProfile == false,
                                    'translate-y-0': toggleProfile == true,
                                }"
                            >
                                <router-link
                                    :to="{ name: 'AdminHome' }"
                                    class="
                                        block
                                        font-medium
                                        text-sm
                                        md:text-base
                                        text-gray-700
                                    "
                                    @click="changeToggleProfile"
                                    >Settings</router-link
                                >
                                <div
                                    class="my-2 border-b border-gray-300"
                                ></div>
                                <button
                                    type="button"
                                    class="
                                        flex
                                        w-full
                                        items-center
                                        justify-between
                                        font-medium
                                        text-sm
                                        md:text-base
                                        text-gray-700
                                    "
                                    @click="toLogout"
                                >
                                    <span>Logout</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 md:h-5 w-4 md:w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </template>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Header',
    data() {
        return {
            toggleProfile: false,
        };
    },
    computed: {
        ...mapState({
            session: (state) => state.user.session,
        }),
    },
    methods: {
        getImage(img) {
            let imgShow =
                img == null
                    ? 'https://avatars.dicebear.com/api/avataaars/fbi.svg'
                    : `http://localhost:4500/images/users/${img}`;
            return imgShow;
        },
        changeToggleProfile() {
            this.toggleProfile = !this.toggleProfile;
        },
        toLogout() {
            this.$store.dispatch('user/logout');
        },
    },
};
</script>

<style scoped></style>
