import { Head } from "fresh/runtime";
import { type Handlers } from "fresh";
import WeatherApp from "../../islands/WeatherApp.tsx";

export const handler: Handlers = {
  GET(_req, ctx) {
    return ctx.render({});
  },
};

export default function WeatherPage() {
  return (
    <>
      <Head>
        <title>Weather Dashboard - Deno Fresh App</title>
        <meta
          name="description"
          content="Get current weather information for US cities"
        />
      </Head>

      <div class="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
        <div class="container mx-auto px-4 py-8">
          <div class="max-w-4xl mx-auto">
            <header class="text-center mb-8">
              <h1 class="text-4xl font-bold text-white mb-2">
                Weather Dashboard
              </h1>
              <p class="text-blue-100">
                Get current weather information for any US ZIP code
              </p>
            </header>

            <WeatherApp />
          </div>
        </div>
      </div>
    </>
  );
}
