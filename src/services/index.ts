import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.gggedr.lol',
});

export const getData = async (endpoint: string) => {
  const response = await axiosInstance.get(endpoint);
  return response.data;
};
