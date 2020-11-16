import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loginUser} from '../../Actions';

class Login extends Component {



         state ={
             email:"",
             password:"",
             error:"",
             success:false
         }


    emailHandler = (event)=>{
        this.setState({
            email:event.target.value
        })
    }

    passwordHandler = (event)=>{
        this.setState({
            password:event.target.value
        })

    }

    static getDerivedStateFromProps(nextProps){
        if(nextProps.user.login){
            if(nextProps.user.login.isAuth){
                return nextProps.history.push('/user')
            }
           
        }

        return null
    } 

    formSubmit = (event)=>{
        event.preventDefault();

        this.props.loginUser(this.state)

    }

    render() {
         let user = this.props.user
        return (
            <div className="rl_container">
                <form onSubmit={this.formSubmit}>
                    <h2>Login here</h2>
                    <div className="form_element">
                        <input 
                                    type="email"
                                    placeholder="Enter your email"
                                    value={this.state.email}
                                    onChange={this.emailHandler}
                        />
                    </div>
                    <div className="form_element">
                        <input 
                                    type="password"
                                    placeholder="Enter your password"
                                    value={this.state.password}
                                    onChange={this.passwordHandler}
                        />

                    </div>
                    <button type="submit">Login</button>
                      <div className="error">
                            {
                                user.login ? 
                                   user.login.response ? 
                                   <div>{user.login.response.data.message}</div>
                                   :null
                                
                                :null
                            }

                      </div>
                </form>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
    loginUser,
   }, dispatch)
}
export default  connect(mapStateToProps, mapDispatchToProps )(Login);