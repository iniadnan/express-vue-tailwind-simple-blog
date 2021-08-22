<template>
    <main class="min-h-screen">
        <div class="container">
            <div class="w-8/12 mx-auto py-8">
                <table class="min-w-full bg-white rounded overflow-hidden">
                    <thead class="bg-blue-500">
                        <tr>
                            <th
                                class="font-semibold text-lg text-gray-100 py-4"
                            >
                                #
                            </th>
                            <th
                                class="font-semibold text-lg text-gray-100 py-4"
                            >
                                Picture
                            </th>
                            <th
                                class="font-semibold text-lg text-gray-100 py-4"
                            >
                                Email
                            </th>
                            <th
                                class="font-semibold text-lg text-gray-100 py-4"
                            >
                                Username
                            </th>
                            <th
                                class="font-semibold text-lg text-gray-100 py-4"
                            >
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in users" :key="user.username">
                            <td
                                class="
                                    font-semibold
                                    text-base text-gray-800 text-center
                                    py-4
                                    px-5
                                "
                            >
                                {{ index + 1 }}
                            </td>
                            <td
                                class="
                                    font-semibold
                                    text-base text-gray-800
                                    py-4
                                    px-5
                                "
                            >
                                <img
                                    class="
                                        h-10
                                        w-10
                                        object-cover
                                        rounded-full
                                        mx-auto
                                    "
                                    :src="getImage('users', 'iniadnan.png')"
                                    :alt="user.username"
                                />
                            </td>
                            <td
                                class="
                                    text-base text-gray-800 text-center
                                    py-4
                                    px-5
                                "
                            >
                                {{ user.email }}
                            </td>
                            <td
                                class="
                                    font-semibold
                                    text-base text-gray-800 text-center
                                    py-4
                                    px-5
                                "
                            >
                                {{ user.username }}
                            </td>
                            <td
                                class="
                                    flex
                                    items-center
                                    justify-center
                                    pt-6
                                    px-5
                                "
                            >
                                <router-link
                                    class="text-yellow-500 pr-1"
                                    :to="{ name: 'AdminAddArticle' }"
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
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        ></path>
                                    </svg>
                                </router-link>
                                <button
                                    type="button"
                                    class="text-red-500 pl-1"
                                    @click="deleteUser(user.id)"
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
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        ></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div
            id="notification"
            class="
                fixed
                bottom-12
                right-12
                transform
                bg-green-500
                rounded
                py-3
                px-8
            "
            :class="{
                'translate-y-0 opacity-100 visible': dataNotification === true,
                'translate-y-4 opacity-0 invisible': dataNotification === false,
            }"
        >
            <p class="font-medium text-lg text-white">Success Deleted Data:</p>
            <strong class="text-lg text-white"
                >cf1ae019-e2b2-4156-aca2-5fcde755693c</strong
            >
            <button
                class="absolute top-2 right-2 text-white"
                type="button"
                @click="closeNotification"
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
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </button>
        </div>
    </main>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'AdminListUser',
    data() {
        return {
            dataNotification: false,
        };
    },
    created() {
        this.$store.dispatch('user/getAllUser');
    },
    computed: {
        ...mapState({
            users: (state) => state.user.users,
        }),
    },
    methods: {
        getImage(path, img) {
            return require(`@/assets/images/${path}/${img}`);
        },
        deleteUser(id) {
            this.$store
                .dispatch('user/deleteSingleUser', id)
                .then(() => {
                    this.$store.dispatch('user/getAllUser');
                    this.dataNotification = true;
                    setTimeout(() => {
                        this.dataNotification = false;
                    }, 5000);
                })
                .catch((error) => {
                    alert('Something Error: ' + error);
                });
        },
        closeNotification() {
            this.dataNotification = false;
        },
    },
};
</script>

<style scoped>
#notification {
    transition: 0.2s ease-in;
}
table tbody tr:nth-child(odd) {
    background-color: #fff;
    border-bottom: 1px solid #f8fbf8;
}
table tbody tr:nth-child(even) {
    background-color: #eff6ef;
}
</style>
