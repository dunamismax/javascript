import { Head } from "fresh/runtime";
import { type Handlers, type PageProps } from "fresh";
import { getDatabase } from "../../lib/db.ts";
import {
  Todo,
  TodoCategoryType,
  TodoFilters,
  TodoPriorityType,
  TodoStatusType,
} from "../../lib/types.ts";
import TodoApp from "../../islands/TodoApp.tsx";

interface TodoPageData {
  todos: Todo[];
  analytics: {
    totalTodos: number;
    completedTodos: number;
    pendingTodos: number;
    todosByPriority: Record<string, number>;
    todosByCategory: Record<string, number>;
  };
}

export const handler: Handlers<TodoPageData> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const category = url.searchParams.get("category") || "all";
    const priority = url.searchParams.get("priority") || "all";
    const status = url.searchParams.get("status") || "all";

    const filters: TodoFilters = {
      category: (category === "all" ||
          ["Work", "Personal", "Shopping", "Health", "General"].includes(
            category,
          ))
        ? category as TodoCategoryType | "all"
        : "all",
      priority:
        (priority === "all" || ["Low", "Medium", "High"].includes(priority))
          ? priority as TodoPriorityType | "all"
          : "all",
      status: (status === "all" || ["pending", "completed"].includes(status))
        ? status as TodoStatusType | "all"
        : "all",
    };

    const db = await getDatabase();
    const todos = await db.getFilteredTodos(filters);
    const analytics = await db.getAnalytics();

    return ctx.render({ todos, analytics });
  },
};

export default function TodosPage({ data }: PageProps<TodoPageData>) {
  // Show current timestamp - demonstrates server-side rendering
  const timestamp = new Date().toISOString();

  return (
    <>
      <Head>
        <title>Todo List - Deno Fresh App</title>
        <meta
          name="description"
          content="A modern todo list application built with Fresh and Deno"
        />
      </Head>

      <div class="min-h-screen bg-gray-50">
        <div class="container mx-auto px-4 py-8">
          <div class="max-w-4xl mx-auto">
            <header class="text-center mb-8">
              <h1 class="text-4xl font-bold text-gray-900 mb-2">
                Todo List
              </h1>
              <p class="text-gray-600">
                Stay organized with your tasks and boost productivity
              </p>
              <p class="text-xs text-gray-400 mt-2">
                Loaded at: {timestamp}
              </p>
            </header>

            <TodoApp
              initialTodos={data.todos}
              initialAnalytics={data.analytics}
            />
          </div>
        </div>
      </div>
    </>
  );
}
