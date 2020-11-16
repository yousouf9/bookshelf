import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getBooks  } from '../Actions';
import {bindActionCreators} from 'redux'
import BookTemplate from '../Widgets/book_item';

class HomeContainer extends Component {
     constructor(props){
         super(props);

         this.props.getBooks(0, 1, 'desc')

         
     }

   renderItems = (books)=>(
       books.getBooks ?
       books.getBooks.map((item, i)=>(
           <BookTemplate {...item} key={i}/>
        ))
       : null
   )

   loadmore =()=>{
       const count =  this.props.books.getBooks.length;
       this.props.getBooks(count, 1, "desc", this.props.books.getBooks)

   }
    render() {
        return (
            <div>
                {this.renderItems(this.props.books)}
                <div className="loadmore"
                    onClick={this.loadmore}
                >Loadmore</div>
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
    return   bindActionCreators({
        getBooks

    }, dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);