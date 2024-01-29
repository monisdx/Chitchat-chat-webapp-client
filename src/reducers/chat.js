const chatReducer = ( state = { isLoading:false, chat1:null, chat:null, chats: [] }, action) => {
    switch (action.type){
        case 'START_LOADING_CHATS':
            return {...state, isLoading: true};
        case 'END_LOADING_CHATS':
            return {...state, isLoading: false};
        case 'FETCH_USER_CHATS': 
            return { ...state,  chats: action.payload};
        case 'FETCH_CHAT':
            return {...state, chat1: action.payload};    
        case 'CREATE_CHAT':  
            return {...state, chat: action.payload};
        case 'UPDATE_CHAT':
            return {...state, chat1: action.payload,chat: action.payload};    
        default:
            return state;    
    }

}

export default chatReducer