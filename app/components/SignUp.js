import React from 'react';
import {hashHistory} from 'react-router';
export default class User extends React.Component {
    handleSignUp() {
        var user =JSON.parse(localStorage.getItem('userInfo'))||[];
        var formData = {
            name: this.refs.name.value,
            passWord: this.refs.passWord.value,
            email: this.refs.email.value
        };
        if(!formData.name){
            alert('用户名不能为空');
            return;
        }
        if(!formData.passWord){
            alert('请设置密码');
            return;
        }
        var flag = user.find(function (item, index) {
            return item.name == formData.name;
        });
        user.push(formData);
        if(flag){
            //用户被注册
            alert('用户名被占用')
        }else {
            //成功注册
            alert('注册成功，请登录！');
            localStorage.setItem('userInfo', JSON.stringify(user));
            hashHistory.push('/signIn');
            location.reload();
        }
    }

    render() {
        return (
            <div>
                <main>
                    <form>
                        <div className="group">
                            <label htmlFor="name">用户名</label>
                            <input type="text" name="name" ref="name"/>
                        </div>
                        <div className="group">
                            <label htmlFor="passWord">密码</label>
                            <input type="text" name="passWord" ref="passWord"/>
                        </div>
                        <div className="group">
                            <label htmlFor="email">邮箱</label>
                            <input type="email" name="email" ref="email"/>
                        </div>
                        <button type="button"  onClick={this.handleSignUp.bind(this)}>注册</button>
                    </form>
                </main>
            </div>
        )
    }
}
