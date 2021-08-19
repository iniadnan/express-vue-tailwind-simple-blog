import express from 'express';

// IMPORT CONTROLLER
import { createUsers } from '../controllers/UsersController.js';

const usersRoute = express.Router();

// CREATE: CREATE NEW USER
usersRoute.post('/create', createUsers);

export default usersRoute;