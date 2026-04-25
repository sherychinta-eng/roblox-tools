// Service to manage player data
import { PlayerData } from './types';

export class PlayerService {
    private players: Map<number, PlayerData>;

    constructor() {
        this.players = new Map();
    }

    // Adds a new player
    public addPlayer(playerId: number, data: PlayerData): void {
        if (this.players.has(playerId)) {
            throw new Error('Player already exists.');
        }
        this.players.set(playerId, data);
    }

    // Retrieves player data
    public getPlayer(playerId: number): PlayerData | undefined {
        return this.players.get(playerId);
    }

    // Updates existing player data
    public updatePlayer(playerId: number, data: PlayerData): void {
        if (!this.players.has(playerId)) {
            throw new Error('Player does not exist.');
        }
        this.players.set(playerId, data);
    }

    // Removes a player
    public removePlayer(playerId: number): void {
        if (!this.players.delete(playerId)) {
            throw new Error('Player does not exist.');
        }
    }

    // Clears all player data
    public clearPlayers(): void {
        this.players.clear();
    }
}
