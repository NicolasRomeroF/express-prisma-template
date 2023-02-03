import { Post, PrismaClient } from "@prisma/client";
import { ICreatePostInput } from "./post.model.types";

const prisma = new PrismaClient();

const createPost = async (args: ICreatePostInput): Promise<Post> => {
	const post = await prisma.post.create({
		data: args,
	});
	return post;
};

const getPosts = async (): Promise<Post[]> => {
	const posts = await prisma.post.findMany({});

	return posts;
};

export default { createPost, getPosts };
