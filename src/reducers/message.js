const messageReducer = ( state = { isLoading:false ,msg:null, messages: [] }, action) => {
    switch (action.type){
        case 'START_LOADING_MSG':
            return {...state, isLoading: true};
        case 'END_LOADING_MSG':
            return {...state, isLoading: false};
        case 'ADD_MESSAGE':
            return {...state, messages: [...state.messages, action.payload]}    
        case 'GET_MESSAGE': 
            return { ...state, messages: action.payload};
        case 'ADD_NEWMESSAGE':
            if(state.messages.length == 0){
                return {...state, messages: [...state.messages, action.payload]}    
            }
            else{
                let prevmsg = state.messages[state.messages.length-1];
                if(prevmsg._id !== action.payload._id ){
                    return {...state, messages: [...state.messages, action.payload]}    
                }
                else{
                    return {...state, messages: [...state.messages]}    
                }
            }
            
       
        default:
            return state;    
    }

}

export default messageReducer