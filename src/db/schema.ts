import { integer } from "drizzle-orm/pg-core";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { string } from "zod";

export const todosTable = sqliteTable("todos", {
  id: integer().primaryKey(),
  task: text(),
  status: text(),
});