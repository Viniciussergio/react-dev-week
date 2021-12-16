import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.jsonbin.io/b/61bbb4a0bccca038dfaaf910'
});

export default api;