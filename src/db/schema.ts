import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { string } from "zod";

export const todosTable = sqliteTable("todos", {
  id: text().notNull().primaryKey(),
  task: text(),
  status: text(),
});