import express from "express";
import { deletePost } from "../controller/postController.js";
import { getPosts, addPost } from "../controller/postController.js ";
const router = express.Router();

router.route("/").get(getPosts).post(addPost);
router.route("/:id").delete(deletePost);

export default router;
