// Import All Model Users
import {
  getAllArticle,
  getSingleArticle,
  insertArticle,
  updateArticleById,
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

// CREATE NEW ARTICLE
export const createArticle = (req, res) => {
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
};

// UPDATE ARTICLE
export const updateArticle = (req, res) => {
  const data = {
    id: req.body.id.trim(),
    author: req.body.author.trim(),
    title: req.body.title.trim(),
    category: req.body.category.trim(),
    slug: req.body.slug.trim(),
    description: req.body.description.trim(),
    tags: req.body.tags.trim(),
    location: req.body.location.trim(),
  };
  updateArticleById(data, (err, results) => {
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
