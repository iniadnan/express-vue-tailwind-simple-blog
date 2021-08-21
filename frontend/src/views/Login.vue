<template>
    <main>
        <div class="container">
            <div class="w-5/12 mx-auto flex flex-wrap py-12">
                <form class="w-full block" @submit.prevent="login">
                    <div class="mb-5">
                        <label
                            class="font-medium text-lg text-gray-800"
                            for="username"
                            >Username</label
                        >
                        <div class="w-full relative text-gray-500 mt-2">
                            <svg
                                class="
                                    w-5
                                    h-5
                                    absolute
                                    top-1/2
                                    left-4
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
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                ></path>
                            </svg>
                            <input
                                class="
                                    w-full
                                    bg-white
                                    border border-gray-500
                                    text-base text-gray-500
                                    rounded
                                    py-3
                                    px-12
                                "
                                type="text"
                                v-model="dataUser.username"
                                placeholder="Username"
                            />
                        </div>
                    </div>
                    <div class="mb-6">
                        <label
                            class="font-medium text-lg text-gray-800"
                            for="password"
                            >Password</label
                        >
                        <div class="w-full relative text-gray-500 mt-2">
                            <svg
                                class="
                                    w-5
                                    h-5
                                    absolute
                                    top-1/2
                                    left-4
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
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                ></path>
                            </svg>
                            <input
                                class="
                                    w-full
                                    bg-white
                                    border border-gray-500
                                    text-base text-gray-500
                                    rounded
                                    py-3
                                    px-12
                                "
                                type="password"
                                v-model="dataUser.password"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div class="mb-6 text-right">
                        <router-link
                            class="font-medium text-base text-gray-800"
                            :to="{ name: 'Register' }"
                            >Don't Have an Account?
                            <strong class="font-semibold text-blue-500"
                                >Register</strong
                            ></router-link
                        >
                    </div>
                    <div class="text-center">
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
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            dataUser: {
                username: '',
                password: '',
            },
        };
    },
    methods: {
        login() {
            this.$router.push({
                name: 'AdminHome',
            });
        },
    },
};
</script>
