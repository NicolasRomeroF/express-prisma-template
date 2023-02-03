import PostModel from "../../models/post.model";
import {
	ICreatePostInput,
	ICreatePostOutput,
	IGetPostsOutput,
} from "./post.service.types";

export const getPosts = (): Promise<IGetPostsOutput> => {
	return PostModel.getPosts();
};

export const createPost = (
	args: ICreatePostInput,
): Promise<ICreatePostOutput> => {
	return PostModel.createPost(args);
};
