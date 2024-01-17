import * as api from '../api';

export const signin = (form,navigate) => async(dispatch) => {
    try{
        const { data } = await api.signIn(form);
        // console.log(data)
        dispatch({type: 'AUTH', data});

        navigate('/chat');

    }
    catch(error){
        console.log(error);

    }
}

export const signup = (form,navigate) => async(dispatch) => {
    try{
        const { data } = await api.signUp(form);

        dispatch({type: 'AUTH', data});

        navigate('/chat');

    }
    catch(error){
        console.log(error);

    }
}
