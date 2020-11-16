import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getUserPosts } from '../../Actions';
import moment from 'moment-js';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux'; 



class userPosts extends Component {

    constructor(props){
         super(props)
          const ownerID = props.user.auth.id;
            props.getUserPosts(ownerID);
    }
    

    showDate = (date)=>{
        return moment(date).format('YYYY, DD, MM')
    }

    showUserPost = (posts) =>(
        posts.userPosts ? 
          posts.userPosts.map((reviews, i)=>(
            <tr key={i}>
                    <td><Link to={`/user/edit-post/${reviews._id}`}>
                    {reviews.name}
                              </Link></td>
                    <td>{reviews.author}</td>
                    <td>{this.showDate(reviews.createdAt)}</td>

            </tr>

          ))
        
        :null
    )

    render() {
        let user = this.props.user;
        return (
            <div className="user_posts">
                <h2>Your Reviews</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.showUserPost(user)}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        getUserPosts
    }, dispatch)
    
}
export default connect(mapStateToProps, mapDispatchToProps )(userPosts);