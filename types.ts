// TypeScript types for Roblox tools

/**
 * Represents a user in the Roblox game.
 * @interface User
 */
export interface User {
    /** The unique identifier of the user */
    id: string;
    /** The username of the user */
    username: string;
    /** The user's avatar URL */
    avatarUrl: string;
    /** The user's friends list */
    friends: Array<User>;
}

/**
 * Represents a game in Roblox.
 * @interface Game
 */
export interface Game {
    /** The unique identifier of the game */
    id: string;
    /** The name of the game */
    name: string;
    /** The user's rating of the game */
    rating: number;
    /** The total number of visits to the game */
    visits: number;
}

/**
 * Represents a game pass in Roblox.
 * @interface GamePass
 */
export interface GamePass {
    /** The unique identifier of the game pass */
    id: string;
    /** The name of the game pass */
    name: string;
    /** The price of the game pass */
    price: number;
}

/**
 * Represents a collection of items.
 * @interface ItemCollection
 */
export interface ItemCollection {
    /** The unique identifier for the collection */
    id: string;
    /** The name of the collection */
    name: string;
    /** List of items in the collection */
    items: Array<string>;
}