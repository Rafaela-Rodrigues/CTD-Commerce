import axios from 'axios';

const api = axios.create({
  baseURL: 'https://uai-tatu.herokuapp.com'
});
// 
export default api;