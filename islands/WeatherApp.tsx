import { signal } from "@preact/signals";
import type { WeatherData } from "../lib/types.ts";

// Global signals
const zipCode = signal("");
const weatherData = signal<WeatherData | null>(null);
const loading = signal(false);
const error = signal<string | null>(null);
const searchHistory = signal<string[]>([]);

export default function WeatherApp() {
  // Load search history from localStorage
  if (typeof localStorage !== "undefined") {
    try {
      const saved = localStorage.getItem("weatherSearchHistory");
      if (saved) {
        searchHistory.value = JSON.parse(saved);
      }
    } catch (err) {
      console.error("Failed to load search history:", err);
    }
  }

  const fetchWeather = async (e?: Event) => {
    if (e) e.preventDefault();

    if (!zipCode.value.trim()) {
      error.value = "Please enter a ZIP code";
      return;
    }

    try {
      loading.value = true;
      error.value = null;

      const response = await fetch(
        `/api/weather?zipCode=${encodeURIComponent(zipCode.value.trim())}`,
      );
      const data = await response.json();

      if (data.success) {
        weatherData.value = data.data;

        // Add to search history
        const newHistory = [
          zipCode.value.trim(),
          ...searchHistory.value.filter((z) => z !== zipCode.value.trim()),
        ].slice(0, 5);
        searchHistory.value = newHistory;

        // Save to localStorage
        if (typeof localStorage !== "undefined") {
          try {
            localStorage.setItem(
              "weatherSearchHistory",
              JSON.stringify(newHistory),
            );
          } catch (err) {
            console.error("Failed to save search history:", err);
          }
        }
      } else {
        error.value = data.error || "Failed to fetch weather data";
        weatherData.value = null;
      }
    } catch (err) {
      error.value =
        "Network error. Please check your connection and try again.";
      weatherData.value = null;
      console.error("Fetch error:", err);
    } finally {
      loading.value = false;
    }
  };

  const searchFromHistory = (historicZip: string) => {
    zipCode.value = historicZip;
    fetchWeather();
  };

  const getWeatherIcon = (icon: string) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  const _getWindDirection = (degrees: number) => {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return directions[Math.round(degrees / 22.5) % 16];
  };

  return (
    <div class="space-y-6">
      {/* Search Form */}
      <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
        <form onSubmit={fetchWeather} class="space-y-4">
          <div class="flex space-x-4">
            <input
              type="text"
              placeholder="Enter US ZIP code (e.g., 90210)"
              value={zipCode.value}
              onInput={(e) =>
                zipCode.value = (e.target as HTMLInputElement).value}
              class="flex-1 px-4 py-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              maxLength={10}
            />
            <button
              type="submit"
              disabled={loading.value}
              class="px-6 py-3 bg-white/20 text-white border border-white/30 rounded-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading.value ? "Searching..." : "Get Weather"}
            </button>
          </div>
        </form>

        {/* Search History */}
        {searchHistory.value.length > 0 && (
          <div class="mt-4">
            <p class="text-white/80 text-sm mb-2">Recent searches:</p>
            <div class="flex flex-wrap gap-2">
              {searchHistory.value.map((historicZip) => (
                <button
                  key={historicZip}
                  type="button"
                  onClick={() => searchFromHistory(historicZip)}
                  class="px-3 py-1 bg-white/20 text-white text-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  {historicZip}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Error Display */}
      {error.value && (
        <div class="bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-white px-4 py-3 rounded-lg">
          <div class="flex justify-between items-center">
            <span>{error.value}</span>
            <button
              type="button"
              onClick={() => error.value = null}
              class="text-white/80 hover:text-white text-lg"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Weather Display */}
      {weatherData.value && (
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <div class="text-center mb-6">
            <h2 class="text-2xl font-bold text-white mb-2">
              {weatherData.value.location}
            </h2>
            <div class="flex items-center justify-center space-x-4">
              <img
                src={getWeatherIcon(weatherData.value.icon)}
                alt={weatherData.value.description}
                class="w-16 h-16"
              />
              <div>
                <div class="text-4xl font-bold text-white">
                  {weatherData.value.temperature}°F
                </div>
                <div class="text-white/80 capitalize">
                  {weatherData.value.description}
                </div>
              </div>
            </div>
            <div class="text-white/70 mt-2">
              Feels like {weatherData.value.feelsLike}°F
            </div>
          </div>

          {/* Weather Details Grid */}
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-white/10 rounded-lg p-4 text-center">
              <div class="text-white/80 text-sm">Humidity</div>
              <div class="text-white text-xl font-semibold">
                {weatherData.value.humidity}%
              </div>
            </div>

            <div class="bg-white/10 rounded-lg p-4 text-center">
              <div class="text-white/80 text-sm">Wind Speed</div>
              <div class="text-white text-xl font-semibold">
                {weatherData.value.windSpeed} mph
              </div>
            </div>

            <div class="bg-white/10 rounded-lg p-4 text-center">
              <div class="text-white/80 text-sm">Pressure</div>
              <div class="text-white text-xl font-semibold">
                {weatherData.value.pressure} hPa
              </div>
            </div>

            <div class="bg-white/10 rounded-lg p-4 text-center">
              <div class="text-white/80 text-sm">Visibility</div>
              <div class="text-white text-xl font-semibold">
                {weatherData.value.visibility} mi
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div class="mt-6 pt-6 border-t border-white/20">
            <div class="flex justify-between text-white/80 text-sm">
              <span>Last updated: {new Date().toLocaleTimeString()}</span>
              <span>Data provided by OpenWeatherMap</span>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!weatherData.value && !loading.value && (
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
          <div class="text-white/80">
            <h3 class="text-lg font-semibold mb-2">How to use</h3>
            <p class="mb-4">
              Enter a valid US ZIP code (5 digits) to get current weather
              information.
            </p>
            <div class="text-sm text-white/60">
              <p>
                Examples: 90210 (Beverly Hills, CA), 10001 (New York, NY), 60601
                (Chicago, IL)
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
