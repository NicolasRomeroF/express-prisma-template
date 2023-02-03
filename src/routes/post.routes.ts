import { Router } from "express";
import { controllerMiddleware } from "../middlewares/controller.middleware";
import { createPost, getPosts } from "../services/posts/post.service";
import { createPostSchema } from "../validation/post.validation";

const postRouter = Router();

postRouter.get("/", controllerMiddleware(getPosts));

postRouter.post("/", controllerMiddleware(createPost, createPostSchema));

export default postRouter;
