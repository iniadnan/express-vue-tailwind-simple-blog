// Import All Model Users
import {
  getAllArticle,
  getSingleArticle,
  insertArticle,
  deleteSingleArticle
} from "../models/ArticlesModel.js";

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

// CREATE NEW USERS
export const createArticle = (req, res) => {
  const data = {
    author: req.body.author.trim(),
    title: req.body.title.trim(),
    category: req.body.category.trim(),
    slug: req.body.slug.trim(),
    description: req.body.description.trim(),
    tags: req.body.tags.trim(),
  };
  insertArticle(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// DELETE SINGLE ARTICLE
export const deleteOneArticle = (req, res) => {
  deleteSingleArticle(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
