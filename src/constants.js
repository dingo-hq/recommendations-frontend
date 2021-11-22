import config from './config';

export const BASE_URL = config[process.env.REACT_APP_ENVIRONMENT].baseUrl;
