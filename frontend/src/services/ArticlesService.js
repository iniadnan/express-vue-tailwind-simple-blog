import apiClient from '@/services.js';

export default {
    // GET ALL ARTICLE
    getAllArticle() {
        return apiClient.get('/articles/all');
    },
    // GET SINGLE ARTICLE
    getSingleArticle(slug) {
        return apiClient.get('/articles/article/' + slug);
    },
    // CREATE NEW ARTICLE
    createArticle(data) {
        return apiClient.post('/articles/create', data);
    },
};
