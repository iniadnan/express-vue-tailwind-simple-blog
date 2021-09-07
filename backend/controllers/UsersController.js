import jwt from "jsonwebtoken";

// Import All Model Users
import {
  getAllUser,
  getSingleUser,
  insertUser,
  updateUserById,
  deleteSingleUser,
  checkLoginUser,
} from "../models/UsersModel.js";

let letterNumber = /^[0-9a-zA-Z]+$/;
let mailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let dateNow = new Date();
let monthNow =
  dateNow.getMonth() + 1 < 10
    ? "0" + (dateNow.getMonth() + 1)
    : dateNow.getMonth() + 1;
let hoursNow =
  dateNow.getHours() < 10 ? "0" + dateNow.getHours() : dateNow.getHours();
let minutesNow =
  dateNow.getMinutes() < 10 ? "0" + dateNow.getMinutes() : dateNow.getMinutes();
let secondsNow =
  dateNow.getSeconds() < 10 ? "0" + dateNow.getSeconds() : dateNow.getSeconds();
let today =
  dateNow.getFullYear() +
  "-" +
  monthNow +
  "-" +
  dateNow.getDate() +
  " " +
  hoursNow +
  ":" +
  minutesNow +
  ":" +
  secondsNow;

// GET ALL USER
export const showAllUser = (req, res) => {
  const bearerHeader = req.headers["authorization"] == undefined ? res.sendStatus(401) : req.headers["authorization"].split(" ");
  jwt.verify(bearerHeader[1], process.env.TOKEN_SECRET, (err) => {
    if (err) {
      res.sendStatus(401);
    } else {
      getAllUser((err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    }
  });
};

// GET SINGLE USER
export const showSingleUser = (req, res) => {
  const bearerHeader = req.headers["authorization"] == undefined ? res.sendStatus(401) : req.headers["authorization"].split(" ");
  jwt.verify(bearerHeader[1], process.env.TOKEN_SECRET, (err) => {
    if (err) {
      res.sendStatus(401);
    } else {
      getSingleUser(req.params.id, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    }
  });
};

// CREATE NEW USERS
export const createUser = (req, res) => {
  const data = {
    email: req.body.email.trim().toLowerCase(),
    username: req.body.username.trim().toLowerCase(),
    password: req.body.password.trim(),
  };
  // SIMPLE VALIDATION
  if (
    !data.email.match(mailFormat) ||
    !data.username.match(letterNumber) ||
    !data.password.match(letterNumber)
  ) {
    return res.json(null);
  }
  insertUser(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// UPDATE USER
export const updateUser = (req, res) => {
  const bearerHeader = req.headers["authorization"] == undefined ? res.sendStatus(401) : req.headers["authorization"].split(" ");
  jwt.verify(bearerHeader[1], process.env.TOKEN_SECRET, (err) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const data = {
        id: req.body.id.trim(),
        email: req.body.email.trim().toLowerCase(),
        username: req.body.username.trim().toLowerCase(),
        oldPassword: req.body.oldPassword == '' ? '' : req.body.oldPassword.trim(),
        newPassword: req.body.newPassword == '' ? '' : req.body.newPassword.trim(),
        confirmPassword: req.body.confirmPassword == '' ? '' : req.body.confirmPassword.trim(),
        picture: req.files == null ? null : req.files,
        updated: today,
      };
      updateUserById(data, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    }
  });
};

// DELETE SINGLE USER
export const deleteOneUser = (req, res) => {
  const bearerHeader = req.headers["authorization"] == undefined ? res.sendStatus(401) : req.headers["authorization"].split(" ");
  jwt.verify(bearerHeader[1], process.env.TOKEN_SECRET, (err) => {
    if (err) {
      res.sendStatus(401);
    } else {
      deleteSingleUser(req.params.id, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    }
  });

};

// AUTH: LOGIN USER
export const loginUser = (req, res) => {
  const data = {
    username: req.body.username.trim().toLowerCase(),
    password: req.body.password.trim(),
  };
  checkLoginUser(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
