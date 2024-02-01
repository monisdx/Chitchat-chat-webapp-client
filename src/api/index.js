import axios from 'axios';

const API = axios.create({ baseURL : 'https://chitchat-server.vercel.app'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const signIn = (form) => API.post('/users/signin', form);
export const signUp = (form) => API.post('/users/signup', form);

// export const getuser = (id) => API.get(`/user/${id}`);
export const fetchUsersBySearch = (searchQuery) => API.get(`/users/search?searchQuery=${searchQuery || 'none'}`);

export const createChat = (id) => API.post('/chat', {userId: id});
export const userChats = () => API.get(`/chat`);
export const createGroupChat = (form) => API.post('/chat/group',form)
export const renameGroupChat = (chatId, chatname) => API.put('/chat/renamegroup',{chatId, chatname})
export const addGroupChat = (chatId, userId) => API.put('/chat/addgroup',{chatId,userId});
export const removeGroupChat = (chatId, userId) => API.put('/chat/removegroup',{chatId,userId});

export const getMessages = (chatId) => API.get(`/message/${chatId}`);
export const addMessage = (text, chatId) => API.post('/message', {text, chatId});