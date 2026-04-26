export interface Config {
    apiEndpoint: string;
    apiKey: string;
    maxRetries: number;
    timeout: number;
}

export class ConfigManager {
    private config: Config;

    constructor(config: Config) {
        this.config = config;
    }

    public validateConfig(): boolean {
        if (!this.isValidEndpoint(this.config.apiEndpoint)) {
            console.error('Invalid API endpoint.');
            return false;
        }
        if (!this.isValidKey(this.config.apiKey)) {
            console.error('Invalid API key.');
            return false;
        }
        if (!this.isValidRetries(this.config.maxRetries)) {
            console.error('Max retries must be a positive integer.');
            return false;
        }
        if (!this.isValidTimeout(this.config.timeout)) {
            console.error('Timeout must be a positive number.');
            return false;
        }
        return true;
    }

    private isValidEndpoint(endpoint: string): boolean {
        const urlPattern = /^(http|https):\/\/[^\s$.?#].[^\s]*$/;
        return urlPattern.test(endpoint);
    }

    private isValidKey(apiKey: string): boolean {
        return typeof apiKey === 'string' && apiKey.length > 0;
    }

    private isValidRetries(retries: number): boolean {
        return Number.isInteger(retries) && retries >= 0;
    }

    private isValidTimeout(timeout: number): boolean {
        return typeof timeout === 'number' && timeout > 0;
    }
}
