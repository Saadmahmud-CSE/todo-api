import { Hono, type Context } from 'hono'
import { db } from "./db/db.ts"
import { todosTable } from './db/schema.ts'
const app = new Hono()

app.get('/', (c: Context) => {
  const todos = db.select().from(todosTable).all;
  return c.json(todos);
})

app.post('/', async(c: Context) => {
  try{
    const body = await c.req.json();
    if(!body.task) {
      throw new Error("Task is required");
    }
    const todo = await db.insert(todosTable).values({
      task: body.task,
    }).returning();
    
    return c.json(todo);
  } catch(error) {
    return error = c.json({ error: (error as Error).message }, 400);
  }
})

Bun.serve({
  fetch(req) {
    return app.fetch(req); // Corrected fetch handling
  },
  port: 3000,
});