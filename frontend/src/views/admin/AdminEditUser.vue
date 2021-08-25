<template>
    <main>
        <div class="container">
            <div class="w-8/12 mx-auto flex flex-wrap pt-5 pb-10">
                <form class="w-full block" @submit.prevent="updateUser">
                    <div class="mb-8 text-center">
                        <template v-if="user.picture">
                            <div
                                class="h-28 w-28 relative mx-auto rounded-full"
                            >
                                <img
                                    class="
                                        h-full
                                        w-full
                                        object-cover
                                        rounded-full
                                    "
                                    :src="
                                        previewImg == ''
                                            ? getImage(user.picture)
                                            : previewImg
                                    "
                                    alt="Picture"
                                />
                                <label
                                    for="picture"
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
                                for="picture"
                                class="
                                    h-28
                                    w-28
                                    mx-auto
                                    relative
                                    block
                                    rounded-full
                                    bg-blue-500
                                    text-white
                                    cursor-pointer
                                "
                            >
                                <svg
                                    class="
                                        w-12
                                        h-12
                                        absolute
                                        top-1/2
                                        left-1/2
                                        transform
                                        -translate-y-1/2 -translate-x-1/2
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
                            id="picture"
                            accept="image/png, image/gif, image/jpeg, image/jpg"
                            @change="checkImage"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            class="font-medium text-lg text-gray-800"
                            for="email"
                            >Email</label
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
                            type="email"
                            id="email"
                            placeholder="email"
                            v-model="user.email"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            class="font-medium text-lg text-gray-800"
                            for="username"
                            >Username</label
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
                            id="username"
                            placeholder="username"
                            v-model="user.username"
                        />
                    </div>
                    <div class="mb-8">
                        <label
                            class="font-medium text-lg text-gray-800"
                            for="password"
                            >Password</label
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
                            type="password"
                            id="password"
                            placeholder="password"
                            v-model="user.password"
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
    name: 'AdminEditUser',
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            previewImg: '',
        };
    },
    created() {
        this.$store.dispatch('user/getSingleUser', this.id);
    },
    computed: {
        ...mapState({
            user: (state) => state.user.user,
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
        checkImage(event) {
            this.user.picture = event.target.files[0];
            this.previewImg = URL.createObjectURL(event.target.files[0]);
        },
        updateUser() {
            const formData = new FormData();
            formData.append('id', this.user.id);
            formData.append('email', this.user.email);
            formData.append('username', this.user.username);
            formData.append('password', this.user.password);
            formData.append('file', this.user.picture);
            this.$store
                .dispatch('user/updateUser', formData)
                .then(() => {
                    this.$router.push({
                        name: 'AdminListUser',
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
