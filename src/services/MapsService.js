const API_BASE_URL = 'https://valorant-api.com/v1/maps';

export const GetAllMaps = async () => {
    try {
        const response = await fetch(API_BASE_URL);
        return response.json();
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
        throw error;
    }
};