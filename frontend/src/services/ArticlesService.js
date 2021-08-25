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
    // UPDATE ARTICLE
    updateArticle(data) {
        return apiClient.put('/articles/update', data);
    },
    // DELETE SINGLE ARTICLE
    deleteSingleArticle(id) {
        return apiClient.delete('/articles/single/' + id);
    },
};
