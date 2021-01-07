import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-5525f-default-rtdb.firebaseio.com/'
});

export default instance;