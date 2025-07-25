import type { CreateTodo, Todo, TodoFilters, UpdateTodo } from "./types.ts";

export class TodoDatabase {
  private kv: Deno.Kv;

  constructor(kv: Deno.Kv) {
    this.kv = kv;
  }

  async getAllTodos(): Promise<Todo[]> {
    const todos: Todo[] = [];
    const entries = this.kv.list<Todo>({ prefix: ["todos"] });

    for await (const entry of entries) {
      todos.push(entry.value);
    }

    return todos.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getTodoById(id: string): Promise<Todo | null> {
    const result = await this.kv.get<Todo>(["todos", id]);
    return result.value;
  }

  async createTodo(data: CreateTodo): Promise<Todo> {
    const id = crypto.randomUUID();
    const now = new Date();

    const todo: Todo = {
      id,
      ...data,
      createdAt: now,
      updatedAt: now,
    };

    await this.kv.set(["todos", id], todo);
    return todo;
  }

  async updateTodo(id: string, data: UpdateTodo): Promise<Todo | null> {
    const existing = await this.getTodoById(id);
    if (!existing) return null;

    const updated: Todo = {
      ...existing,
      ...data,
      updatedAt: new Date(),
    };

    await this.kv.set(["todos", id], updated);
    return updated;
  }

  async deleteTodo(id: string): Promise<boolean> {
    const existing = await this.getTodoById(id);
    if (!existing) return false;

    await this.kv.delete(["todos", id]);
    return true;
  }

  async getFilteredTodos(filters: TodoFilters): Promise<Todo[]> {
    const todos = await this.getAllTodos();

    return todos.filter((todo) => {
      if (filters.category !== "all" && todo.category !== filters.category) {
        return false;
      }
      if (filters.priority !== "all" && todo.priority !== filters.priority) {
        return false;
      }
      if (filters.status !== "all" && todo.status !== filters.status) {
        return false;
      }
      return true;
    });
  }

  async getAnalytics() {
    const todos = await this.getAllTodos();

    const analytics = {
      totalTodos: todos.length,
      completedTodos: todos.filter((t) => t.status === "completed").length,
      pendingTodos: todos.filter((t) => t.status === "pending").length,
      todosByPriority: {
        Low: todos.filter((t) => t.priority === "Low").length,
        Medium: todos.filter((t) => t.priority === "Medium").length,
        High: todos.filter((t) => t.priority === "High").length,
      },
      todosByCategory: {
        Work: todos.filter((t) => t.category === "Work").length,
        Personal: todos.filter((t) => t.category === "Personal").length,
        Shopping: todos.filter((t) => t.category === "Shopping").length,
        Health: todos.filter((t) => t.category === "Health").length,
        General: todos.filter((t) => t.category === "General").length,
      },
    };

    return analytics;
  }
}

// Global database instance
let db: TodoDatabase | null = null;

export async function getDatabase(): Promise<TodoDatabase> {
  if (!db) {
    const kv = await Deno.openKv();
    db = new TodoDatabase(kv);
  }
  return db;
}
