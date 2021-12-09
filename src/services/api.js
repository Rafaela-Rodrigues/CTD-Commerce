import axios from 'axios';

const api = axios.create({
  baseURL: 'http://infrat1g6-env.eba-spxbehpb.us-east-1.elasticbeanstalk.com'
});

export default api;