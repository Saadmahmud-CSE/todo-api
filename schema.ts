import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const table = sqliteTable('students', {
  id: integer(),
  name: text(),
});