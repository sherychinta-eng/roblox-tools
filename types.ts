export interface User {
    id: string;
    name: string;
    age: number;
}

export class UserProfile {
    private user: User;

    constructor(user: User) {
        this.user = user;
    }

    public getUserInfo(): string {
        return `User: ${this.user.name}, Age: ${this.user.age}`;
    }

    public updateUserAge(newAge: number): void {
        if (newAge < 0) {
            throw new Error('Age cannot be negative.');
        }
        this.user.age = newAge;
    }
}

export function validateUser(user: User): void {
    if (!user.id || !user.name) {
        throw new Error('User ID and name are required.');
    }
    if (typeof user.age !== 'number') {
        throw new Error('Age must be a number.');
    }
}

export function logError(error: Error): void {
    console.error(`Error: ${error.message}`);
}

export function tryUpdateUserAge(userProfile: UserProfile, newAge: number): void {
    try {
        userProfile.updateUserAge(newAge);
    } catch (error) {
        logError(error);
    }
}
