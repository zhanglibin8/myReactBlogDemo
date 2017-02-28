import React from 'react';
import {hashHistory} from 'react-router';
import '../css/home.less';
export default class Home extends React.Component{
    constructor(){
        super();
        if(localStorage.getItem('userName')){
            var userName = JSON.parse(localStorage.getItem('userName'));
        }else {
            userName = ''
        }
        this.state = {
            userName
        }
    }
    handleAdd(){
        var articleArr = JSON.parse(localStorage.getItem('articleArr'))||[];
        var article = {};
        article.content = this.refs.text.value;
        var timeArray = new Date().toString().split(' ');
        var time = timeArray[1] + timeArray[2] +' '+ timeArray[4];
        article.time = time;
        article.userName = this.state.userName;
        articleArr.push(article);
        localStorage.setItem('articleArr',JSON.stringify(articleArr));
        var reg = /^\s*$/;
        if(reg.test(article.content)){
            alert('请输入内容');
            return;
        }
        this.refs.text.value = '';
        hashHistory.push('/list')
    }
    render(){
        return(
            <main>
                <h3>{this.state.userName?'welcome,'+this.state.userName:'请登录'}</h3>
                <from>
                    <textarea className="txtBox" cols="30" rows="10" ref="text"></textarea>
                    <button className="btn" onClick={this.handleAdd.bind(this)}>发表文章</button>
                </from>
            </main>
        )
    }
}
