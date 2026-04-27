// Utility function to perform a network operation with retry logic

async function retry<T>(operation: () => Promise<T>, retries: number = 3, delay: number = 1000): Promise<T> {
    let attempt = 0;
    while (attempt < retries) {
        try {
            return await operation();
        } catch (error) {
            attempt++;
            if (attempt === retries) {
                throw error; // Rethrow the last error after retries
            }
            console.warn(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
            await new Promise(res => setTimeout(res, delay));
        }
    }
    throw new Error('Max retry attempts reached'); // This line should not be reachable
}

// Example usage of retry function
async function fetchData(url: string): Promise<any> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return await response.json();
}

async function fetchWithRetry(url: string) {
    return await retry(() => fetchData(url));
}

export { retry, fetchWithRetry };