import { GameData, UserData } from './types';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

async function fetchGameData(gameId: string): Promise<ApiResponse<GameData>> {
  try {
    const response = await fetch(`https://api.roblox.com/games/${gameId}`);
    if (!response.ok) {
      throw new Error(`Error fetching game data: ${response.statusText}`);
    }
    const data: GameData = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Fetch Game Data Failed:', error);
    return { success: false, error: 'Failed to fetch game data.' };
  }
}

async function fetchUserData(userId: string): Promise<ApiResponse<UserData>> {
  try {
    const response = await fetch(`https://api.roblox.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Error fetching user data: ${response.statusText}`);
    }
    const data: UserData = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Fetch User Data Failed:', error);
    return { success: false, error: 'Failed to fetch user data.' };
  }
}

export { fetchGameData, fetchUserData };