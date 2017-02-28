import React from 'react';
import {hashHistory} from 'react-router';
import '../css/list.less';
export default class Home extends React.Component{
    constructor(){
        super();
        var articleArr = JSON.parse(localStorage.getItem('articleArr'))||[];
        this.state = {
            articleArr,
        }
    }
    handleOpen(){
        hashHistory.push('/')
    }
    render(){
        return(
            <main>
                <ul className="list">
                    {
                        this.state.articleArr.length > 0 ? this.state.articleArr.map((item,index)=> {
                                return  <li key={index}><h4>{item.content}</h4>  <div className="pull-right"><span>{item.userName}</span><span>发表于</span><span>{item.time}</span></div></li>
                        }):<li onClick={this.handleOpen}>还没有文章，去发表一篇吧</li>
                    }
                </ul>
            </main>

        )
    }
}
