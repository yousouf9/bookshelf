import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {authenticateUser} from '../../Actions'


export default function(ComposedClass, reload) {
     class AuthenticateCheck extends Component {

        state = {
            loading: true,
        }


        componentDidMount(){
            this.props.authenticateUser(); 
        }
        componentWillReceiveProps(nextProps){
            this.setState({
                loading:false
            })
            if(!nextProps.user.auth.isAuth){
                if(reload){
                    this.props.history.push('/login')
                }
               
            }else{
                if(reload === false){
                    this.props.history.push('/user')
                }
            }

           
        }
        render(){

            if(this.state.loading){
                return <div className="loader">Loading...</div>
            }
             return(
                   <ComposedClass {...this.props}  user = {this.props.user}/>
             )
        }
     }

     const mapStateToProps = (state) => {
         return {
             user: state.user
         }
     }
     const mapDispatchToProps = (dispatch) => {
         return  bindActionCreators ({
             authenticateUser
         }, dispatch)
     }

     return  connect(mapStateToProps, mapDispatchToProps)(AuthenticateCheck);
}