import { ApiClient } from '@dunamismax/utils/api.js';
import { $, $$, createElement } from '@dunamismax/utils/dom.js';

class WeatherApp {
  constructor() {
    this.api = new ApiClient('/api');
    this.iconBaseUrl = 'https://openweathermap.org/img/wn/';

    this.elements = {
      cityInput: $('#cityInput'),
      searchBtn: $('#searchBtn'),
      weatherCard: $('#weatherCard'),
      errorMessage: $('#errorMessage'),
      loadingSpinner: $('#loadingSpinner'),
      cityName: $('#cityName'),
      country: $('#country'),
      temp: $('#temp'),
      description: $('#description'),
      feelsLike: $('#feelsLike'),
      humidity: $('#humidity'),
      windSpeed: $('#windSpeed'),
      pressure: $('#pressure'),
      visibility: $('#visibility'),
      weatherIcon: $('#weatherIcon'),
    };

    this.init();
  }

  init() {
    this.elements.searchBtn.addEventListener('click', () =>
      this.handleSearch()
    );
    this.elements.cityInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') this.handleSearch();
    });

    // Load weather for default city
    this.loadWeather('London');
  }

  async handleSearch() {
    const city = this.elements.cityInput.value.trim();
    if (city) {
      await this.loadWeather(city);
    }
  }

  async loadWeather(city) {
    this.showLoading();

    try {
      const weatherData = await this.fetchWeatherData(city);
      this.displayWeather(weatherData);
    } catch (error) {
      this.showError(error.message);
    }
  }

  async fetchWeatherData(city) {
    return await this.api.get(`/weather/${encodeURIComponent(city)}`);
  }

  getDemoData(city) {
    // Demo data for when no API key is provided
    return {
      name: city,
      sys: { country: 'GB' },
      main: {
        temp: 15,
        feels_like: 13,
        humidity: 65,
        pressure: 1013,
      },
      weather: [
        {
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      wind: { speed: 3.5 },
      visibility: 10000,
    };
  }

  displayWeather(data) {
    this.elements.cityName.textContent = data.name;
    this.elements.country.textContent = data.sys.country;
    this.elements.temp.textContent = Math.round(data.main.temp);
    this.elements.description.textContent = data.weather[0].description;
    this.elements.feelsLike.textContent = `Feels like ${Math.round(data.main.feels_like)}°C`;
    this.elements.humidity.textContent = `${data.main.humidity}%`;
    this.elements.windSpeed.textContent = `${data.wind.speed} m/s`;
    this.elements.pressure.textContent = `${data.main.pressure} hPa`;
    this.elements.visibility.textContent = `${(data.visibility / 1000).toFixed(1)} km`;

    const iconUrl = `${this.iconBaseUrl}${data.weather[0].icon}@2x.png`;
    this.elements.weatherIcon.src = iconUrl;
    this.elements.weatherIcon.alt = data.weather[0].description;

    this.showWeatherCard();
  }

  showLoading() {
    this.hideAllViews();
    this.elements.loadingSpinner.classList.remove('hidden');
  }

  showWeatherCard() {
    this.hideAllViews();
    this.elements.weatherCard.classList.remove('hidden');
  }

  showError(message) {
    this.hideAllViews();
    this.elements.errorMessage.querySelector('p').textContent = message;
    this.elements.errorMessage.classList.remove('hidden');
  }

  hideAllViews() {
    this.elements.weatherCard.classList.add('hidden');
    this.elements.errorMessage.classList.add('hidden');
    this.elements.loadingSpinner.classList.add('hidden');
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new WeatherApp();
});
