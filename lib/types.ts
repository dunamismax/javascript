import * as v from "valibot";

// Todo Types and Schemas
export const TodoPriority = v.picklist(["Low", "Medium", "High"]);
export const TodoCategory = v.picklist([
  "Work",
  "Personal",
  "Shopping",
  "Health",
  "General",
]);
export const TodoStatus = v.picklist(["pending", "completed"]);

export const TodoSchema = v.object({
  id: v.string(),
  text: v.pipe(
    v.string(),
    v.minLength(1, "Todo text is required"),
    v.maxLength(500, "Todo text too long"),
  ),
  priority: TodoPriority,
  category: TodoCategory,
  status: TodoStatus,
  createdAt: v.date(),
  updatedAt: v.date(),
});

export const CreateTodoSchema = v.omit(TodoSchema, [
  "id",
  "createdAt",
  "updatedAt",
]);

export const UpdateTodoSchema = v.omit(v.partial(TodoSchema), [
  "id",
  "createdAt",
]);

export type Todo = v.InferOutput<typeof TodoSchema>;
export type CreateTodo = v.InferOutput<typeof CreateTodoSchema>;
export type UpdateTodo = v.InferOutput<typeof UpdateTodoSchema>;
export type TodoPriorityType = v.InferOutput<typeof TodoPriority>;
export type TodoCategoryType = v.InferOutput<typeof TodoCategory>;
export type TodoStatusType = v.InferOutput<typeof TodoStatus>;

// Weather Types and Schemas
export const WeatherQuerySchema = v.object({
  zipCode: v.pipe(
    v.string(),
    v.regex(/^\d{5}(-\d{4})?$/, "Invalid US ZIP code format"),
    v.transform((val) => val.split("-")[0]), // Keep only 5-digit portion
  ),
});

export const WeatherDataSchema = v.object({
  location: v.string(),
  temperature: v.number(),
  description: v.string(),
  humidity: v.number(),
  windSpeed: v.number(),
  pressure: v.number(),
  visibility: v.number(),
  icon: v.string(),
  feelsLike: v.number(),
});

export type WeatherQuery = v.InferOutput<typeof WeatherQuerySchema>;
export type WeatherData = v.InferOutput<typeof WeatherDataSchema>;

// Filter Types
export interface TodoFilters {
  category: TodoCategoryType | "all";
  priority: TodoPriorityType | "all";
  status: TodoStatusType | "all";
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  details?: Record<string, unknown>;
}

// Analytics Types
export interface TodoAnalytics {
  totalTodos: number;
  completedTodos: number;
  pendingTodos: number;
  todosByPriority: Record<TodoPriorityType, number>;
  todosByCategory: Record<TodoCategoryType, number>;
}
