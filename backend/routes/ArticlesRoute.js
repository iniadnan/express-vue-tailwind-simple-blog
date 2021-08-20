import express from 'express';

// IMPORT CONTROLLER
import { showAllArticle, showSingleArticle, createArticle } from '../controllers/ArticlesController.js';

const articlesRoute = express.Router();

// GET: ALL ARTICLE
articlesRoute.get('/all', showAllArticle);

// GET: SINGLE ARTICLE
articlesRoute.get('/article/:slug', showSingleArticle);

// CREATE: CREATE NEW ARTICLE
articlesRoute.post('/create', createArticle);

export default articlesRoute;