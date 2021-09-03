import apiClient from '@/services.js';
import UsersService from '@/services/UsersService';

export const namespaced = true;

export const state = {
    users: [],
    user: {},
    created: 0,
    updated: 0,
    deleted: [],
    session: null,
    error: {},
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
    SET_USER_DATA(state, userData) {
        const data = userData.length > 0 ? userData[0] : userData;
        localStorage.setItem('user', JSON.stringify(data));
        apiClient.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${data.token}`;
        state.session = data;
    },
    LOGOUT() {
        localStorage.removeItem('user');
        location.reload();
    },
    RESET_CREATED(state) {
        state.created = 0;
    },
    RESET_UPDATED(state) {
        state.updated = 0;
    },
    RESET_DELETED(state) {
        state.deleted = [];
    },
    RESET_ERROR(state) {
        state.error = {};
    },
};
export const actions = {
    getAllUser({ commit }) {
        return UsersService.getAllUser()
            .then((response) => {
                commit('SET_ALL_USER', response.data);
            })
            .catch((error) => {
                console.log('Something Wrongs: ' + error);
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
    createUser({ commit, state }, data) {
        return UsersService.createUser(data)
            .then((response) => {
                if (response.data.errno) {
                    state.error = {
                        code: response.data.code,
                        errno: response.data.errno,
                        message: response.data.sqlMessage,
                    };
                    commit('SET_CREATED', 0);
                } else {
                    commit('SET_CREATED', 1);
                }
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
    login({ commit, state }, credentials) {
        return UsersService.loginUser(credentials).then(({ data }) => {
            if (data != null || data != undefined) {
                commit('SET_USER_DATA', data);
            } else {
                state.error = {
                    status: 'NULL',
                };
            }
        });
    },
    logout({ commit }) {
        commit('LOGOUT');
    },
};
export const getters = {
    getUserById: (state) => (id) => {
        return state.users.find((user) => user.id === id);
    },
};
