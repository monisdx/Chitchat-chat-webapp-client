const messageReducer = ( state = { isLoading:false,msg:null, messages: [] }, action) => {
    switch (action.type){
        case 'START_LOADING_MSG':
            return {...state, isLoading: true};
        case 'END_LOADING_MSG':
            return {...state, isLoading: false};
        case 'ADD_MESSAGE':
            return {...state, msg: action.payload}    
        case 'GET_MESSAGE': 
            return { ...state, messages: action.payload};
        case 'ADD_NEWMESSAGE':
            return {...state, messages: [...state.messages, action.payload]}    
       
        default:
            return state;    
    }

}

export default messageReducer