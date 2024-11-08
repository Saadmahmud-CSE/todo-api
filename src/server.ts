import { Hono, type Context } from 'hono';
import { db } from "./db/db.ts";
import { todosTable } from './db/schema.ts';

const app = new Hono();

// GET Route to fetch all todos
app.get('/', async (c: Context) => {
  try {
    const todos = await db.select().from(todosTable).all();
    return c.json(todos);
  } catch (error) {
    return c.json({ error: (error as Error).message }, 500);
  }
});

// POST Route to add a new todo
app.post('/', async (c: Context) => {
  try {
    const body = await c.req.json();
    if (!body.task) {
      throw new Error("Task is required");
    }

    const [newTodo] = await db.insert(todosTable).values({
      task: body.task,
      status: body.status,
    }).returning();

    return c.json(newTodo);
  } catch (error) {
    return c.json({ error: (error as Error).message }, 400);
  }
});

Bun.serve({
  fetch(req) {
    return app.fetch(req);
  }
});
