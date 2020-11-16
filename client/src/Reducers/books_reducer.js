
export default function(state = {}, action) {
    
    switch(action.type){
        case 'GET_BOOKS':
           return {...state, getBooks:action.payload}
        case 'GET_BOOK':
            return {...state, getBook:action.payload}
        case 'GET_BOOK_REVIEWER':
            return {...state, getBookReviewer:action.payload}
        case 'ADD_REVIEW':
            return {...state, addReviewMessage:action.payload}
        case 'UPDATE_BOOK':
            return {...state, 
                updateBook:action.payload.success,
                getBook:action.payload.result

            }
        case 'DELETE_BOOK':
            return {...state, 
                    deleteBook:action.payload
                   
                } 
        case 'CLEAR_BOOK_DATA':
            return  {...state, 
                deleteBook:false,
                getBook:action.payload,
                updateBook:false
            }           
        case 'CLEAR_REVIEW':
            return {...state, addReviewMessage:action.payload}
       

          
        case 'CLEAR_BOOK_REVIEWER':
            return {...state, getBookReviewer:action.payload.getBookReviewerk, getBook:action.payload.getBoo}
         default:
             return state   
    }
}