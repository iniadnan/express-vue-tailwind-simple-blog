import ArticlesService from '@/services/ArticlesService';

export const namespaced = true;

export const state = {
    created: 0,
};
export const mutations = {
    SET_CREATED(state, data) {
        state.created = data;
    },
};
export const actions = {
    createArticle({ commit }, data) {
        return ArticlesService.createArticle(data)
            .then(() => {
                commit('SET_CREATED', 1);
            })
            .catch((error) => {
                console.log('Something Wrong: ' + error);
            });
    },
};
export const getters = {};
