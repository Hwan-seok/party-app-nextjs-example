import Axios from './axios';

export const getMyPartiesApi = (): Promise<any> => {
  return Axios.get('/party/all');
};
