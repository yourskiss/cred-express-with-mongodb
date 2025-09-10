import { z } from "zod";
const portSchema = z.coerce.number().min(10).max(65535).default(80);
export const PORT = portSchema.parse(process.env.PORT)