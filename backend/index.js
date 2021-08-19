import express from "express";
import cors from "cors";

const app = express();
const port = 4500;

import articlesRoute from "./routes/ArticlesRoute.js";
import usersRoute from "./routes/UsersRoute.js";

// USE EXPRESS JSON
app.use(express.json());
// USE BODY PARSER
app.use(express.urlencoded({ extended: false }));
// USE CORS
app.use(cors());

// API ARTICLES
app.use("/api/articles", articlesRoute);
// API USERS
app.use("/api/users", usersRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
