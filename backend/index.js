import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 4500;

import articlesRoute from "./routes/ArticlesRoute.js";
import usersRoute from "./routes/UsersRoute.js";

// MAKE DIRNAME BECAUSE USE TYPE MODULE
const __dirname = dirname(fileURLToPath(import.meta.url));

// USE PUBLIC FOLDER
app.use(express.static('public'))
// USE EXPRESS JSON
app.use(express.json());
// USE BODY PARSER
app.use(express.urlencoded({ extended: false }));
// USE CORS
app.use(cors());
// USE FILEUPLOAD
app.use(fileUpload());

// API ARTICLES
app.use("/api/articles", articlesRoute);
// API USERS
app.use("/api/users", usersRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
