const API_BASE_URL = "https://valorant-api.com/v1/weapons"

export const GetAllWeapons = async () => {
    try {
        const response = await fetch(API_BASE_URL);
        return response.json();
    } catch (error) {
        console.error(error);
        throw error
    }
}