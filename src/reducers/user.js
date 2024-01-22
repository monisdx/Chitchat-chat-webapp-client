
export default (state={ isLoading:false, users:[]}, action)=>{
    switch(action.type){
        case 'START_LOADING':
            return {...state, isLoading: true};
        case 'END_LOADING':
            return {...state, isLoading: false};
        case 'FETCH_BY_SEARCH':
            return {...state, users: action.payload};
        case 'RESET_USERS':
            return {...state, users: []};    
        default: 
            return state;            
    }
}