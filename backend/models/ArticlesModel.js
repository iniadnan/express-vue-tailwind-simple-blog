import db from "../configs/database.js";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

// MAKE DIRNAME BECAUSE USE TYPE MODULE
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// RANDOM STRING & NUMBER
function randomSN(length) {
  let result = "";
  let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

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
  const fileImage = data.image == null ? null : data.image.file;
  if (fileImage != null) {
    fileImage.name = fileImage.mimetype.split("/")[1] == "jpeg" ? randomSN(32) + ".jpg" : randomSN(32) + "." + fileImage.mimetype.split("/")[1];
    fileImage.mv(
      `${path.join(__dirname, "../public")}/images/articles/${fileImage.name}`,
      function (err) {
        if (err) {
          console.log(err);
          result(err, null);
        }
      }
    );
    db.query(
      "UPDATE articles SET author = ?, title = ?, category = ?, slug = ?, description = ?, tags = ?, location = ?, image = ?, updated_at = ? WHERE id = ?",
      [
        data.author,
        data.title,
        data.category,
        data.slug,
        data.description,
        data.tags,
        data.location,
        fileImage.name,
        data.updated,
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
  } else {
    db.query(
      "UPDATE articles SET author = ?, title = ?, category = ?, slug = ?, description = ?, tags = ?, location = ?, updated_at = ? WHERE id = ?",
      [
        data.author,
        data.title,
        data.category,
        data.slug,
        data.description,
        data.tags,
        data.location,
        data.updated,
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
  }
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
