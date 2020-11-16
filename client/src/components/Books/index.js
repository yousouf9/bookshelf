import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBook, getBookReviewer, clearBookReviewer} from '../../Actions'
class BookView extends Component {
        constructor(props){
            super(props)
            //call the action 
            props.getBook(props.match.params.id, props.books.getBook)
            console.log(this.props)
          //get ownerId
         const reviewerID = props.books.getBook ? props.getBookReviewer(props.books.getBook.ownerId, props.books.getBookReviewer ): null;
         
           
          
            
          
        }

 componentWillUnmount(){
   
    clearBookReviewer()
 }   
componentDidMount(){
 

}

renderBook =(books)=>(
    
   books.getBook && books.getBookReviewer ? 
    <div className="br_container">
            <div className="br_header">
                <h2>{ books.getBook.name}</h2>
                <h2>{ books.getBook.author}</h2>
                <div className="br_reviewer">
                        <span>Reviewed By:</span> {books.getBookReviewer.name} {books.getBookReviewer.lastname}
                </div>
            </div>
            <div className="br_review">
                {books.getBook.review}
            </div>
            <div className="br_box">
                <div className="left">
                     <div>
                         <span>Pages</span> {books.getBook.pages}
                     </div>
                     <div>
                         <span>Price</span> {books.getBook.price}
                     </div>

                </div>
                <div className="right">
                <div>
                         <span>Rating</span> {books.getBook.rating}/5
                     </div>
                </div>

            </div>
    </div>
   : <div>Loading</div>
)

    render() {
        
        let books =  this.props.books;
        return (
            <div>
                {this.renderBook(books)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}
const mapDispatchToProps = (dispatch) => {
    return  bindActionCreators({
        getBook,
        getBookReviewer,
        clearBookReviewer
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BookView);