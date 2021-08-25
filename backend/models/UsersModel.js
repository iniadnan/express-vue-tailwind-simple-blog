import db from "../configs/database.js";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

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

// GET ALL USERS
export const getAllUser = (result) => {
  db.query("SELECT * FROM users ORDER BY created_at", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// GET SINGLE ARTICLE
export const getSingleUser = (id, result) => {
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// CREATE NEW USER
export const insertUser = (data, result) => {
  data.id = uuidv4();
  db.query(
    "INSERT INTO users (id, email, username, password) VALUES (?, ?, ?, ?)",
    [data.id, data.email, data.username, data.password],
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
export const updateUserById = (data, result) => {
  const fileImage = data.picture.file;
  fileImage.name =
    fileImage.mimetype.split("/")[1] == "jpeg"
      ? randomSN(32) + ".jpg"
      : randomSN(32) + "." + fileImage.mimetype.split("/")[1];
  fileImage.mv(
    `${path.join(__dirname, "../public")}/images/users/${fileImage.name}`,
    function (err) {
      if (err) {
        console.log(err);
        result(err, null);
      }
    }
  );
  db.query(
    "UPDATE users SET email = ?, username = ?, password = ?, picture = ?, updated_at = ? WHERE id = ?",
    [data.email, data.username, data.password, fileImage.name, data.updated, data.id],
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

// DELETE SINGLE USER
export const deleteSingleUser = (id, result) => {
  db.query("DELETE FROM users WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
