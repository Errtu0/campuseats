import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma", // Just a string!
  datasource: {
    url: process.env.DATABASE_URL,
  },
});