type User = { id: number; name: string; email: string; };

type UserServiceError = { code: string; message: string; };

class UserService {
    private users: User[] = [];

    public addUser(user: User): UserServiceError | null {
        if (!this.isValidUser(user)) {
            return { code: 'INVALID_USER', message: 'User data is not valid.' };
        }

        const existingUser = this.users.find(u => u.id === user.id);
        if (existingUser) {
            return { code: 'USER_EXISTS', message: 'User already exists.' };
        }

        this.users.push(user);
        return null;
    }

    public getUserById(id: number): User | UserServiceError {
        const user = this.users.find(u => u.id === id);
        if (!user) {
            return { code: 'USER_NOT_FOUND', message: 'User not found.' };
        }

        return user;
    }

    private isValidUser(user: User): boolean {
        return !!user.id && !!user.name && !!user.email;
    }
}

export default UserService;