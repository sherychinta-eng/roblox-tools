// Utility function to handle Roblox data

interface RobloxData {  
    id: number;  
    name: string;  
    creator?: string;  
    createdDate?: Date;  
}

/**  
 * Converts a raw Roblox data object to a structured format.  
 *  
 * @param rawData - The raw data from Roblox API  
 * @returns A structured RobloxData object  
 */  
function parseRobloxData(rawData: any): RobloxData {  
    return {  
        id: rawData.id,  
        name: rawData.name,  
        creator: rawData.creator || 'Unknown',  
        createdDate: rawData.createdDate ? new Date(rawData.createdDate) : undefined  
    };  
}

/**  
 * Converts an array of raw Roblox data objects to structured format.  
 *  
 * @param rawDataArray - An array of raw data objects from the Roblox API  
 * @returns An array of structured RobloxData objects  
 */  
function parseRobloxDataArray(rawDataArray: any[]): RobloxData[] {  
    return rawDataArray.map(parseRobloxData);  
}

export { parseRobloxData, parseRobloxDataArray };