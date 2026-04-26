// Utility function to retry network operations
export async function retry<T>(
    fn: () => Promise<T>,
    retries: number = 3,
    delay: number = 1000
): Promise<T> {
    let attempts = 0;
    while (true) {
        try {
            return await fn();
        } catch (error) {
            attempts++;
            if (attempts > retries) {
                throw error;
            }
            console.warn(`Attempt ${attempts} failed. Retrying in ${delay}ms...`);
            await new Promise(res => setTimeout(res, delay));
        }
    }
}

// Example network operation
export async function fetchData(url: string): Promise<any> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
}

// Example usage of retry function
export async function fetchWithRetry(url: string) {
    return retry(() => fetchData(url), 5, 2000);
}