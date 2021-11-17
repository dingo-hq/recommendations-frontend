import axios from 'axios';
import { BASE_URL } from '../constants';

export default async function request(method, url, data = {}) {
    const response = await axios({
        baseURL: BASE_URL,
        url,
        method,
        data,
        withCredentials: true,
    });

    return response.data;
}
