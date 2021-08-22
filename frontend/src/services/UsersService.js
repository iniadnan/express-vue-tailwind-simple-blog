import apiClient from '@/services.js';

export default {
    // GET ALL ARTICLE
    getAllUser() {
        return apiClient.get('/users/all');
    },
    // CREATE NEW USER
    createUser(data) {
        return apiClient.post('/users/create', data);
    },
    // DELETE SINGLE ARTICLE
    deleteSingleUser(id) {
        return apiClient.delete('/users/single/' + id);
    },
};
