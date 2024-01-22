const chatReducer = ( state = { isLoading:false, chats: [] }, action) => {
    switch (action.type){
        case 'START_LOADING':
            return {...state, isLoading: true};
        case 'END_LOADING':
            return {...state, isLoading: false};
        case 'FETCH_USER_CHATS': 
            return { ...state, chats: action.payload};
        case 'CREATE_CHAT':  
        return {...state, chats: [...state.chats, action.payload]};
        default:
            return state;    
    }

}

export default chatReducer