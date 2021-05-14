export default (state, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return {
               ...state,
               users: [...state.users, action.payload]
            }
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
            }
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.payload
            }
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case 'LOGIN_USER':
            return {
               ...state,
                loggedIn: true
              }
        case 'LOGOUT_USER':
            return {
                ...state,
                loggedIn: false
            }
        default: 
            return state; 
    }  
}