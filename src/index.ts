import { PrismaClient } from "@prisma/client";
import express from "express";
import environment from "./config/environment.config";
import { exceptionFilter } from "./middlewares/exception-filter.middleware";
import routes from "./routes/routes";

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/", async (_req, res) => {
	res.send({
		status: true,
	});
});

app.use(routes);

app.use(exceptionFilter);

prisma.$connect().then(() => {
	app.listen(environment.app.port, () => {
		console.log(`Server is running on port ${environment.app.port}`);
	});
});
