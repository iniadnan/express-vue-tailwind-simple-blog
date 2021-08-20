import ArticlesService from '@/services/ArticlesService';

export const namespaced = true;

export const state = {
    articles: [],
    article: {},
    created: 0,
};
export const mutations = {
    SET_ALL_ARTICLE(state, data) {
        state.articles = data;
    },
    SET_SINGLE_ARTICLE(state, data) {
        state.article = data;
    },
    SET_CREATED(state, data) {
        state.created = data;
    },
};
export const actions = {
    getAllArticle({ commit }) {
        return ArticlesService.getAllArticle()
            .then((response) => {
                commit('SET_ALL_ARTICLE', response.data);
            })
            .catch((error) => {
                console.log('Something Wrong: ' + error);
            });
    },
    getSingleArticle({ commit }, slug) {
        return ArticlesService.getSingleArticle(slug)
            .then((response) => {
                commit('SET_SINGLE_ARTICLE', response.data[0]);
            })
            .catch((error) => {
                console.log('Something Wrong: ' + error);
            });
    },
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
