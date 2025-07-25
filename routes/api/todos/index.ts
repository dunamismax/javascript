import { type Handlers } from "$fresh/server.ts";
import * as v from "valibot";
import { getDatabase } from "../../../lib/db.ts";
import {
  CreateTodoSchema,
  type TodoCategoryType,
  type TodoFilters,
  type TodoPriorityType,
  type TodoStatusType,
} from "../../../lib/types.ts";
import {
  createErrorResponse,
  createSuccessResponse,
  formatValidationErrors,
} from "../../../lib/utils.ts";

export const handler: Handlers = {
  async GET(req) {
    try {
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

      return new Response(
        JSON.stringify(createSuccessResponse(todos)),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        },
      );
    } catch (error) {
      console.error("Error fetching todos:", error);
      return new Response(
        JSON.stringify(createErrorResponse("Failed to fetch todos")),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },

  async POST(req) {
    try {
      const body = await req.json();

      // Validate input
      const result = v.safeParse(CreateTodoSchema, body);
      if (!result.success) {
        return new Response(
          JSON.stringify(createErrorResponse(
            "Validation failed",
            { errors: formatValidationErrors(result.issues) },
          )),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      const db = await getDatabase();
      const todo = await db.createTodo(result.output);

      return new Response(
        JSON.stringify(createSuccessResponse(todo)),
        {
          status: 201,
          headers: { "Content-Type": "application/json" },
        },
      );
    } catch (error) {
      console.error("Error creating todo:", error);
      return new Response(
        JSON.stringify(createErrorResponse("Failed to create todo")),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
};
