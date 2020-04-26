import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const Axios = axios.create();

Axios.defaults.baseURL = publicRuntimeConfig.baseURL;

Axios.defaults.timeout = 3500;

export default Axios;
