type NetworkOptions = {
    retries?: number;
    delay?: number;
};

async function fetchWithRetry(url: string, options: NetworkOptions = {}): Promise<Response> {
    const { retries = 3, delay = 1000 } = options;
    let attempt = 0;

    while (attempt <= retries) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response;
        } catch (error) {
            attempt++;
            if (attempt > retries) {
                throw new Error(`Failed after ${retries} attempts: ${error.message}`);
            }
            console.warn(`Attempt ${attempt} failed: ${error.message}. Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    throw new Error(`Exceeded maximum retry attempts`);
}

export { fetchWithRetry };