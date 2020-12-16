import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test-9be57-default-rtdb.firebaseio.com/'
});

export default instance;