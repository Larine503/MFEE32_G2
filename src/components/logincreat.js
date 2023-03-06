import React, { Component } from 'react';
import axios from "axios";
import loginBg from '../images/home/login_bg.jpg';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import { GoArrowRight } from 'react-icons/go';

class LoginCreat extends Component {
    state = {
        errorMessage: '',
        userItem: {
            mname: '',
            mtel: '',
            mpid: '',
        }
    }
    render() {
        return (
            <div>
                <Index />
                <section id="login">
                    <div className='dataBg'><img src={loginBg} alt="" /> </div>
                    <div className="loginMain">
                        <div className="loginContent">
                            <p>加入清心福全會員</p>
                            <p>及時提供您最熱門的優惠活動，與您同分享，清心福全聯名活動內容，和新品上市資訊。</p>
                            <ul>註冊清心福全會員即可：
                                <li>･&nbsp;&nbsp;線上訂餐外送/自取</li>
                                <li>･&nbsp;&nbsp;周邊商品線上購買</li>
                                <li>･&nbsp;&nbsp;多人共同訂餐</li>
                                <li>･&nbsp;&nbsp;獲取最新活動資訊</li>
                            </ul>

                        </div>
                        <div className="loginForm">
                            <p className="loginForm-P">會員註冊</p>
                            <form className="loginForm-T" action="">
                            <div className='error-div'><p className='error-div-p'>{this.state.errorMessage}</p></div>
                                <input className='input_m' type="text" name="mname" value={this.state.userItem.mname}
                                    onChange={this.mnameChange} placeholder='您的姓名' /><br /><br />

                                <input className='input_m' type="tel" name="mtel" value={this.state.userItem.mtel}
                                    onChange={this.mtelChange} placeholder='電話號碼' /><br /><br />

                                <input className='input_m' type="password" name="mpid" value={this.state.userItem.mpid}
                                    onChange={this.mpidChange} placeholder='密碼' /><br />
                          
                                <div className="loginForm-D">
                                    <button className="button" type="button" onClick={this.okClick}>
                                        註冊
                                    </button>
                                </div>
                                <a className='loginForm-D-a' href='/Login'>
                                    <span><GoArrowRight /></span>
                                    <span>已註冊，立即登入</span>
                                </a>

                            </form>
                        </div>

                    </div>

                </section>
                <Footer />
            </div>
        );
    }
    mnameChange = (e) => {
        var newState = { ...this.state };
        newState.userItem.mname = e.target.value;
        this.setState(newState);
    }
    mtelChange = (e) => {
        var newState = { ...this.state };
        newState.userItem.mtel = e.target.value;
        this.setState(newState);
    }
    mpidChange = (e) => {
        var newState = { ...this.state };
        newState.userItem.mpid = e.target.value;
        this.setState(newState);
    }
    okClick = () => {
        const { mname, mtel, mpid } = this.state.userItem;
        axios.post("http://localhost:8000/member/creat", { mname, mtel, mpid }
        ).then((response) => {
            if (response.data.success) {
                window.location.href = '/login';
            }
            else {
                //顯示錯誤消息
                const errorMessage = response.data.message;
                this.setState({ errorMessage });
            }
        });
    };
}

export default LoginCreat;