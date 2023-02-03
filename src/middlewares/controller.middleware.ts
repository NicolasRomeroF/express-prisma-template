import { NextFunction, Request, Response } from "express";
import { ZodError, ZodType } from "zod";
import { HttpError } from "../errors/http.error";

export const controllerMiddleware = <Input = undefined, Output = undefined>(
	actuator: (args: Input) => Promise<Output> | Output,
	schema?: ZodType<Input>,
) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		const args = {
			...req.params,
			...req.query,
			...req.body,
		};

		try {
			schema?.parse(args);
		} catch (err) {
			const error = err as ZodError;
			next(new HttpError(400, error.message));
		}
		try {
			const output = await actuator(args);
			console.log(output);
			return res.json(output);
		} catch (err) {
			next(err);
		}
	};
};
