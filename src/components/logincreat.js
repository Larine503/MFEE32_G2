import React, { Component } from 'react';
import axios from "axios";
import loginImg from '../images/home/loginImg.jpg';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

class LoginCreat extends Component {
    state = {
        userItem:{
            mname:'甲乙丙',
            mtel:'0912345678',
            mpid:'1234',          
        }
    }
    render() {
        return (
            <div>
            <Index/> 
            <section id="login">
                <div className="loginMain">
                    <div className="loginContent"><img src={loginImg} alt="" /></div>
                    <div className="loginForm">
                        <p className="loginForm-P">會員註冊</p>
                        <form className="loginForm-T" action="">
                            <label for="">姓名:</label><br />
                                <input type="text"   name="mname" value={ this.state.userItem.mname}
                                onChange={this.mnameChange} /><br />
                            <label for="">電話號碼:</label><br />
                                <input type="tel"   name="mtel" value={ this.state.userItem.mtel}
                                onChange={this.mtelChange} /><br />
                            <label for="">密碼:</label><br />
                                <input type="password" name="mpid" value={ this.state.userItem.mpid}
                                 onChange={this.mpidChange}/><br />
                            <div className="loginForm-D">
                                <button className="button" type="button"  >
                                    登入
                                </button>
                                <button className="button" type="button" onClick={this.okClick}>
                                    註冊
                                </button>
                            </div>

                        </form>
                    </div>

                </div>

            </section>
            <Footer/>
            </div>
        );
    }
    mnameChange=(e)=>{
        var newState = {...this.state};
        newState.userItem.mname = e.target.value;
        this.setState(newState);
    }
    mtelChange=(e)=>{
        var newState = {...this.state};
        newState.userItem.mtel = e.target.value;
        this.setState(newState);
    }
    mpidChange= (e)=>{
        var newState = {...this.state};
        newState.userItem.mpid = e.target.value;
        this.setState(newState);
    }
    okClick = async()=>{
         await axios.post(
            "http://localhost:8000/member/creat",
            this.state.userItem
        )
         window.location="/"
        // console.log(this.state.todoItem);
        // return;
    }
}

export default LoginCreat;