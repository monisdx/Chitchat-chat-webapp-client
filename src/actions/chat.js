import * as api from '../api';

export const getchats = (id) => async(dispatch) =>{
    try{
        const {data} = await api.userChats(id);

        dispatch({type: 'GET_CHATS', payload: data});
    }
    catch(error){
        console.log(error);
    }
}