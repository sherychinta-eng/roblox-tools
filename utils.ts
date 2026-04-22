export async function retry<T>(fn: () => Promise<T>, retries: number = 3, delay: number = 1000): Promise<T> {
    let attempts = 0;
    while (attempts < retries) {
        try {
            return await fn();
        } catch (error) {
            attempts++;
            if (attempts >= retries) {
                throw error;
            }
            console.warn(`Attempt ${attempts} failed. Retrying in ${delay}ms...`);
            await new Promise(res => setTimeout(res, delay));
            delay *= 2; // Exponential backoff
        }
    }
    throw new Error('Retries exhausted');
}

export const fetchWithRetry = async (url: string, options: RequestInit = {}): Promise<Response> => {
    return retry(() => fetch(url, options));
};
