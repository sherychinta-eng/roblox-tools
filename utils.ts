export function safeParseJson<T>(jsonString: string): T | null {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Failed to parse JSON:', error);
        return null;
    }
}

export function validateUserData(userData: any): boolean {
    if (!userData || typeof userData !== 'object') {
        console.warn('Invalid user data provided: ', userData);
        return false;
    }
    const { username, age } = userData;
    if (typeof username !== 'string' || username.trim() === '') {
        console.warn('Invalid username provided: ', username);
        return false;
    }
    if (typeof age !== 'number' || age <= 0) {
        console.warn('Invalid age provided: ', age);
        return false;
    }
    return true;
}

export function handleApiResponse<T>(response: Response): Promise<T | null> {
    return response.json().then(data => {
        if (!response.ok) {
            console.error('API Error:', data);
            return null;
        }
        return data as T;
    }).catch(error => {
        console.error('Failed to handle API response:', error);
        return null;
    });
}