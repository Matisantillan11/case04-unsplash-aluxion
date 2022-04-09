import 'react-native-url-polyfill/auto';
import {createApi} from 'unsplash-js';
import axios from 'axios';
/* export const unsplashAPI = createApi({
  accessKey: 'ux-GzTrwg0B6Q_t4vpg47AGjQ88lMM9WiveprhQZOWY',
}); */

export const unsplashAPI = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Client-ID lQB_WlprQmpayEp4n0MrCEjUMmJVKRH8lyMq1woyik4',
  },
});

/* apiConfig.interceptors.response.use(
  async (config) => {
      const token = await AsyncStorage.getItem('token')
      if (token) config.headers['x-token'] = token

      return config
  }
) */
