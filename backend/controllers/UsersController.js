// Import All Model Users
import { getAllUser, insertUser } from "../models/UsersModel.js";
let letterNumber = /^[0-9a-zA-Z]+$/;
let mailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// GET ALL USER
export const showAllUser = (req, res) => {
  getAllUser((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
}

// CREATE NEW USERS
export const createUsers = (req, res) => {
  const data = {
    email: req.body.email.trim(),
    username: req.body.username.trim(),
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
