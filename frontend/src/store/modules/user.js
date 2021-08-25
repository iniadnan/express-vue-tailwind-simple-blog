import UsersService from '@/services/UsersService';

export const namespaced = true;

export const state = {
    users: [],
    user: {},
    created: 0,
    updated: 0,
    deleted: '',
};
export const mutations = {
    SET_ALL_USER(state, data) {
        state.users = data;
    },
    SET_SINGLE_USER(state, data) {
        state.user = data;
    },
    SET_CREATED(state, data) {
        state.created = data;
    },
    SET_UPDATED(state, data) {
        state.updated = data;
    },
    SET_DELETED(state, data) {
        state.deleted = data;
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
    getSingleUser({ commit, getters }, id) {
        let user = getters.getUserById(id);

        if (user) {
            commit('SET_SINGLE_USER', user);
        } else {
            return UsersService.getSingleUser(id)
                .then((response) => {
                    commit('SET_SINGLE_USER', response.data[0]);
                })
                .catch((error) => {
                    console.log('Something Wrong: ' + error);
                });
        }
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
    updateUser({ commit }, data) {
        return UsersService.updateUser(data)
            .then(() => {
                commit('SET_UPDATED', 1);
            })
            .catch((error) => {
                console.log('Something Wrong: ' + error);
            });
    },
    deleteSingleUser({ commit }, id) {
        return UsersService.deleteSingleUser(id)
            .then(() => {
                commit('SET_DELETED', id);
            })
            .catch((error) => {
                console.log('Something Wrong: ' + error);
            });
    },
};
export const getters = {
    getUserById: (state) => (id) => {
        return state.users.find((user) => user.id === id);
    },
};
