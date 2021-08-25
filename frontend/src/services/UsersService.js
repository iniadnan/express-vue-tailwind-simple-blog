import apiClient from '@/services.js';

export default {
    // GET ALL USER
    getAllUser() {
        return apiClient.get('/users/all');
    },
    // GET SINGLE USER
    getSingleUser(id) {
        return apiClient.get('/users/user/' + id);
    },
    // CREATE NEW USER
    createUser(data) {
        return apiClient.post('/users/create', data);
    },
    // UPDATE USER
    updateUser(data) {
        console.log(data);
        return apiClient.put('/users/update', data);
    },
    // DELETE SINGLE USER
    deleteSingleUser(id) {
        return apiClient.delete('/users/single/' + id);
    },
};
