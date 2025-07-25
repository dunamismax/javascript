import { type Handlers } from "fresh";
import { getDatabase } from "../../../lib/db.ts";
import {
  createErrorResponse,
  createSuccessResponse,
} from "../../../lib/utils.ts";

export const handler: Handlers = {
  async GET(_req) {
    try {
      const db = await getDatabase();
      const analytics = await db.getAnalytics();

      return new Response(
        JSON.stringify(createSuccessResponse(analytics)),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        },
      );
    } catch (error) {
      console.error("Error fetching analytics:", error);
      return new Response(
        JSON.stringify(createErrorResponse("Failed to fetch analytics")),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
};
