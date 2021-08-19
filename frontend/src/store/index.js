import { createStore } from 'vuex';
import * as article from '@/store/modules/article.js';
import * as user from '@/store/modules/user.js';

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        article,
        user,
    },
});
