import express from 'express';

// IMPORT CONTROLLER
import { showAllUser, createUsers, deleteOneUser } from '../controllers/UsersController.js';

const usersRoute = express.Router();

// GET: ALL ARTICLE
usersRoute.get('/all', showAllUser);

// CREATE: CREATE NEW USER
usersRoute.post('/create', createUsers);

// DELETE: DELETE SINGLE USER
usersRoute.delete('/single/:id', deleteOneUser);

export default usersRoute;