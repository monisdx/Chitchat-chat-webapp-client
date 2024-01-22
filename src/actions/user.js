import * as api from '../api';

export const getUsersBySearch = (searchQuery) => async(dispatch) =>{
    try{
        dispatch({type: 'START_LOADING'});
        const { data: {data} } = await api.fetchUsersBySearch(searchQuery);
        
        dispatch({type: 'FETCH_BY_SEARCH', payload: data});
        dispatch({type: 'END_LOADING'});
        
    }
    catch(error){
        console.log(error);
    }
}