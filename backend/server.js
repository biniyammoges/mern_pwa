import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDb from "./config/db.js";
import fileupload from "express-fileupload";
import apiRouter from "./router/index.js";

dotenv.config();

connectDb();

const app = express();

// bodyparser
app.use(express.json());

// file upload
app.use(fileupload());

// mount router
app.use("/", apiRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`.yellow.bold)
);
