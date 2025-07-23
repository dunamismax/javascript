class WeatherApp {
    constructor() {
        this.apiKey = this.getApiKey();
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
        this.iconBaseUrl = 'https://openweathermap.org/img/wn/';
        
        this.elements = {
            cityInput: document.getElementById('cityInput'),
            searchBtn: document.getElementById('searchBtn'),
            weatherCard: document.getElementById('weatherCard'),
            errorMessage: document.getElementById('errorMessage'),
            loadingSpinner: document.getElementById('loadingSpinner'),
            cityName: document.getElementById('cityName'),
            country: document.getElementById('country'),
            temp: document.getElementById('temp'),
            description: document.getElementById('description'),
            feelsLike: document.getElementById('feelsLike'),
            humidity: document.getElementById('humidity'),
            windSpeed: document.getElementById('windSpeed'),
            pressure: document.getElementById('pressure'),
            visibility: document.getElementById('visibility'),
            weatherIcon: document.getElementById('weatherIcon')
        };
        
        this.init();
    }
    
    getApiKey() {
        // In a real app, this would come from environment variables
        // For demo purposes, we'll use a placeholder
        return 'YOUR_OPENWEATHERMAP_API_KEY';
    }
    
    init() {
        this.elements.searchBtn.addEventListener('click', () => this.handleSearch());
        this.elements.cityInput.addEventListener('keypress', (e) => {
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
        if (this.apiKey === 'YOUR_OPENWEATHERMAP_API_KEY') {
            // Return demo data if no API key is set
            return this.getDemoData(city);
        }
        
        const url = `${this.baseUrl}?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric`;
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found');
            } else if (response.status === 401) {
                throw new Error('Invalid API key');
            } else {
                throw new Error('Weather data unavailable');
            }
        }
        
        return await response.json();
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
                pressure: 1013
            },
            weather: [{
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d'
            }],
            wind: { speed: 3.5 },
            visibility: 10000
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