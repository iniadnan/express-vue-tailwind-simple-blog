import express from 'express';

// IMPORT CONTROLLER
import { showAllUser, showSingleUser, createUser, updateUser, deleteOneUser } from '../controllers/UsersController.js';

const usersRoute = express.Router();

// GET: ALL USER
usersRoute.get('/all', showAllUser);

// GET: SINGLE USER
usersRoute.get('/user/:id', showSingleUser);

// CREATE: CREATE NEW USER
usersRoute.post('/create', createUser);

// UPDATE: UPDATE ARTICLE
usersRoute.put('/update', updateUser);

// DELETE: DELETE SINGLE USER
usersRoute.delete('/single/:id', deleteOneUser);

export default usersRoute;