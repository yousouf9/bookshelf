import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getUsers, userRegister} from '../../Actions';

class Register extends PureComponent {

    constructor(props){
        super(props)

        this. state = {
                name:'',
                lastname:'',
                email:'',
                password:'',
                error:'',
        }

        props.getUsers();

        console.log(props)

    }

   
  componentWillReceiveProps(nextProps){
      console.log(nextProps);
      if(nextProps.user.register === false){
          this.setState({
            error:'Error Try again'
          })
      }else{
          this.setState({
            name:'',
            lastname:'',
            email:'',
            password:'',
            error:'',
          })
      }
  }
    handleInputName  =(event)=>{
        this.setState({
            name:event.target.value
        })

    }
    handleInputLastname  =(event)=>{
        this.setState({
            lastname:event.target.value
        })
    }
    handleInputEmail  =(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    handleInputPassword  =(event)=>{
        this.setState({
            password:event.target.value
        })

    }
    submitFormData = (event) =>{
        event.preventDefault();
        this.setState({error:''})

     this.props.userRegister({
        name: this.state.name,
         lastname: this.state.lastname,
         email: this.state.email,
         password: this.state.password
     }, this.props.user.getUsers)


    }

    getAllUsers = (users) =>(
        users.getUsers ?
          users.getUsers.map((item, i) =>(
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
            </tr>
          ))
        : null 
    )

    render() {
        
        return (
            <div className="rl_container">
                <form onSubmit={this.submitFormData}>
                    <h2>Add User</h2>
                    <div className="form_element">
                        <input 
                               type="text"
                               placeholder="Enter name"
                               onChange= {this.handleInputName}
                               value={this.state.name}
                               />

                    </div>
                    <div className="form_element">
                        <input 
                               type="text"
                               placeholder="Enter lastname"
                               onChange= {this.handleInputLastname}
                               value={this.state.lastname}
                               />

                    </div>
                    <div className="form_element">
                        <input 
                               type="email"
                               placeholder="Enter email"
                               onChange= {this.handleInputEmail}
                               value={this.state.email}
                               />

                    </div>
                    <div className="form_element">
                        <input 
                               type="password"
                               placeholder="Enter password"
                               onChange= {this.handleInputPassword}
                               value={this.state.password}
                               />

                    </div>
                    <button type="submit">Add User</button>
                    <div className="error">
                        {this.state.error}
                    </div>
                </form>
                <div className="current_users">
                    <h4>Current Users</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getAllUsers(this.props.user)}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return  bindActionCreators({
        getUsers,
        userRegister

    }, dispatch)
}
export default  connect(mapStateToProps, mapDispatchToProps)(Register);