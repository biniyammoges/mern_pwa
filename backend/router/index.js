import express from "express";
import postRouter from "../router/postRouter.js";

const apiRouter = express.Router();

apiRouter.use("/post", postRouter);

export default apiRouter;
