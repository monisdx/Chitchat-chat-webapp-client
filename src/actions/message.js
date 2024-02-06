import * as api from '../api';

export const addmessage = (text, chatId) =>async(dispatch)=>{
    try{
        const {data:{data}} = await api.addMessage(text, chatId);

        dispatch({type:'ADD_MESSAGE' ,payload: data})

    }
    catch(error){
        console.log(error);
    }
}


export const getmessage = (chatId) =>async(dispatch)=>{
    try{
        dispatch({type: 'START_LOADING_MSG'});
        const {data:{data}} = await api.getMessages(chatId);
        
        dispatch({type:'GET_MESSAGE' ,payload: data})
        dispatch({type: 'END_LOADING_MSG'});
        

    }
    catch(error){
        console.log(error);
    }
}