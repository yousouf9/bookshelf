
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import BookView from './components/Books'
import Logout from './components/Admin/logout';
import UserLogin from './container/Admin/login';
import EditPost from './container/Admin/edit';
import Register from './container/Admin/register';
import Profile from './components/Admin' 
import AddReview from './container/Admin/add';
import  Auth from  './hoc/Auth/auth';
import userPosts  from './components/Admin/userPosts';

const routes = () => {
    return (
        <Layout>
        <Switch>
            <Route path='/' exact component={Auth(Home, null)}/>
            <Route path='/user' exact component={Auth(Profile, true)}/>
            <Route path='/books/:id' exact component={Auth(BookView, null)}/>
            <Route path='/login' exact component={Auth(UserLogin, false)}/>
            <Route path='/user/register' exact component={Auth(Register, true)}/>
            <Route path='/user/logout' exact component={Auth(Logout, true)}/>
            <Route path='/user/edit-post/:id' exact component={Auth(EditPost, true)}/>
            <Route path='/user/add' exact component={Auth(AddReview, true)}/>
            <Route path='/user/user-reviews' exact component={Auth(userPosts, true)}/>
        </Switch>
        </Layout>
    );
};

export default routes;