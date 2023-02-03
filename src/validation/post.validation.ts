import { z } from "zod";

export const createPostSchema = z.object({
	title: z.string().min(1).max(100),
	author: z.string().min(1).max(100),
	body: z.string().min(1).max(1000),
});
