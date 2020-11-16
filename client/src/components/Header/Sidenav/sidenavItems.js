import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPlus, faSearch,faUserCheck, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux' 



const SidenavItems = (props) => {
      console.log(props)
    const items = [
          {
              type:"navItem",
              icon:faHome,
              text:"Home",
              link:"/",
              restricted:false
          },
          {
            type:"navItem",
            icon:faUser,
            text:"My Profile",
            link:"/user",
            restricted:true
        },
        {
            type:"navItem",
            icon:faUserCheck,
            text:"Add Admins",
            link:"/user/register",
            restricted:true
        },
        {
            type:"navItem",
            icon:faSignInAlt,
            text:"Login",
            link:"/login",
            restricted:false,
            exclude:true
        },
        {
            type:"navItem",
            icon:faSearch,
            text:"My Reviews",
            link:"/user/user-reviews",
            restricted:true
        },
        {
            type:"navItem",
            icon:faPlus,
            text:"Add Reviews",
            link:"/user/add",
            restricted:true
        },
        {
            type:"navItem",
            icon:faSignOutAlt,
            text:"Logout",
            link:"/user/logout",
            restricted:true
        }
    ]
  const element = (item, key) =>(
      
        <div key={key} className={item.type}>
            <Link to={item.link}>
                <FontAwesomeIcon icon={item.icon} size="2x" color="white"
                  style={{marginRight: "10px"}}
                />
                {item.text}
            </Link>
        </div>
  ) 

  const showItems = ()=>(
           true ?
            items.map((item, i)=>{
                if(true){
                    return !item.exclude ? 
                      element(item, i)
                    :null
                }else{
                    return !item.restricted ?
                     element(item, i)
                     :null 
                }
                    //return element(item, i)
                })
       : null  

  )
    return (
        <div>
            {showItems()}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        user: state.uzser
    }
}
export default connect(mapStateToProps)(SidenavItems);