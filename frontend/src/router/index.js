import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import AdminHome from '@/views/admin/AdminHome.vue';
import AdminAddArticle from '@/views/admin/AdminAddArticle.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/article/:slug',
        name: 'ArticleDetail',
        component: ArticleDetail,
        props: true,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/admin',
        name: 'AdminHome',
        component: AdminHome,
    },
    {
        path: '/admin/add-article',
        name: 'AdminAddArticle',
        component: AdminAddArticle,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
