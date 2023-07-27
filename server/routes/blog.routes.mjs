import express from "express";
import * as blogController from "../controllers/blog.controller.mjs";

const router = express.Router();

router.route("/").get(blogController.getAllBlogs);
router.route("/:bid").get(blogController.getBlog);
router.route("/").post(blogController.addBlog);

export default router;
