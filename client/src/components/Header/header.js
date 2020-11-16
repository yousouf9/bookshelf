import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import Nav from './Sidenav/sidenav';


class Header extends Component {
   
    constructor(props){
        super(props)

this.state = {
          showNav:true
      }

    }
  onHideNav = ()=>{
      this.setState({
          showNav:false
      })

  }  
  onShowNav = ()=>{
    this.setState({
        showNav:true
    })

   
}  


    render() {
        return (
            <header>
                <div className="open_nav">
                    <FontAwesomeIcon icon={faBars} size='lg' color='white'
                        style={{
                            padding:'10px',
                            cursor:'pointer'
                        }}
                        onClick={()=>this.onShowNav()}
                    />
                     </div>
                     <Nav 
                     showNav={this.state.showNav}
                     onHideNav= {()=>this.onHideNav()}
                     {...this.props}
                     
                     />
                    <Link to="/" className="logo">
                        The Book Shelf
                    </Link>
               
            </header>
        );
    }
}

export default Header;