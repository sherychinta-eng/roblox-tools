export function safeParseJson(input: string): any {
    try {
        return JSON.parse(input);
    } catch (error) {
        console.error('Invalid JSON input', error);
        return null;
    }
}

export function ensureNumber(value: any): number {
    if (typeof value !== 'number') {
        console.error('Expected a number, got:', value);
        throw new TypeError('Expected a number');
    }
    return value;
}

export function validateString(input: any): string {
    if (typeof input !== 'string') {
        console.error('Expected a string, got:', input);
        throw new TypeError('Expected a string');
    }
    return input;
}

export function handleApiResponse(response: Response): Promise<any> {
    if (!response.ok) {
        return response.json().then(error => {
            console.error('API error:', error);
            throw new Error(error.message);
        });
    }
    return response.json();
}