import * as api from '../api';

export const createchat = (id) => async(dispatch) =>{
    try{
        dispatch({type: 'START_LOADING'});
        const {data:{data}} = await api.createChat(id);
    
        dispatch({type: 'CREATE_CHAT', payload:data});
        dispatch({type: 'END_LOADING'});
    }
    catch(error){
        console.log(error);
    }
}

export const userchats = () => async(dispatch) =>{
    try{
        dispatch({type: 'START_LOADING'});
        const {data:{data}} = await api.userChats();
        console.log("fetch")
        dispatch({type: 'FETCH_USER_CHATS', payload: data});
        dispatch({type: 'END_LOADING'});
    }
    catch(error){
        console.log(error);
    }
}

export const creategroupchat = (form) => async(dispatch) =>{
    try{
        dispatch({type: 'START_LOADING'});
        const {data:{data}} = await api.createGroupChat(form);
        console.log('create');
        dispatch({type: 'CREATE_GROUP_CHAT', payload: data});
        dispatch({type: 'END_LOADING'});

    }
    catch(error){
        console.log(error);
    }
}

export const renamegroupchat = (chatId ,chatname) =>async(dispatch) =>{
    try{
        dispatch({type: 'START_LOADING'});
        const {data:{data}} = await api.renameGroupChat(chatId,chatname);
        console.log(data);
        dispatch({type: 'RENAME_GROUP_CHAT'});
        dispatch({type: 'END_LOADING'});

    }
    catch(error){
        console.log(error);
    }
}

export const addgroupchat = (chatId ,userId) =>async(dispatch) =>{
    try{
        dispatch({type: 'START_LOADING'});
        const {data:{data}} = await api.addGroupChat(chatId,userId);
        console.log(data);
        dispatch({type: 'ADD_GROUP_CHAT'});
        dispatch({type: 'END_LOADING'});

    }
    catch(error){
        console.log(error);
    }
}

export const removegroupchat = (chatId ,userId) =>async(dispatch) =>{
    try{
        dispatch({type: 'START_LOADING'});
        const {data:{data}} = await api.removeGroupChat(chatId,userId);
        console.log(data);
        dispatch({type: 'remove_GROUP_CHAT'});
        dispatch({type: 'END_LOADING'});

    }
    catch(error){
        console.log(error);
    }
}