import axios from 'axios';

// CREATE AXIOS HANDLE
const apiClient = axios.create({
    baseURL: `http://localhost:4500/api`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default apiClient;
