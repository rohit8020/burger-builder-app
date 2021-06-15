import axios from 'axios';

const instance=axios.create({
    baseURL: 'https://burger-builder-30783-default-rtdb.firebaseio.com/'
});

export default instance;