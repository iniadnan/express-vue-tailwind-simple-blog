import express from 'express';

// IMPORT CONTROLLER
import { showAllUser, createUsers } from '../controllers/UsersController.js';

const usersRoute = express.Router();

// GET: ALL ARTICLE
usersRoute.get('/all', showAllUser);

// CREATE: CREATE NEW USER
usersRoute.post('/create', createUsers);

export default usersRoute;