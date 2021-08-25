import db from "../configs/database.js";
import { v4 as uuidv4 } from "uuid";

// GET ALL ARTICLE
export const getAllArticle = (result) => {
  db.query("SELECT * FROM articles ORDER BY created_at", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// GET SINGLE ARTICLE
export const getSingleArticle = (slug, result) => {
  db.query("SELECT articles.*, users.picture FROM articles JOIN users ON articles.author = users.username WHERE slug = ?", [slug], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// CREATE NEW ARTICLE
export const insertArticle = (data, result) => {
  data.id = uuidv4();
  db.query(
    "INSERT INTO articles (id, author, title, category, slug, description, tags, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      data.id,
      data.author,
      data.title,
      data.category,
      data.slug,
      data.description,
      data.tags,
      data.location,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// UPDATE ARTICLE
export const updateArticleById = (data, result) => {
  db.query(
    "UPDATE articles SET author = ?, title = ?, category = ?, slug = ?, description = ?, tags = ?, location = ? WHERE id = ?",
    [
      data.author,
      data.title,
      data.category,
      data.slug,
      data.description,
      data.tags,
      data.location,
      data.id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// DELETE SINGLE ARTICLE
export const deleteSingleArticle = (id, result) => {
  db.query("DELETE FROM articles WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
