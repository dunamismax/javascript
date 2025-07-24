import { ApiClient } from '@dunamismax/utils/api';
import { $, $$, createElement } from '@dunamismax/utils/dom';

class WeatherApp {
  constructor() {
    this.api = new ApiClient('/api');
    this.iconBaseUrl = 'https://openweathermap.org/img/wn/';

    this.elements = {
      zipInput: $('#zipInput'),
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
    this.elements.zipInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') this.handleSearch();
    });

    // Add input validation for ZIP code format
    this.elements.zipInput.addEventListener('input', this.validateZipInput.bind(this));

    // Load weather for default ZIP code (New York City)
    this.loadWeather('10001');
  }

  validateZipInput(e) {
    // Only allow digits and dash for ZIP+4 format
    const value = e.target.value;
    const validChars = /^[\d-]*$/;
    if (!validChars.test(value)) {
      e.target.value = value.replace(/[^\d-]/g, '');
    }
  }

  async handleSearch() {
    const zipCode = this.elements.zipInput.value.trim();
    if (this.isValidZipCode(zipCode)) {
      await this.loadWeather(zipCode);
    } else {
      this.showError('Please enter a valid US ZIP code (e.g., 10001 or 12345-6789)');
    }
  }

  isValidZipCode(zip) {
    // Validate ZIP code format (5 digits or 5+4 format)
    const zipRegex = /^\d{5}(-\d{4})?$/;
    return zipRegex.test(zip);
  }

  async loadWeather(zipCode) {
    this.showLoading();

    try {
      const weatherData = await this.fetchWeatherData(zipCode);
      this.displayWeather(weatherData);
    } catch (error) {
      let errorMessage = 'An error occurred while fetching weather data.';
      
      if (error.message.includes('ZIP code not found')) {
        errorMessage = 'ZIP code not found. Please enter a valid US ZIP code.';
      } else if (error.message.includes('Rate limit')) {
        errorMessage = 'Too many requests. Please wait a moment and try again.';
      } else if (error.message.includes('Weather service')) {
        errorMessage = 'Weather service is temporarily unavailable. Please try again later.';
      }
      
      this.showError(errorMessage);
    }
  }

  async fetchWeatherData(zipCode) {
    return await this.api.get(`/weather/${encodeURIComponent(zipCode)}`);
  }

  getDemoData(zipCode) {
    // Demo data for when no API key is provided
    return {
      name: 'New York',
      sys: { country: 'US' },
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
