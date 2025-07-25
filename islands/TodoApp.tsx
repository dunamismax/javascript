import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import type {
  CreateTodo,
  Todo,
  TodoAnalytics,
  TodoCategoryType,
  TodoFilters,
  TodoPriorityType,
  TodoStatusType,
} from "../lib/types.ts";

interface TodoAppProps {
  initialTodos: Todo[];
  initialAnalytics: TodoAnalytics;
}

// Global signals
const todos = signal<Todo[]>([]);
const analytics = signal<TodoAnalytics | null>(null);
const loading = signal(false);
const error = signal<string | null>(null);
const filters = signal<TodoFilters>({
  category: "all",
  priority: "all",
  status: "all",
});

// Form state
const formData = signal<CreateTodo>({
  text: "",
  priority: "Medium",
  category: "General",
  status: "pending",
});

export default function TodoApp(
  { initialTodos, initialAnalytics }: TodoAppProps,
) {
  // Initialize with server data
  useEffect(() => {
    todos.value = initialTodos;
    analytics.value = initialAnalytics;
  }, []);

  const fetchTodos = async () => {
    try {
      loading.value = true;
      error.value = null;

      const params = new URLSearchParams();
      if (filters.value.category !== "all") {
        params.set("category", filters.value.category);
      }
      if (filters.value.priority !== "all") {
        params.set("priority", filters.value.priority);
      }
      if (filters.value.status !== "all") {
        params.set("status", filters.value.status);
      }

      const response = await fetch(`/api/todos?${params}`);
      const data = await response.json();

      if (data.success) {
        todos.value = data.data;
      } else {
        error.value = data.error || "Failed to fetch todos";
      }
    } catch (err) {
      error.value = "Network error";
      console.error("Fetch error:", err);
    } finally {
      loading.value = false;
    }
  };

  const fetchAnalytics = async () => {
    try {
      const response = await fetch("/api/todos/analytics");
      const data = await response.json();

      if (data.success) {
        analytics.value = data.data;
      }
    } catch (err) {
      console.error("Analytics fetch error:", err);
    }
  };

  const createTodo = async (e: Event) => {
    e.preventDefault();

    try {
      loading.value = true;
      error.value = null;

      const response = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData.value),
      });

      const data = await response.json();

      if (data.success) {
        // Reset form
        formData.value = {
          text: "",
          priority: "Medium",
          category: "General",
          status: "pending",
        };

        // Refresh data
        await Promise.all([fetchTodos(), fetchAnalytics()]);
      } else {
        error.value = data.error || "Failed to create todo";
      }
    } catch (err) {
      error.value = "Network error";
      console.error("Create error:", err);
    } finally {
      loading.value = false;
    }
  };

  const updateTodo = async (id: string, updates: Partial<Todo>) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });

      const data = await response.json();

      if (data.success) {
        await Promise.all([fetchTodos(), fetchAnalytics()]);
      } else {
        error.value = data.error || "Failed to update todo";
      }
    } catch (err) {
      error.value = "Network error";
      console.error("Update error:", err);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        await Promise.all([fetchTodos(), fetchAnalytics()]);
      } else {
        error.value = data.error || "Failed to delete todo";
      }
    } catch (err) {
      error.value = "Network error";
      console.error("Delete error:", err);
    }
  };

  const applyFilters = async () => {
    await fetchTodos();
  };

  const toggleTodoStatus = (todo: Todo) => {
    const newStatus = todo.status === "completed" ? "pending" : "completed";
    updateTodo(todo.id, { status: newStatus });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600 bg-red-50 border-red-200";
      case "Medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "Low":
        return "text-green-600 bg-green-50 border-green-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div class="space-y-8">
      {/* Analytics Dashboard */}
      {analytics.value && (
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-white p-4 rounded-lg shadow border">
            <div class="text-2xl font-bold text-blue-600">
              {analytics.value.totalTodos}
            </div>
            <div class="text-sm text-gray-600">Total Todos</div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow border">
            <div class="text-2xl font-bold text-green-600">
              {analytics.value.completedTodos}
            </div>
            <div class="text-sm text-gray-600">Completed</div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow border">
            <div class="text-2xl font-bold text-orange-600">
              {analytics.value.pendingTodos}
            </div>
            <div class="text-sm text-gray-600">Pending</div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow border">
            <div class="text-2xl font-bold text-purple-600">
              {analytics.value.totalTodos > 0
                ? Math.round(
                  (analytics.value.completedTodos /
                    analytics.value.totalTodos) * 100,
                )
                : 0}%
            </div>
            <div class="text-sm text-gray-600">Completion</div>
          </div>
        </div>
      )}

      {/* Error Display */}
      {error.value && (
        <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error.value}
          <button
            type="button"
            onClick={() => error.value = null}
            class="float-right text-red-500 hover:text-red-700"
          >
            ×
          </button>
        </div>
      )}

      {/* Todo Form */}
      <div class="bg-white p-6 rounded-lg shadow border">
        <h2 class="text-xl font-semibold mb-4">Add New Todo</h2>
        <form onSubmit={createTodo} class="space-y-4">
          <div>
            <input
              type="text"
              placeholder="What needs to be done?"
              value={formData.value.text}
              onInput={(e) =>
                formData.value = {
                  ...formData.value,
                  text: (e.target as HTMLInputElement).value,
                }}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="flex space-x-4">
            <select
              value={formData.value.priority}
              onChange={(e) =>
                formData.value = {
                  ...formData.value,
                  priority: (e.target as HTMLSelectElement)
                    .value as TodoPriorityType,
                }}
              class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
            </select>
            <select
              value={formData.value.category}
              onChange={(e) =>
                formData.value = {
                  ...formData.value,
                  category: (e.target as HTMLSelectElement)
                    .value as TodoCategoryType,
                }}
              class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="General">General</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Shopping">Shopping</option>
              <option value="Health">Health</option>
            </select>
            <button
              type="submit"
              disabled={loading.value}
              class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading.value ? "Adding..." : "Add Todo"}
            </button>
          </div>
        </form>
      </div>

      {/* Filters */}
      <div class="bg-white p-4 rounded-lg shadow border">
        <h3 class="text-lg font-semibold mb-3">Filters</h3>
        <div class="flex flex-wrap gap-4">
          <select
            value={filters.value.category}
            onChange={(e) => {
              filters.value = {
                ...filters.value,
                category: (e.target as HTMLSelectElement).value as
                  | TodoCategoryType
                  | "all",
              };
              applyFilters();
            }}
            class="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="all">All Categories</option>
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Shopping">Shopping</option>
            <option value="Health">Health</option>
          </select>
          <select
            value={filters.value.priority}
            onChange={(e) => {
              filters.value = {
                ...filters.value,
                priority: (e.target as HTMLSelectElement).value as
                  | TodoPriorityType
                  | "all",
              };
              applyFilters();
            }}
            class="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="all">All Priorities</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
          <select
            value={filters.value.status}
            onChange={(e) => {
              filters.value = {
                ...filters.value,
                status: (e.target as HTMLSelectElement).value as
                  | TodoStatusType
                  | "all",
              };
              applyFilters();
            }}
            class="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Todo List */}
      <div class="bg-white rounded-lg shadow border">
        <div class="p-4 border-b">
          <h3 class="text-lg font-semibold">
            Todos ({todos.value.length})
          </h3>
        </div>
        <div class="divide-y">
          {loading.value
            ? <div class="p-8 text-center text-gray-500">Loading...</div>
            : todos.value.length === 0
            ? (
              <div class="p-8 text-center text-gray-500">
                No todos found. Add your first todo above!
              </div>
            )
            : (
              todos.value.map((todo) => (
                <div key={todo.id} class="p-4 hover:bg-gray-50">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={todo.status === "completed"}
                        onChange={() =>
                          toggleTodoStatus(todo)}
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span
                        class={`${
                          todo.status === "completed"
                            ? "line-through text-gray-500"
                            : ""
                        }`}
                      >
                        {todo.text}
                      </span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <span
                        class={`px-2 py-1 text-xs font-medium rounded-full border ${
                          getPriorityColor(todo.priority)
                        }`}
                      >
                        {todo.priority}
                      </span>
                      <span class="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                        {todo.category}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          deleteTodo(todo.id)}
                        class="text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div class="mt-2 text-xs text-gray-500">
                    Created: {new Date(todo.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))
            )}
        </div>
      </div>
    </div>
  );
}
