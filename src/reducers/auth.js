
const authReducer = ( state = { authdata: null, isLoading: false }, action) => {
    switch (action.type){
        case 'START_LOADING_AUTH':
            return {...state, isLoading: true};
        case 'END_LOADING_AUTH':
            return {...state, isLoading: false}; 
        case 'AUTH': 
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authdata: action?.data};
        case 'LOGOUT':
            localStorage.clear();
            return { ...state, isLoading:false, authdata: null};
        default:
            return state;    
    }

}

export default authReducer