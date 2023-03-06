import React, { Component } from 'react';
import axios from "axios";
import loginBg from '../images/home/login_bg.jpg';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

// import { response } from 'express';

class Login extends Component {
    state = {
        errorMessage:'',
        isLoggedIn: false,
        userItem: {
            mtel: '',
            mpid: ''
          }
    }
//    async componentDidMount() {
//        await axios.get('http://localhost:8000/login', { withCredentials: true }).then((response) => {
//             const { mtel, mpid } = response.data;
//             if (mtel && mpid) {
//                 this.setState((prevState) => ({
//                     userItem: {
//                         ...prevState.userItem,
//                         mtel: mtel,
//                         mpid: mpid
//                     },
//                     isLoggedIn: true
//                 }));
//             } else {
//                 this.setState({ isLoggedIn: false });
//             }
//         });
//     }

    render() {
        const userItem  = this.state;
        return (
            <div>
                <Index />
                <section id="login">
                    <div  className='dataBg'><img src={loginBg} alt="" /> </div>
                    <div className="loginMain">
                        <div className="loginContent">
                            <p>註冊清心福全會員</p>
                           <p>及時提供您最熱門的優惠活動，與您同分享，清心福全聯名活動內容，和新品上市資訊。</p>
                           <ul>註冊清心福全會員即可：
                            <li>･&nbsp;&nbsp;線上訂餐外送/自取</li>
                            <li>･&nbsp;&nbsp;周邊商品線上購買</li>
                            <li>･&nbsp;&nbsp;多人共同訂餐</li>
                            <li>･&nbsp;&nbsp;獲取最新活動資訊</li>
                           </ul>
                            
                        </div>
                      
                        <div className="loginForm">
                            <p className="loginForm-P">會員登入</p>

                            <form className="loginForm-T" action="/login">
                                <input className='input_m' type="tel" name="mtel" value={userItem.mtel}
                                    onChange={this.mtelChange} placeholder='電話號碼'/><br /><br />
                                <input className='input_m' type="password" name="mpid" value={userItem.mpid}
                                    onChange={this.mpidChange}  placeholder='密碼' />
                                <div className='error-div'><p className='error-div-p'>{userItem.errorMessage}</p></div>
                                <div className="loginForm-D">
                                        <button
                                            className="button"
                                            type="button"
                                            onClick={this.handleLoginClick}
                                        >
                                            登入
                                        </button>
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
                    window.location.href = '/member/edit';
                } else {
                    // 登錄失敗，顯示錯誤消息
                    const errorMessage = response.data.message;
                    this.setState({ errorMessage });
                }
            })
            .catch((error) => {
                console.log(error);
                this.setState({ errorMessage:'資料錯誤' });
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