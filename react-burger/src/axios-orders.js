import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-a44dd.firebaseio.com/'
});

export default instance;