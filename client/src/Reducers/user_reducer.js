export default function(state = {}, action) {
    
    switch(action.type){
        case 'USER':
           return {...state, getUser:action.payload}
        case 'USER_LOGIN':
            return {...state, login:action.payload }
        case 'AUTH_USER':
            return {...state, auth:action.payload }
        case 'GET_USER_POSTS':
            return {...state, userPosts:action.payload }   
        case 'GET_ALL_USERS':
            return {...state, getUsers:action.payload} 
        case "REGISTER_USER":
            return {...state,
                     getUsers:action.payload.users,
                     register:action.payload.success,
                           
            } 

         default:
             return state   
    }
}