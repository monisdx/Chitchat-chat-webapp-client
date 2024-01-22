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
export const fetchUsersBySearch = (searchQuery) => API.get(`/user/search?searchQuery=${searchQuery || 'none'}`);

export const createChat = (id) => API.post('/chat', {userId: id});
export const userChats = () => API.get(`/chat`);
export const createGroupChat = (form) => API.post('/chat/group',form)

export const getMessages = (id) => API.get(`/message/${id}`);
export const addMessage = (data) => API.post('/message', data);