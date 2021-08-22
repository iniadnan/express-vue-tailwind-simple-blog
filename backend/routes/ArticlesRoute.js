import express from 'express';

// IMPORT CONTROLLER
import { showAllArticle, showSingleArticle, createArticle, deleteOneArticle } from '../controllers/ArticlesController.js';

const articlesRoute = express.Router();

// GET: ALL ARTICLE
articlesRoute.get('/all', showAllArticle);

// GET: SINGLE ARTICLE
articlesRoute.get('/article/:slug', showSingleArticle);

// CREATE: CREATE NEW ARTICLE
articlesRoute.post('/create', createArticle);

// DELETE: DELETE SINGLE ARTICLE
articlesRoute.delete('/single/:id', deleteOneArticle);

export default articlesRoute;