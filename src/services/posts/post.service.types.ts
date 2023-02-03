import { Post } from "@prisma/client";
import { z } from "zod";
import { createPostSchema } from "../../validation/post.validation";

export type ICreatePostInput = z.infer<typeof createPostSchema>;

export type ICreatePostOutput = Post;

export type IGetPostsOutput = Post[];
