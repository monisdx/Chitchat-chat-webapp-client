import * as api from '../api';

export const getuser = (id) => async(dispatch) =>{
    try{
        const {data} = await api.getuser(id);

        dispatch({type: 'SAVE_USER', payload: data});
    }
    catch(error){
        console.log(error);
    }
}