import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/index.css';
import logo from '../images/home/logo2.png';
// import Home from './home.js';
// import Story from '../story/story.js';

class Index extends Component {
    state = {}
    render() {
        return (
                <nav>
                    <div className="navMain">
                    <div className="navLogo"><a href="/"><img src={logo} alt="" /></a></div>
                        <ul className="navId">
                            <a href="/news"><li className='nav-t'>最新消息</li></a>
                            <a href="/story"><li className='nav-t'>品牌故事</li></a>
                            <a href="/menu"><li className='nav-t'>飲品菜單</li></a>
                            <a href="/product"><li className='nav-t'>周邊選購</li></a>
                            <a href="/store"><li className='nav-t'>門市據點</li></a>
                            <a href="/order"><li className='nav-t'>線上訂餐</li></a>
                        </ul>
                        <div className="navLogin">
                            <div><a className="navLogin-a" href="/Login">LOGIN</a></div>
                            <div><a className="navLogin-a" href="/member/edit">會員</a></div>
                            <div>購物車</div>
                        </div>
                    </div>
                </nav>
        );
    }
}

export default Index;