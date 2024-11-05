import axios from 'axios';
import {WEATHER_KEY} from '@env';

const API_KEY = WEATHER_KEY;

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});

api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params.APPID = API_KEY;
  config.params.units = config.params.unit || 'metric';
  config.params.lang = 'es';

  return config;
});

const apiWeather = async (lat: number, lon: number) => {
  try {
    const response = await api.get('', {
      params: {
        lat,
        lon,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data', error);
    throw error;
  }
};

export default apiWeather;
