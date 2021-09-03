import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import apiClient from '@/services.js';
import './main.css';

const AppVue3 = createApp({
    render() {
        return h(App);
    },
    created() {
        const userString = localStorage.getItem('user');
        if (userString) {
            const userData = JSON.parse(userString);
            this.$store.commit('user/SET_USER_DATA', userData);
        }
        // IF ATTACKER MAKE WRONG TOKEN
        apiClient.interceptors.response.use(
            (response) => response,
            (error) => {
                console.log(error.response);
                if (error.response.status === 401) {
                    this.$store.dispatch('user/logout');
                    this.$router.push('/');
                }
                return Promise.reject(error);
            }
        );
    },
});

AppVue3.use(store).use(router).mount('#app');
