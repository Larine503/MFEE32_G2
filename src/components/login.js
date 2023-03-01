import React, { Component } from 'react';
import axios from "axios";
import loginImg from '../images/home/loginImg.jpg';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

// import { response } from 'express';

class Login extends Component {
    state = {
        isLoggedIn: false,
        userItem: {
            mtel: '',
            mpid: ''
          }
    }
   async componentDidMount() {
       await axios.get('http://localhost:8000/login', { withCredentials: true }).then((response) => {
            const { mtel, mpid } = response.data;
            if (mtel && mpid) {
                this.setState((prevState) => ({
                    userItem: {
                        ...prevState.userItem,
                        mtel: mtel,
                        mpid: mpid
                    },
                    isLoggedIn: true
                }));
            } else {
                this.setState({ isLoggedIn: false });
            }
        });
    }

    render() {
        const { isLoggedIn, userItem } = this.state;
        return (
            <div>
                <Index />
                <section id="login">
                    <div className="loginMain">
                        <div className="loginContent"><img src={loginImg} alt="" /></div>
                        <div className="loginForm">
                            <p className="loginForm-P">會員登入</p>

                            <form className="loginForm-T" action="/login">
                                <label htmlFor="">電話號碼:</label><br />
                                <input type="tel" name="mtel" value={userItem.mtel}
                                    onChange={this.mtelChange} /><br />
                                <label htmlFor="">密碼:</label><br />
                                <input type="password" name="mpid" value={userItem.mpid}
                                    onChange={this.mpidChange} /><br />
                                <div className="loginForm-D">
                                    {isLoggedIn ? (
                                        <button
                                            className="button"
                                            type="button"
                                            onClick={this.handleLogoutClick}
                                        >
                                            登出
                                        </button>
                                    ) : (
                                        // 显示“登录”按钮
                                        <button
                                            className="button"
                                            type="button"
                                            onClick={this.handleLoginClick}
                                        >
                                            登入
                                        </button>
                                    )}
                                    <a href="/member/creat">
                                        <button className="button" type="button">
                                            註冊
                                        </button>
                                    </a>
                                </div>

                            </form>
                        </div>

                    </div>

                </section>
                <Footer />
            </div>
        );
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

    handleLoginClick = () => {
        const { mtel, mpid } = this.state.userItem;
        axios.post('http://localhost:8000/login', { mtel, mpid }, { withCredentials: true })
            .then((response) => {
                if (response.data.success) {
                    // 登錄成功後將isLoggedIn狀態設置為true
                    this.setState({ isLoggedIn: true });
                    // 跳轉到主頁
                    window.location.href = '/';
                } else {
                    // 登錄失敗，顯示錯誤消息
                    const errorMessage = response.data.message;
                    alert(errorMessage);
                }
            })
            .catch((error) => {
                console.log(error);
                alert('資料錯誤');
            });
    };

    handleLogoutClick = () => {
        axios.get('http://localhost:8000/login', { withCredentials: true }).then((response) => {
            console.log(response);
            // 將isLoggedIn狀態設置為false並清除session
            axios.post('http://localhost:8000/login', { withCredentials: true });
            this.setState({ isLoggedIn: false, userItem: { mtel: '', mpid: '' } });
        });
    };


}

export default Login;