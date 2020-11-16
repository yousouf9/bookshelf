import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {addBook, clearBook} from '../../Actions';

class AddBook extends Component {
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
        this.props.addBook({
            ...this.state.formData,
            ownerId:this.props.user.auth.id
            
        })
   
      
    }

    showBook = (book) =>(
         book.post ?
          <div className="conf_link">
              cool!! <Link to={`/books/${book.bookId}`}>
                  click here to see the post
              </Link>

          </div>
        : null
    )
    componentWillUnmount(){
       this.props.clearBook()
    }
    render() {
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Add a review</h2>
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
                <button type="submit"> Add review</button>
                {
                    this.props.books.addReviewMessage ?
                        this.showBook(this.props.books.addReviewMessage)
                    :null
                }
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
     addBook,
     clearBook
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);