
import axios from 'axios';




export function getBooks( start=0, limit=10, order='asc', list = "" ) {

            
  const request = axios.get(`/api/books?skip=${start}&limit=${limit}&order=${order}`)
                       .then((response)=>{
                            
                        if(list){
                             console.log([...list,...response.data])
                            return [...list,...response.data];
                         }else{
                             return response.data;
                         }
                       })
         
      return {
          type:"GET_BOOKS",
          payload: request
      }   

    
}

export function getBook(id, books){

const request = axios.get(`/api/book/${id}`)
      .then((response)=>{
        if(books){
             return {...books, ...response.data};
       }else{
           return  response.data;
       }
      })

        return {
                type:"GET_BOOK",
                payload: request
        }   

     //OR Use this to make one big query || and this is the major function of the thunk-redux
     const reqt = axios.get(`/api/book/${id}`)

     return (dispatch) =>{
             reqt.then(({data})=>{
                 let book = data;

                 axios.get(`/api/reviewer/${id}`)
                        .then(({data})=>{
                            let response = {
                                ...book,
                                ...data
                            }
                            dispatch({
                                type:"GET_BOOK_REVIEWER",
                                payload: response
                            })
                        })

             })
     }
     // inside the Book reducer 
     //we have case: "ET_BOOK_REVIEWER"
     // return {...state, book: action.playload.book, reviwer: action.playload.reviewer,}

     

     
}

export function getBookReviewer(id, reviewer){

    const request = axios.get(`/api/reviewer/${id}`)
          .then((response)=>{
             {
                    if(reviewer){
                          return {...reviewer, ...response.data}
                    }else{
                        return  response.data;
                    }
                }
          })
    
            return {
                    type:"GET_BOOK_REVIEWER",
                    payload: request
     }   
    
     
    
}

export function clearBookReviewer(){

    
            return {
                    type:"CLEAR_BOOK_REVIEWER",
                    payload: {
                        getBook:{},
                        getBookReviewer:{}
                    }
        }   
    
     
    
}


//User login
export function loginUser({email, password}){
    const request = axios.post('/api/login', {email, password})
                        .then((response)=>{
                            return response.data;
                        })         
                   
    return {
        type: "USER_LOGIN",
        payload:request
    }
}

export function authenticateUser(){
    
    const request = axios.get("/api/auth")
                        .then(response => response.data)
    return {
        type: "AUTH_USER",
        payload: request
    }

}

export function addBook({name, author, review,pages,rating, price, ownerId}){
    const request = axios.post('/api/book', {name, author, review,pages,rating, price, ownerId})
                         .then(response=>{
                             return response.data;
                         })

    return {
        type:"ADD_REVIEW",
        payload:request
    }
}

export function clearBook() {
    return {
        type:"CLEAR_REVIEW",
        payload:''
    }
}

export function getUserPosts(ownerId) {
    const request = axios.get(`/api/user_post/${ownerId}`)
                         .then(response => response.data)
    return {
        type:"GET_USER_POSTS",
        payload: request
    }
}

export function updateBook(id, data){
    const request = axios.put(`/api/book/${id}`, data)
    .then(response => response.data)

        return {
        type:"UPDATE_BOOK",
        payload: request
        }
}

export function deletePost(id){
    const request = axios.delete(`/api/book/${id}`)
    .then(response => response.data)

        return {
        type:"DELETE_BOOK",
        payload: request
        }
}

export function clearEditedBook(){
    return {
        type:"CLEAR_BOOK_DATA",
        payload: {}
        }
}
export function getUsers(){
   const request = axios.get('/api/users_all')
                        .then(response=>response.data)
    
    return {
        type:"GET_ALL_USERS",
        payload:request,
    }
 }

 export function userRegister({email,name,password, lastname}, userList){
     console.log("Data output", {email,name,password, lastname})
    const request = axios.post('/api/register', {email,name,password, lastname})
    

    return(dispatch) =>{
          request.then(({data})=>{
              let users = data.success ? [...userList, data.user]: userList;
              let response = {
                  success: data.success,
                  users
              }
              dispatch({
                  type:"REGISTER_USER",
                  payload:response
              })
          })

    }
 }