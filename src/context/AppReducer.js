export default (state, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return {
               ...state,
               users: [...state.users, action.payload]
            }
        case 'LOGIN_USER':
            return {
               ...state,
               loggedIn: true
            }
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
            }
        default: 
            return state; 
    }  
}