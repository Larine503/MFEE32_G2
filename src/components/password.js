import React, { Component } from 'react';
import axios from 'axios';
import '../css/index.css';

class PassWord extends Component {

    state = {
        mtel: '0900345678',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        errorMessage: ''
    }

    render() {
        return (
            <div className="memberMain">
                <p>密碼變更</p>
                <form className="memberForm-T" action="/member/password" method='post' onSubmit={this.okClick}>
                <div className='error-div'><span className='error-div-p'>{this.state.errorMessage}</span></div>
                    <div className="memberForm-D">
                        <div className="memberForm-dd">
                        <div className='inputDiv'><span className='inputSpan2'>原密碼</span>
                                <input className='input_m' type="password" name='currentPassword' value={this.state.currentPassword} onChange={this.currentChange} /></div>
                            <div className='inputDiv'><span className='inputSpan2'>變更密碼</span>
                                <input className='input_m' type="password" name='newPassword' value={this.state.newPassword} onChange={this.newChange} /></div>
                            <div className='inputDiv'><span className='inputSpan2'>確認密碼</span>
                                <input className='input_m' type="password" name='mpid' value={this.state.confirmPassword} onChange={this.confirmChange} /></div>
                        </div>
                    </div>
                    <div className="memberForm-D">
                        <button className="button" type="button" onClick={this.okClick}>
                            確認
                        </button>
                    </div>
                </form>
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
                        this.setState({errorMessage:'新密碼和確認密碼不一致'})
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
                        errorMessage: ''
                    });
                } else {
                    // 驗證失敗，顯示錯誤消息
                    const errorMessage = response.data.message;
                    this.setState({errorMessage})
                }
            })

    }
}

export default PassWord;