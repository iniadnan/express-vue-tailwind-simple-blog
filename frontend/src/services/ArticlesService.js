import apiClient from '@/services.js';

export default {
    // CREATE NEW USER
    createArticle(data) {
        return apiClient.post('/articles/create', data);
    },
};
