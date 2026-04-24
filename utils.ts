export function safeDivide(numerator: number, denominator: number): number | null {
    if (isNaN(numerator) || isNaN(denominator)) {
        console.error('Invalid input: numerator and denominator must be numbers.');
        return null;
    }
    if (denominator === 0) {
        console.error('Division by zero error.');
        return null;
    }
    return numerator / denominator;
}

export function parseJson(input: string): object | null {
    try {
        return JSON.parse(input);
    } catch (error) {
        console.error('Invalid JSON format:', error);
        return null;
    }
}

export function validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        console.error('Invalid email format:', email);
        return false;
    }
    return true;
}

export function safeFetch(url: string): Promise<Response | null> {
    return fetch(url).then(response => {
        if (!response.ok) {
            console.error('HTTP error:', response.status);
            return null;
        }
        return response;
    }).catch(error => {
        console.error('Fetch error:', error);
        return null;
    });
}
