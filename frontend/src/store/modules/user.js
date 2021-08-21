import UsersService from '@/services/UsersService';

export const namespaced = true;

export const state = {
    users: [],
    created: 0,
};
export const mutations = {
    SET_ALL_USER(state, data) {
        state.users = data;
    },
    SET_CREATED(state, data) {
        state.created = data;
    },
};
export const actions = {
    getAllUser({ commit }) {
        return UsersService.getAllUser()
            .then((response) => {
                commit('SET_ALL_USER', response.data);
            })
            .catch((error) => {
                console.log('Something Wrong: ' + error);
            });
    },
    createUser({ commit }, data) {
        return UsersService.createUser(data)
            .then(() => {
                commit('SET_CREATED', 1);
            })
            .catch((error) => {
                console.log('Something Wrong: ' + error);
            });
    },
};
export const getters = {};
