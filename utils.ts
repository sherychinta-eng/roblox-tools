function validateInput(input: any): boolean {
    if (typeof input !== 'string' && typeof input !== 'number') {
        throw new Error('Invalid input type: must be string or number');
    }
    if (typeof input === 'string' && input.trim() === '') {
        throw new Error('Invalid input: string cannot be empty');
    }
    return true;
}

function processInput(input: any): string {
    try {
        validateInput(input);
        // Processing logic here
        return `Processed Input: ${input}`;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// Main processing loop
const inputs = ['abc', 123, '', null, undefined];
inputs.forEach(input => {
    const result = processInput(input);
    console.log(result);
});