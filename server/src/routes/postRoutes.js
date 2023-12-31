import express from "express";
import { getPosts, createPost } from "../controllers/postsControllers.js";

const router = express.Router();
//localhost:5000/api/v1/post/upload
router.get("/", getPosts);
router.post("post/upload", createPost);

export default router;
