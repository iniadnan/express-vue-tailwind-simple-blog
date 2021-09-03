import jwt from "jsonwebtoken";

// Import All Model Users
import {
  getAllArticle,
  getSingleArticle,
  insertArticle,
  updateArticleById,
  deleteSingleArticle,
} from "../models/ArticlesModel.js";

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

// GET ALL ARTICLE
export const showAllArticle = (req, res) => {
  getAllArticle((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// GET ALL ARTICLE 'ADMIN'
export const showAllAdminArticle = (req, res) => {
  const bearerHeader =
    req.headers["authorization"] == undefined
      ? res.sendStatus(401)
      : req.headers["authorization"].split(" ");
  jwt.verify(bearerHeader[1], "the_secret_key", (err) => {
    if (err) {
      res.sendStatus(401);
    } else {
      getAllArticle((err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    }
  });
};

// GET SINGLE ARTICLE
export const showSingleArticle = (req, res) => {
  getSingleArticle(req.params.slug, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// GET SINGLE ARTICLE 'ADMIN'
export const showSingleAdminArticle = (req, res) => {
  const bearerHeader =
    req.headers["authorization"] == undefined
      ? res.sendStatus(401)
      : req.headers["authorization"].split(" ");
  jwt.verify(bearerHeader[1], "the_secret_key", (err) => {
    if (err) {
      res.sendStatus(401);
    } else {
      getSingleArticle(req.params.slug, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    }
  });
};

// CREATE NEW ARTICLE
export const createArticle = (req, res) => {
  const bearerHeader =
    req.headers["authorization"] == undefined
      ? res.sendStatus(401)
      : req.headers["authorization"].split(" ");
  jwt.verify(bearerHeader[1], "the_secret_key", (err) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const data = {
        author: req.body.author.trim(),
        title: req.body.title.trim(),
        category: req.body.category.trim(),
        slug: req.body.slug.trim(),
        description: req.body.description.trim(),
        tags: req.body.tags.trim(),
        location: req.body.location.trim(),
      };
      insertArticle(data, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    }
  });
};

// UPDATE ARTICLE
export const updateArticle = (req, res) => {
  const bearerHeader =
    req.headers["authorization"] == undefined
      ? res.sendStatus(401)
      : req.headers["authorization"].split(" ");
  jwt.verify(bearerHeader[1], "the_secret_key", (err) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const data = {
        id: req.body.id.trim(),
        author: req.body.author.trim(),
        title: req.body.title.trim(),
        category: req.body.category.trim(),
        slug: req.body.slug.trim(),
        description: req.body.description.trim(),
        tags: req.body.tags.trim(),
        location: req.body.location.trim(),
        image: req.files == null ? null : req.files,
        updated: today,
      };
      updateArticleById(data, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    }
  });
};

// DELETE SINGLE ARTICLE
export const deleteOneArticle = (req, res) => {
  const bearerHeader =
    req.headers["authorization"] == undefined
      ? res.sendStatus(401)
      : req.headers["authorization"].split(" ");
  jwt.verify(bearerHeader[1], "the_secret_key", (err) => {
    if (err) {
      res.sendStatus(401);
    } else {
      deleteSingleArticle(req.params.id, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    }
  });
};
