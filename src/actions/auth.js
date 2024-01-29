import * as api from '../api';

export const signin = (form,navigate) => async(dispatch) => {
    try{
        dispatch({type: 'START_LOADING_AUTH'});
        const { data } = await api.signIn(form);
        dispatch({type: 'AUTH', data});
        dispatch({type: 'END_LOADING_AUTH'});

        navigate('/chat');

    }
    catch(error){
        console.log(error);

    }
}

export const signup = (form,navigate) => async(dispatch) => {
    try{
        dispatch({type: 'START_LOADING_AUTH'});
        const { data } = await api.signUp(form);
        dispatch({type: 'AUTH', data});
        dispatch({type: 'END_LOADING_AUTH'});

        navigate('/chat');

    }
    catch(error){
        console.log(error);

    }
}
