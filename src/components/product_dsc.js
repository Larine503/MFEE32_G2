// Component
import React, { Component } from 'react';
// import React from 'react';
// import { NavLink } from 'react-router-dom';
import '../css/product_list.css';
import '../css/index.css';
import { text } from 'body-parser';

// import ProductImg from '../components/product_img.js';


class ProductDescribe extends Component {
    state = {
        num: 1
    }
    // style = {
    //     paddingTop: "100px"
    // }


    // $(function () {
    //     // var name = document.getElementsByTagName("h1");
    // })

    // plusCart = () => {
    //     // alert("此商品已加入購物車");
    //     console.log("ok");
    // }

    minusNumber = () => {
        var newState = { ...this.state };
        newState.num -= 1;
        if (newState.num < 0) {
            newState.num = 0;
        }
        this.setState(newState);
        // console.log(newState.num);
    }

    addNumber = () => {
        var newState = { ...this.state };
        newState.num += 1;
        this.setState(newState);
        console.log(newState.num);
    }

    // 無法輸入數字
    // textChange = () => {
    //     console.log("ok");
    // }


    render() {
        // var cart = document.getElementsByTagName("button");
        // cart = cart.onclick.replace(plusCart());

        return (
            <div className="BodyProduct">
                <div className='ContentProduct'>
                    {/* <h1>{props.match.params.who}</h1> */}
                    <h1 className='ProductTitle'>雙面飲料手提袋</h1>
                    <p className='ProductIntro'>
                        {/* 改自動換行 */}
                        · 自己喝太孤單，草帽海賊團來當神隊友。
                        <br />
                        &nbsp;&nbsp;可雙面翻轉的飲料提袋，正面是全彩熱昇華轉印，背面是精美刺繡，一次擁
                        <br />
                        &nbsp;&nbsp;有兩個夥伴，優質又超值。
                    </p>
                    <br />
                    <p className='ProductIntro'>
                        {/* 改自動換行 */}
                        · 雙面飲料提袋一共三款：
                        <br />
                        &nbsp;&nbsp;紅款：魯夫＆娜美
                        <br />
                        &nbsp;&nbsp;綠款：喬巴＆索隆
                        <br />
                        &nbsp;&nbsp;藍款：香吉士＆羅賓
                        <br />
                        &nbsp;&nbsp;夥伴們收集開始囉！！！
                    </p>
                    <hr className='separate2' />
                    <h3 className='ProductIntroPrice'>NT$ 280</h3>
                    <div className="choose">
                        <select className='TypeSelect'>
                            <option>請選擇款式</option>
                            <option>款式一</option>
                            <option>款式二</option>
                            <option>款式三</option>
                        </select>
                        <button type="submit" className='ProductIntroMinus' onClick={this.minusNumber}>-</button>
                        {/* <input type="text" value={this.state.num} className='ProductIntroText' onChange={this.textChange} /> */}
                        <input type="text" value={this.state.num}/>
                        <button type="submit" className='ProductIntroPlus' onClick={this.addNumber}>+</button>
                        {/* 資料加入資料庫 */}
                        <button className="cart">加入購物車</button>
                    </div>
                </div>
            </div>
        )
    }


}

export default ProductDescribe;

