export function safeParseJSON<T>(jsonString: string): T | null {
    try {
        return JSON.parse(jsonString) as T;
    } catch (error) {
        console.error('Failed to parse JSON:', error);
        return null;
    }
}

export function assertIsDefined<T>(value: T | null | undefined, variableName: string): T {
    if (value === null || value === undefined) {
        throw new Error(`${variableName} is not defined`);
    }
    return value;
}

export function fetchData(url: string): Promise<any> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        });
}

export function validateUserInput(input: string, maxLength: number): void {
    if (!input || typeof input !== 'string') {
        throw new Error('Input must be a non-empty string');
    }
    if (input.length > maxLength) {
        throw new Error(`Input exceeds maximum length of ${maxLength}`);
    }
}