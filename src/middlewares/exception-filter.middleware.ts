import { ErrorRequestHandler } from "express";
import { HttpError } from "../errors/http.error";

function isAnAllowedError(err: unknown): err is HttpError {
	return err instanceof HttpError;
}

export const exceptionFilter: ErrorRequestHandler = (
	err: unknown,
	req,
	res,
	next,
) => {
	if (!err) {
		return next();
	}

	console.error({
		error: err,
		path: req.path,
		method: req.method,
		args: {
			...req.params,
			...req.query,
			...req.body,
		},
	});

	if (isAnAllowedError(err)) {
		return res
			.status(err.statusCode)
			.json({ error: err.name, message: err.message });
	}

	return res.status(500).json({
		error: "Internal Server Error",
		message: "Something went wrong",
	});
};
