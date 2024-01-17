const chatReducer = ( state = { chats: [] }, action) => {
    switch (action.type){
        case 'SAVE_USER': 
            return { ...state, chats: [...state.chats, action.payload]};

        default:
            return state;    
    }

}

export default chatReducer