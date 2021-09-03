import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import AdminHome from '@/views/admin/AdminHome.vue';
import AdminListArticle from '@/views/admin/AdminListArticle.vue';
import AdminListUser from '@/views/admin/AdminListUser.vue';
import AdminAddArticle from '@/views/admin/AdminAddArticle.vue';
import AdminEditArticle from '@/views/admin/AdminEditArticle.vue';
import AdminEditUser from '@/views/admin/AdminEditUser.vue';

// AUTH GUARD TO REDIRECT IF BYPASS ADMIN
const authGuard = (to, from, next) => {
    const loggedIn = localStorage.getItem('user');

    if (!loggedIn) {
        return next('/');
    }

    next();
};

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
        beforeEnter: authGuard,
    },
    {
        path: '/admin/list-article',
        name: 'AdminListArticle',
        component: AdminListArticle,
        beforeEnter: authGuard,
    },
    {
        path: '/admin/list-user',
        name: 'AdminListUser',
        component: AdminListUser,
        beforeEnter: authGuard,
    },
    {
        path: '/admin/add-article',
        name: 'AdminAddArticle',
        component: AdminAddArticle,
        beforeEnter: authGuard,
    },
    {
        path: '/admin/edit-article/:slug',
        name: 'AdminEditArticle',
        component: AdminEditArticle,
        props: true,
        beforeEnter: authGuard,
    },
    {
        path: '/admin/edit-user/:id',
        name: 'AdminEditUser',
        component: AdminEditUser,
        props: true,
        beforeEnter: authGuard,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// router.beforeEach((to, from, next) => {
//     // redirect to login page if user is not logged in and trying to access a restricted page
//     const publicPages = ['/login', '/register', '/', '/article/*'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');

//     if (authRequired && !loggedIn) {
//         return next('/login');
//     }

//     next();
// });

export default router;
