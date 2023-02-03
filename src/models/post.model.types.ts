import { Prisma } from "@prisma/client";

export type ICreatePostInput = Omit<Prisma.PostCreateInput, "date">;
