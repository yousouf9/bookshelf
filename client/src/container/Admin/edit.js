import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import { getBook, updateBook, deletePost, clearEditedBook} from '../../Actions';

class EditBook extends PureComponent {

    constructor(props){
            super(props)
            props.getBook(props.match.params.id);
    }

    state = {
        formData:{
          
            name:"",
            author:"",
            price:"",
            pages:"",
            rating:"",
            review:""
        }
    }
    handleInput=(event, name)=>{
        const newFormDate = {
            ...this.state.formData
        }
        newFormDate[name] = event.target.value;
        this.setState({
             formData:newFormDate
        })


    }
    submitForm = (event) =>{
        event.preventDefault();

        this.props.updateBook(this.props.match.params.id, this.state.formData)// updateBook(this.props.match.params.id, this.state.formData);
      
    }

   componentWillReceiveProps(nextProps){
       let book = nextProps.books.getBook;
       this.setState({
           formData:{
             
               name:book.name,
               author:book.author,
               price:book.price,
               pages:book.pages,
               rating:book.rating,
               review:book.review
           }
       })
   }
   componentWillUnmount(){
       this.props.clearEditedBook()
   }

   deleteBook = (event) =>{
       event.preventDefault();

       this.props.deletePost(this.props.match.params.id)

   }

   redirectUser = () =>{
       setTimeout(()=>{
           this.props.history.push('/user/user-reviews')
       }, 3000)
   }
  
    render() {
        let book = this.props.books;
        return (
            <div className="rl_container article">
                {
                    book.updateBook ? 
                      <div className="edit_confirm">
                         post updated, <Link to={`/books/${ book.getBook._id}`}>
                            click here to view updated book
                         </Link>
                        </div>
                    :null
                }
                {
                    book.deleteBook ? 
                       <div className="red_tag">
                           Post Deleted
                           {this.redirectUser()}

                       </div>
                    :null
                }
                <form onSubmit={this.submitForm}>
                    <h2>Edit review</h2>
                    <div className="form_element">
                        <input
                         type="text"
                         placeholder="Enter name"
                         value={this.state.formData.name}
                         onChange={(event)=> this.handleInput(event, 'name')}

                         />
                    </div>
                    <div className="form_element">
                        <input
                         type="text"
                         placeholder="Enter author"
                         value={this.state.formData.author}
                         onChange={(event)=> this.handleInput(event, 'author')}
                         
                         />
                    </div>
                    <div className="form_element">
                        <textarea  
                            value={this.state.formData.review}
                            onChange={(event)=> this.handleInput(event, 'review')}
                         />
                    </div>
                    <div className="form_element">
                        <input
                         type="number"
                         placeholder="Enter pages"
                         value={this.state.formData.pages}
                         onChange={(event)=> this.handleInput(event, 'pages')}
                         
                         />
                    </div>
                    <div className="form_element">
                        <select 
                            value= {this.state.formData.rating}
                            onChange={(event)=> this.handleInput(event, 'rating')}
                        
                        >
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                             <option value="5">5</option>
                        </select>
                    </div>
                    <div className="form_element">
                        <input
                         type="number"
                         placeholder="Enter price"
                         value={this.state.formData.price}
                         onChange={(event)=> this.handleInput(event, 'price')}
                         
                         />
                    </div>
                <button type="submit"> Update Review</button>
                <div className="delete_post">
                    <div className="button"
                        onClick={this.deleteBook}
                    >
                        Delete Review
                    </div>
                </div>
             
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        books: state.books
    }
}
const mapDispatchToProps = (dispatch) => {
    return  bindActionCreators({
      getBook,
      updateBook,
      deletePost,
      clearEditedBook

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);