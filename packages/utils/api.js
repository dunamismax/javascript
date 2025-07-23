/**
 * Common API utilities for making HTTP requests
 */

export class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };
        
        if (config.body && typeof config.body === 'object') {
            config.body = JSON.stringify(config.body);
        }
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new ApiError(
                    `HTTP ${response.status}: ${response.statusText}`,
                    response.status,
                    response.statusText
                );
            }
            
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            }
            
            return await response.text();
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError(`Network error: ${error.message}`, 0, 'Network Error');
        }
    }
    
    async get(endpoint, params = {}) {
        const searchParams = new URLSearchParams(params);
        const url = searchParams.toString() ? `${endpoint}?${searchParams}` : endpoint;
        return this.request(url);
    }
    
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: data
        });
    }
    
    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: data
        });
    }
    
    async delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE'
        });
    }
}

export class ApiError extends Error {
    constructor(message, status, statusText) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.statusText = statusText;
    }
}

export const createApiClient = (baseUrl) => new ApiClient(baseUrl);