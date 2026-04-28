export interface Player { 
    id: string; 
    username: string; 
    isOnline: boolean; 
}

export interface Game { 
    title: string; 
    maxPlayers: number; 
    currentPlayers: Player[]; 
}

export interface MatchmakingQueue { 
    players: Player[]; 
    gameType: string; 
}

export interface ChatMessage { 
    senderId: string; 
    content: string; 
    timestamp: Date; 
}

export interface InventoryItem { 
    itemId: string; 
    itemName: string; 
    quantity: number; 
}

export interface UserInventory { 
    userId: string; 
    items: InventoryItem[]; 
}