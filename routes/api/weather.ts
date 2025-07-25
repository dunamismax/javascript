import { type Handlers } from "$fresh/server.ts";
import * as v from "valibot";
import { WeatherQuerySchema } from "../../lib/types.ts";
import {
  createErrorResponse,
  createSuccessResponse,
  fetchWeatherData,
  formatValidationErrors,
  getWeatherApiKey,
} from "../../lib/utils.ts";

export const handler: Handlers = {
  async GET(req) {
    try {
      const url = new URL(req.url);
      const zipCode = url.searchParams.get("zipCode");

      if (!zipCode) {
        return new Response(
          JSON.stringify(createErrorResponse("ZIP code is required")),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      // Validate ZIP code
      const result = v.safeParse(WeatherQuerySchema, { zipCode });
      if (!result.success) {
        return new Response(
          JSON.stringify(createErrorResponse(
            "Invalid ZIP code format",
            { errors: formatValidationErrors(result.issues) },
          )),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      // Get weather API key
      let apiKey: string;
      try {
        apiKey = getWeatherApiKey();
      } catch (error) {
        console.error("Weather API key not configured:", error);
        return new Response(
          JSON.stringify(
            createErrorResponse("Weather service is currently unavailable"),
          ),
          {
            status: 503,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      // Fetch weather data
      const weatherData = await fetchWeatherData(result.output.zipCode, apiKey);

      return new Response(
        JSON.stringify(createSuccessResponse(weatherData)),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=300", // Cache for 5 minutes
          },
        },
      );
    } catch (error) {
      console.error("Weather API error:", error);

      // Handle specific error types
      if (error instanceof Error) {
        if (error.message.includes("ZIP code not found")) {
          return new Response(
            JSON.stringify(
              createErrorResponse(
                "ZIP code not found. Please check and try again.",
              ),
            ),
            {
              status: 404,
              headers: { "Content-Type": "application/json" },
            },
          );
        }

        if (error.message.includes("Weather API error")) {
          return new Response(
            JSON.stringify(
              createErrorResponse("Weather service temporarily unavailable"),
            ),
            {
              status: 503,
              headers: { "Content-Type": "application/json" },
            },
          );
        }
      }

      return new Response(
        JSON.stringify(createErrorResponse("Failed to fetch weather data")),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
};
