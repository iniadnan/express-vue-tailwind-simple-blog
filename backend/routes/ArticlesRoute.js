import express from 'express';

// IMPORT CONTROLLER
import { createArticle } from '../controllers/ArticlesController.js';

const articlesRoute = express.Router();

// CREATE: CREATE NEW ARTICLE
articlesRoute.post('/create', createArticle);

export default articlesRoute;