import React, { Component } from 'react';
import axios from 'axios';
import '../css/index.css';

class PassWord extends Component {

    state = {
        mtel: '0900345678',
        currentPassword: 'abc',
        newPassword: 'sad',
        confirmPassword: 'sad',
        error: ''
    }
    async componentDidMount() {
        await axios.get('http://localhost:8000/login', { withCredentials: true }
        ).then((response) => {
            if (!response.data.loggedIn) {
                window.location.href = '/login';
            } else {
                // 用户已登录
                var newState = { ...this.state };
                newState.mtel = response.data.mtel;
                this.setState(newState);
            }
        });
    }

    render() {
        return (
            <div className="dataImg">
                <div className="dataImg-d">
                    <div className="passwordForm">
                        <form className="passwordForm-T" action="">
                            <label htmlFor="">原本密碼:<br />
                                <input type="text" name='currentPassword' value={this.state.currentPassword} onChange={this.currentChange} /></label><br />
                            <label htmlFor="">變更密碼:<br />
                                <input type="text" name='newPassword' value={this.state.newPassword} onChange={this.newChange} /></label><br />
                            <label htmlFor="">新密碼:<br />
                                <input type="text" name='mpid' value={this.state.confirmPassword} onChange={this.confirmChange} /></label><br />
                            <div className="passwordForm-D">
                                <button className="button " type='button' onClick={this.okClick}>
                                    確認
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        );
    }
    currentChange = (e) => {
        var newState = { ...this.state };
        newState.currentPassword = e.target.value;
        this.setState(newState);
    }

    newChange = (e) => {
        var newState = { ...this.state };
        newState.newPassword = e.target.value;
        this.setState(newState);
    }

    confirmChange = (e) => {
        var newState = { ...this.state };
        newState.confirmPassword = e.target.value;
        this.setState(newState);

    }




    okClick = () => {
        const { mtel, currentPassword } = this.state;
        axios.post('http://localhost:8000/password', { mtel, currentPassword })
            .then((response) => {
                if (response.data.success) {
                    if (this.state.newPassword !== this.state.confirmPassword) {
                        alert('新密碼和確認密碼不一致');
                        return;
                    }
                    axios.put("http://localhost:8000/password", {
                        ...this.state,
                    });
                    alert('密碼變更成功!');
                    this.setState({
                        currentPassword: '',
                        newPassword: '',
                        confirmPassword: '',
                        error: ''
                    });
                } else {
                    // 驗證失敗，顯示錯誤消息
                    const errorMessage = response.data.message;
                    alert(errorMessage);
                }
            })

    }

}

export default PassWord;