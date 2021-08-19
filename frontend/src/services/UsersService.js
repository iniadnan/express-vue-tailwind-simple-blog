import apiClient from '@/services.js';

export default {
    // CREATE NEW USER
    createUser(data) {
        return apiClient.post('/users/create', data);
    },
};
