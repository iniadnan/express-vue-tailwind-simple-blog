import express from "express";
import bcrypt from "bcrypt";

// IMPORT CONTROLLER
import {
  showAllUser,
  showSingleUser,
  createUser,
  updateUser,
  deleteOneUser,
  loginUser,
} from "../controllers/UsersController.js";

const usersRoute = express.Router();

usersRoute.get("/cek", (req, res) => {
  const password = "oe3im3io2r3o2";
  const rounds = 10;
  bcrypt.hash(password, rounds, (err, hash) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(hash);
  });
});

usersRoute.get("/cok", (req, res) => {
  const gas = '$2b$10$qx9msqnQxXB.D1.RUUrjBOLhnz6V2aPqRNnJKmhnl6I5j79t0PlGW';

  bcrypt.compare('oe3im3io2r3o2', gas, (err, res) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(res) //true or false
  })
});

// GET: ALL USER
usersRoute.get("/all", showAllUser);

// GET: SINGLE USER
usersRoute.get("/user/:id", showSingleUser);

// CREATE: CREATE NEW USER
usersRoute.post("/create", createUser);

// UPDATE: UPDATE ARTICLE
usersRoute.put("/update", updateUser);

// DELETE: DELETE SINGLE USER
usersRoute.delete("/single/:id", deleteOneUser);

// AUTH: LOGIN
usersRoute.post("/login", loginUser);

export default usersRoute;
