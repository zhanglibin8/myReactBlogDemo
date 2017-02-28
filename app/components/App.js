import React from 'react';
import {Link} from 'react-router';
import '../css/reset.less';
import '../css/style.less';
export default class App extends React.Component{
    constructor(){
        super();
        var isSignIn2 = localStorage.getItem('userName');
        this.state = {
            isSignIn2
        };
    }
    render(){
        return(
            <div className="app">
                <header>
                    <nav className="clear">
                        <Link to="/">myBlog</Link>
                        <Link to="/list">文章列表</Link>
                        <Link to="/signIn">{this.state.isSignIn2?'注销':'登陆'}</Link>
                        <Link to="/signUp">注册</Link>
                    </nav>
                    <div className="sear">
                        <input id="name" type="search"/>
                            <label htmlFor="name">搜索文章</label>
                    </div>
                </header>
                {this.props.children}
            </div>
        )
    }
}