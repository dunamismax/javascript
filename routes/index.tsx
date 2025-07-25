import { Head } from "fresh/runtime";

export default function Home() {
  return (
    <>
      <Head>
        <title>Deno Fresh Application</title>
        <meta
          name="description"
          content="A modern full-stack application built with Deno 2 and Fresh 1.7.3"
        />
      </Head>

      <div class="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div class="container mx-auto px-4 py-8">
          <div class="max-w-4xl mx-auto text-center">
            <div class="mb-12">
              <h1 class="text-5xl font-bold text-white mb-4">
                Deno Fresh Application
              </h1>
              <p class="text-xl text-white/80 mb-8">
                A modern full-stack application built with Deno 2, Fresh 1.7.3,
                TypeScript, and Tailwind CSS
              </p>
              <div class="flex justify-center space-x-4 text-sm text-white/70">
                <span>🦕 Deno 2</span>
                <span>🍋 Fresh 1.7.3</span>
                <span>⚡ TypeScript</span>
                <span>🎨 Tailwind CSS</span>
                <span>🗄️ Deno KV</span>
                <span>📡 Zod Validation</span>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mb-12">
              {/* Todo List Card */}
              <div class="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 transition-colors">
                <div class="text-6xl mb-4">📝</div>
                <h2 class="text-2xl font-bold text-white mb-4">Todo List</h2>
                <p class="text-white/80 mb-6">
                  Organize your tasks with priorities, categories, and
                  analytics. Built with Deno KV for persistent storage and
                  real-time updates.
                </p>
                <div class="space-y-2 text-sm text-white/70 mb-6">
                  <div>✅ CRUD operations with Deno KV</div>
                  <div>🏷️ Categories and priorities</div>
                  <div>📊 Real-time analytics dashboard</div>
                  <div>🔍 Advanced filtering system</div>
                  <div>⚡ Fresh islands for interactivity</div>
                </div>
                <a
                  href="/todos"
                  class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Open Todo List
                </a>
              </div>

              {/* Weather App Card */}
              <div class="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 transition-colors">
                <div class="text-6xl mb-4">🌤️</div>
                <h2 class="text-2xl font-bold text-white mb-4">
                  Weather Dashboard
                </h2>
                <p class="text-white/80 mb-6">
                  Get current weather information for any US ZIP code. Powered
                  by OpenWeatherMap API with rate limiting and caching.
                </p>
                <div class="space-y-2 text-sm text-white/70 mb-6">
                  <div>🌡️ Real-time weather data</div>
                  <div>📍 US ZIP code validation</div>
                  <div>🔄 Search history with localStorage</div>
                  <div>🛡️ Rate limiting and error handling</div>
                  <div>💨 Detailed weather metrics</div>
                </div>
                <a
                  href="/weather"
                  class="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Open Weather App
                </a>
              </div>
            </div>

            {/* Features Section */}
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 class="text-2xl font-bold text-white mb-6">
                Built with Modern Technologies
              </h3>
              <div class="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 class="text-lg font-semibold text-white mb-2">
                    🦕 Deno 2 Runtime
                  </h4>
                  <p class="text-white/80 text-sm">
                    Secure, modern JavaScript/TypeScript runtime with built-in
                    tooling, Web APIs, and npm compatibility.
                  </p>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-2">
                    🍋 Fresh Framework
                  </h4>
                  <p class="text-white/80 text-sm">
                    Next-generation web framework with island architecture, zero
                    config, and exceptional performance.
                  </p>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-2">
                    🗄️ Deno KV Storage
                  </h4>
                  <p class="text-white/80 text-sm">
                    Built-in key-value database with zero setup, perfect for
                    serverless applications and edge deployment.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div class="mt-12 text-white/60 text-sm">
              <p>
                Converted from Node.js + Vanilla JavaScript to Deno 2 + Fresh +
                TypeScript
              </p>
              <p class="mt-2">
                Originally by <strong>dunamismax</strong>{" "}
                • Enhanced with modern tech stack
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
