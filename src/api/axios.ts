import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const Axios = axios.create();

Axios.defaults.baseURL = publicRuntimeConfig.BASE_SERVER_URL;

Axios.defaults.timeout = 3500;

export default Axios;
