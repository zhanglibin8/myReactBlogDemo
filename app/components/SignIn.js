import React from 'react';
import {hashHistory} from 'react-router';
export default class User extends React.Component{
    constructor(){
        super();
        var users = JSON.parse(localStorage.getItem('userInfo'))||[];
        var user = users[users.length-1]||{};
        var isSignIn = localStorage.getItem('userName');
        //默认状态
        this.state = {
            user,
            users,
            isSignIn
        };
    }
    handleSignIn(){
        if(!this.state.isSignIn){
            var formData = {
                name: this.refs.name.value,
                passWord: this.refs.passWord.value
            };
            var flag = this.state.users.find(function (item, index) {
                return item.name == formData.name && item.passWord == formData.passWord
            });
            if(flag){
                //存储登陆用户的用户名
                localStorage.setItem('userName',JSON.stringify(flag.name));
                alert('登陆成功');
                hashHistory.push('/');
                ///////////////////
                //不刷新不会重新读取localStorage
                location.reload();
            }else {
                alert('用户名或密码错误')
            }
        }else {
            localStorage.setItem('userName','');
            hashHistory.push('/');
            location.reload();
        }

    }
    render(){
        return(
            <div>
                <main>
                    <form>
                        <div className="group">
                            <label htmlFor="name">用户名</label>
                            <input type="text" name="name" ref="name" defaultValue={this.state.user.name}/>
                        </div>
                        <div className="group">
                            <label htmlFor="passWord">密码</label>
                            <input type="password" name="passWord" ref="passWord" defaultValue={this.state.user.passWord}/>
                        </div>
                        <button className="signIn" type="button"  onClick={this.handleSignIn.bind(this)}>{this.state.isSignIn?'注销':'登陆'}</button>
                    </form>
                </main>
            </div>
        )
    }
}
