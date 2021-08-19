import db from "../configs/database.js";
import { v4 as uuidv4 } from "uuid";

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
