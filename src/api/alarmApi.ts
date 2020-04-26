import Axios from './axios';

export const getMyAlarmsApi = (): Promise<any> => {
  return Axios.get('/alarm/all');
};
