import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.cybo.dev',
});

export const getData = async (endpoint: string) => {
  const response = await axiosInstance.get(endpoint);
  return response.data;
};
