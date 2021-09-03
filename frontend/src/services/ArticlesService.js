import apiClient from '@/services.js';

export default {
    // GET ALL ARTICLE
    getAllArticle() {
        return apiClient.get('/articles/all');
    },
    // GET ALL ARTICLE 'ADMIN'
    getAllAdminArticle() {
        return apiClient.get('/articles/admin/all', {
            headers: {
                Authorization:
                    apiClient.defaults.headers.common['Authorization'],
            },
        });
    },
    // GET SINGLE ARTICLE
    getSingleArticle(slug) {
        return apiClient.get('/articles/article/' + slug);
    },
    // GET SINGLE ARTICLE 'ADMIN'
    getSingleAdminArticle(slug) {
        return apiClient.get('/articles/article/admin/' + slug, {
            headers: {
                Authorization:
                    apiClient.defaults.headers.common['Authorization'],
            },
        });
    },
    // CREATE NEW ARTICLE
    createArticle(data) {
        return apiClient.post('/articles/create', data);
    },
    // UPDATE ARTICLE
    updateArticle(data) {
        return apiClient.put('/articles/update', data, {
            headers: {
                Authorization:
                    apiClient.defaults.headers.common['Authorization'],
            },
        });
    },
    // DELETE SINGLE ARTICLE
    deleteSingleArticle(id) {
        return apiClient.delete('/articles/single/' + id);
    },
};
