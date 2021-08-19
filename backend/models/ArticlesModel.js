import db from "../configs/database.js";
import { v4 as uuidv4 } from "uuid";

// CREATE NEW USER
export const insertArticle = (data, result) => {
  data.id = uuidv4();
  db.query(
    "INSERT INTO articles (id, author, title, category, slug, description, tags) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [data.id, data.author, data.title, data.category, data.slug, data.description, data.tags],
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
