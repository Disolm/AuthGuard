import axios from 'axios';
const URL = '/src/api/bd/bd_users.json'
export const httpClient = axios.create({
  baseURL: URL,
  withCredentials: false,
  validateStatus(status) {
    return ![401, 405, 408, 429].includes(status) && status < 500;
  },
});
