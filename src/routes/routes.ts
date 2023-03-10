import { Router } from "express";
import postRouter from "./post.routes";

const router = Router();

router.use("/posts", postRouter);

export default router;
