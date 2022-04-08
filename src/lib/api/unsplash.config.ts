import axios from 'axios';

export const unsplashAPI = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Client-ID ux-GzTrwg0B6Q_t4vpg47AGjQ88lMM9WiveprhQZOWY',
  },
});

/* apiConfig.interceptors.response.use(
  async (config) => {
      const token = await AsyncStorage.getItem('token')
      if (token) config.headers['x-token'] = token

      return config
  }
) */
