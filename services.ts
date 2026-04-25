type InputData = { name: string; age: number; email: string; };

type ValidationResult = { isValid: boolean; errors: string[]; };

function validateInput(data: InputData): ValidationResult {
    const errors: string[] = [];
    if (!data.name || data.name.length < 3) {
        errors.push('Name must be at least 3 characters long.');
    }
    if (data.age < 0 || data.age > 120) {
        errors.push('Age must be between 0 and 120.');
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(data.email)) {
        errors.push('Email must be a valid email address.');
    }
    return { isValid: errors.length === 0, errors };
}

function processInput(data: InputData) {
    const validation = validateInput(data);
    if (!validation.isValid) {
        console.error('Input validation failed:', validation.errors);
        return;
    }
    // Proceed with main processing logic if valid
    console.log('Processing:', data);
    // Additional processing code here
}

// Example usage
const userInput: InputData = { name: 'Jane', age: 30, email: 'jane@example.com' };
processInput(userInput);