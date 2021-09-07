import db from "../configs/database.js";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
  const userPassword = data.password;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(userPassword, salt);
  db.query(
    "INSERT INTO users (id, email, username, password) VALUES (?, ?, ?, ?)",
    [data.id, data.email, data.username, hashPassword],
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

// UPDATE USER
export const updateUserById = (data, result) => {
  function comparePassword() {
    return new Promise(function (resolve, reject) {
      db.query(
        "SELECT password FROM users WHERE id = ?",
        data.id,
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            let compare = bcrypt.compareSync(
              data.oldPassword,
              results[0].password
            );
            resolve(compare);
          }
        }
      );
    });
  }

  // Call start
  (async () => {
    const checkCompare = await comparePassword();
    if (checkCompare) {
      const userPassword = data.newPassword;
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(userPassword, salt);
      const fileImage = data.picture == null ? null : data.picture.file;
      if (fileImage != null) {
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
          [
            data.email,
            data.username,
            hashPassword,
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
        const userPassword = data.newPassword;
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(userPassword, salt);
        db.query(
          "UPDATE users SET email = ?, username = ?, password = ?, updated_at = ? WHERE id = ?",
          [data.email, data.username, hashPassword, data.updated, data.id],
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
    } else {
      const fileImage = data.picture == null ? null : data.picture.file;
      if (fileImage != null) {
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
          "UPDATE users SET email = ?, username = ?, picture = ?, updated_at = ? WHERE id = ?",
          [data.email, data.username, fileImage.name, data.updated, data.id],
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
          "UPDATE users SET email = ?, username = ?, updated_at = ? WHERE id = ?",
          [data.email, data.username, data.updated, data.id],
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
    }
  })();
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

// CHECK LOGIN USER
export const checkLoginUser = (data, result) => {
  db.query(
    "SELECT email, username, password, picture FROM users WHERE username = ?",
    data.username,
    (err, results) => {
      if (results.length > 0) {
        // CHECK PASSWORD BCRYPT
        const checkPassword = bcrypt.compareSync(
          data.password,
          results[0].password
        );
        if (checkPassword) {
          delete results[0].password;
          results[0].random = randomSN(40);
          results[0].token = jwt.sign({ results }, process.env.TOKEN_SECRET, { expiresIn: '4000s' });
          delete results[0].random;
          result(null, results);
        } else {
          console.log(err);
          result(err, null);
        }
      } else {
        console.log(err);
        result(err, null);
      }
    }
  );
};
