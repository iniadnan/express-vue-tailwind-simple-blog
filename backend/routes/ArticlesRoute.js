import express from 'express';

// IMPORT CONTROLLER
import { showAllArticle, showAllAdminArticle, showSingleArticle, showSingleAdminArticle, createArticle, updateArticle, deleteOneArticle } from '../controllers/ArticlesController.js';

const articlesRoute = express.Router();

// GET: ALL ARTICLE
articlesRoute.get('/all', showAllArticle);

// GET: ALL ARTICLE 'ADMIN'
articlesRoute.get('/admin/all', showAllAdminArticle);

// GET: SINGLE ARTICLE
articlesRoute.get('/article/:slug', showSingleArticle);

// GET: SINGLE ARTICLE 'ADMIN'
articlesRoute.get('/article/admin/:slug', showSingleAdminArticle);

// CREATE: CREATE NEW ARTICLE
articlesRoute.post('/create', createArticle);

// UPDATE: UPDATE ARTICLE
articlesRoute.put('/update', updateArticle);

// DELETE: DELETE SINGLE ARTICLE
articlesRoute.delete('/single/:id', deleteOneArticle);

export default articlesRoute;