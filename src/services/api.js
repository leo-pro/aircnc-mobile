import axios from 'axios';

const api = axios.create({
    baseURL = '10.1.1.107:19000'
})

export default api;