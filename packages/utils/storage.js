/**
 * Local storage utilities with JSON support and fallbacks
 */

export class StorageManager {
    constructor(storageType = 'localStorage') {
        this.storage = this.getStorage(storageType);
        this.isAvailable = this.checkAvailability();
    }
    
    getStorage(type) {
        try {
            return type === 'sessionStorage' ? window.sessionStorage : window.localStorage;
        } catch (e) {
            return null;
        }
    }
    
    checkAvailability() {
        if (!this.storage) return false;
        
        try {
            const test = '__storage_test__';
            this.storage.setItem(test, test);
            this.storage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }
    
    set(key, value) {
        if (!this.isAvailable) {
            console.warn('Storage not available, data will not persist');
            return false;
        }
        
        try {
            const serializedValue = JSON.stringify(value);
            this.storage.setItem(key, serializedValue);
            return true;
        } catch (e) {
            console.error('Failed to save to storage:', e);
            return false;
        }
    }
    
    get(key, defaultValue = null) {
        if (!this.isAvailable) {
            return defaultValue;
        }
        
        try {
            const item = this.storage.getItem(key);
            if (item === null) return defaultValue;
            return JSON.parse(item);
        } catch (e) {
            console.error('Failed to parse stored data:', e);
            return defaultValue;
        }
    }
    
    remove(key) {
        if (!this.isAvailable) return false;
        
        try {
            this.storage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Failed to remove from storage:', e);
            return false;
        }
    }
    
    clear() {
        if (!this.isAvailable) return false;
        
        try {
            this.storage.clear();
            return true;
        } catch (e) {
            console.error('Failed to clear storage:', e);
            return false;
        }
    }
    
    has(key) {
        if (!this.isAvailable) return false;
        return this.storage.getItem(key) !== null;
    }
    
    keys() {
        if (!this.isAvailable) return [];
        return Object.keys(this.storage);
    }
    
    size() {
        if (!this.isAvailable) return 0;
        return this.storage.length;
    }
}

// Create default instances
export const localStorage = new StorageManager('localStorage');
export const sessionStorage = new StorageManager('sessionStorage');

// Cookie utilities as fallback
export const cookies = {
    set(name, value, days = 7) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${name}=${JSON.stringify(value)}${expires}; path=/`;
    },
    
    get(name, defaultValue = null) {
        const nameEQ = `${name}=`;
        const ca = document.cookie.split(';');
        
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) {
                try {
                    return JSON.parse(c.substring(nameEQ.length, c.length));
                } catch (e) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
        }
        return defaultValue;
    },
    
    remove(name) {
        document.cookie = `${name}=; Max-Age=-99999999; path=/`;
    },
    
    has(name) {
        return this.get(name) !== null;
    }
};