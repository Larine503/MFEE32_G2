import React, { Component } from 'react';
import '../css/index.css';
import axios from "axios";


class Member extends Component {
    state = {
        userItem: {
            id: 25,
            mname: '甲乙丙',
            mtel: '0912345678',
            mpid: '1234',
            gender: 'F',
            birthday: '2023-01-01',
            email: 'zxc123@gnail.com',
            address: '台中市',
            mimages: ''
        }
    }

    async componentDidMount() {
        var result = await axios.get("http://localhost:8000/login");
        var url = `http://localhost:8000/member/${result.data.user}`;
        var fromServer = await axios.get(url);
        var newState = { ...this.state };
        newState.userItem = fromServer.data;
        this.setState(newState);
    }
    render() {
        return (
            <div className="memberMain">
                <p>會員資料</p>
                <form className="memberForm-T" action="/member/edit" method='post' onSubmit={this.okClick}>
                    <div className="memberForm-D">
                    <div className="memberForm-dd">
                    <label htmlFor="">您目前使用的手機號碼:</label><br/>
                            <input className='input_m input_mtel'  type="tel" name="mtel" value={this.state.userItem.mtel}
                                onChange={this.mtelChange} readonly="readonly"/><br />
                    </div>
                        <div className="memberForm-dd">
                            <input className='input_m' type="hidden" id="userItemMtel"
                                name="mtel" value={this.state.userItem.mtel} />
                            <div className='inputDiv'><span className='inputSpan'>姓名</span>
                                <input className='input_m' type="text" name="mname" value={this.state.userItem.mname}
                                    onChange={this.mnameChange} required /></div>
                                    <div className='inputDiv'><span className='inputSpan'>Email</span>
                                    <input  className='input_m' type="email" name="email" value={this.state.userItem.email}
                                onChange={this.emailChange} required /></div>
                                <div className='inputDiv'><span className='inputSpan'>地址</span>
                                <input className='input_m' type="text" name="address" value={this.state.userItem.address}
                                    onChange={this.addressChange} required /></div>

                        
                        </div>
                

                    </div>
                    <div className="memberForm-D">
                        <button className="button" type="button" onClick={this.okClick}>
                            更新
                        </button>
                    </div>
                </form>

            </div>

        );
    }

    mnameChange = (e) => {
        var newState = { ...this.state };
        newState.userItem.mname = e.target.value;
        this.setState(newState);
    }

    emailChange = (e) => {
        var newState = { ...this.state };
        newState.userItem.email = e.target.value;
        this.setState(newState);
    }

    addressChange = (e) => {
        var newState = { ...this.state };
        newState.userItem.address = e.target.value;
        this.setState(newState);
    }

    okClick = async () => {
        var fromServer = await axios.put("http://localhost:8000/member/edit", {
            ...this.state.userItem          
        });
        console.log(fromServer);
        alert('更新成功');
    };

}

export default Member;