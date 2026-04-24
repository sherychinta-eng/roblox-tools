export interface RobloxResponse<T> {
    data: T | null;
    error: string | null;
}

export function handleRobloxApiResponse<T>(response: any): RobloxResponse<T> {
    // Check if the response is in the expected format
    if (!response || typeof response !== 'object') {
        return { data: null, error: 'Invalid response format' };
    }

    // Check for success or error in the response
    if (response.success === true) {
        return { data: response.data as T, error: null };
    } else if (response.error) {
        return { data: null, error: response.error }; 
    } else {
        return { data: null, error: 'Unknown error occurred' };
    }
}

export function validatePlayerId(playerId: string): boolean {
    // Check if playerId is a valid format
    const regex = /^[0-9]+$/;
    if (!regex.test(playerId)) {
        throw new Error('Invalid player ID format');
    }
    return true;
}
