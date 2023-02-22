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
    render() {
        return (
            <div className="dataImg">
                <form className="dataImg-d">
                    <div className="data-M-img"><img src="" alt="" />
                        <div>上傳</div>
                    </div>
                    <button className="button">
                        上傳
                    </button>
                </form>
                <form className="memberForm-T" action="/member/edit" method='post'>
                    <div className="memberForm-d">
                        <div className="memberForm-dd">
                            <input type="hidden" id="userItemMtel"
                                name="mtel" value="0912345678" />
                            <label htmlFor="">姓名:</label><br />
                            <input type="text" name="mname" value={this.state.userItem.mname}
                                onChange={this.mnameChange} /><br />
                            {/* <label htmlFor="">手機號碼:</label><br />
                            <input type="tel" name="mtel" value={this.state.userItem.mtel}
                                onChange={this.mtelChange} /><br/> */}
                            <label htmlFor="">電子信箱:</label><br />
                            <input type="email" name="email" value={this.state.userItem.email}
                                onChange={this.emailChange} />
                        </div>
                        <div className="memberForm-dd">
                            <label htmlFor="">生日:<br />
                                <input type="date" name="birthday" value={this.state.userItem.birthday}
                                onChange={this.birthdayChange} /></label><br />
                            <label htmlFor="">地址:<br />
                                <input type="text" name="address" value={this.state.userItem.address}
                                onChange={this.addressChange}/></label>
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

    mnameChange=(e)=>{
        var newState = {...this.state};
        newState.userItem.mname = e.target.value;
        this.setState(newState);
    }
    emailChange=(e)=>{
        var newState = {...this.state};
        newState.userItem.email = e.target.value;
        this.setState(newState);
    }
    birthdayChange= (e)=>{
        var newState = {...this.state};
        newState.userItem.birthday = e.target.value;
        this.setState(newState);
    }
    addressChange= (e)=>{
        var newState = {...this.state};
        newState.userItem.address = e.target.value;
        this.setState(newState);
    }
    okClick = async () => {
        var fromServer = await axios.put(
            "http://localhost:8000/member/edit",
            this.state.userItem
        )
        console.log(fromServer);
        window.location = "/member/edit";
    }
    async componentDidMount() {
        // var url = `http://localhost:8000/member/${this.props.match.params.mtel}`;
         var url = `http://localhost:8000/member/0912345678`;
        var fromServer = await axios.get(url);
        var newState = { ...this.state };
        newState.userItem = fromServer.data;
        this.setState(newState);
    }

}

export default Member;