import axios from 'axios';

const API = axios.create({ baseURL : 'http://localhost:5000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const signIn = (form) => API.post('/user/signin', form);
export const signUp = (form) => API.post('/user/signup', form);

export const getuser = (id) => API.get(`/user/${id}`);
export const getusers = () => API.get('/user');

export const createChat = (data) => API.post('/chat', data);
export const userChats = (id) => API.get(`/chat/${id}`);
export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`);

export const getMessages = (id) => API.get(`/message/${id}`);
export const addMessage = (data) => API.post('/message', data);