import React from 'react';
import ReactDom from 'react-dom';
import {App,Home,SignIn,SignUp,List} from './components/All';

import {Router, Route, hashHistory, IndexRoute} from 'react-router';

ReactDom.render(<Router history={hashHistory}>
                <Route path="/" components={App}>
                    <IndexRoute components={Home}/>
                    <Route path="home" components={Home}/>
                    <Route path="list" components={List}/>
                    <Route path="signIn" components={SignIn}/>
                    <Route path="signUp" components={SignUp}/>
                </Route>
            </Router>
    , document.getElementById('app'));
