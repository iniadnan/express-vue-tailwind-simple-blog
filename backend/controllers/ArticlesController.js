// Import All Model Users
import { insertArticle } from "../models/ArticlesModel.js";

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
