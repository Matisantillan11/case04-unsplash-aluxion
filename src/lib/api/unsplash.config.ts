import axios from 'axios';

export const unsplashAPI = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Client-ID lQB_WlprQmpayEp4n0MrCEjUMmJVKRH8lyMq1woyik4',
  },
});


