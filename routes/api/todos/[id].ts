import { type Handlers } from "fresh";
import * as v from "valibot";
import { getDatabase } from "../../../lib/db.ts";
import { UpdateTodoSchema } from "../../../lib/types.ts";
import {
  createErrorResponse,
  createSuccessResponse,
  formatValidationErrors,
} from "../../../lib/utils.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    try {
      const { id } = ctx.params;
      const db = await getDatabase();
      const todo = await db.getTodoById(id);

      if (!todo) {
        return new Response(
          JSON.stringify(createErrorResponse("Todo not found")),
          {
            status: 404,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      return new Response(
        JSON.stringify(createSuccessResponse(todo)),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    } catch (error) {
      console.error("Error fetching todo:", error);
      return new Response(
        JSON.stringify(createErrorResponse("Failed to fetch todo")),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },

  async PUT(req, ctx) {
    try {
      const { id } = ctx.params;
      const body = await req.json();

      // Validate input
      const result = v.safeParse(UpdateTodoSchema, body);
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
      const todo = await db.updateTodo(id, result.output);

      if (!todo) {
        return new Response(
          JSON.stringify(createErrorResponse("Todo not found")),
          {
            status: 404,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      return new Response(
        JSON.stringify(createSuccessResponse(todo)),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    } catch (error) {
      console.error("Error updating todo:", error);
      return new Response(
        JSON.stringify(createErrorResponse("Failed to update todo")),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },

  async DELETE(_req, ctx) {
    try {
      const { id } = ctx.params;
      const db = await getDatabase();
      const success = await db.deleteTodo(id);

      if (!success) {
        return new Response(
          JSON.stringify(createErrorResponse("Todo not found")),
          {
            status: 404,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      return new Response(
        JSON.stringify(createSuccessResponse({ deleted: true })),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    } catch (error) {
      console.error("Error deleting todo:", error);
      return new Response(
        JSON.stringify(createErrorResponse("Failed to delete todo")),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
};
