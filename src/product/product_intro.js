import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import '../css/product_list.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import ProductImg from '../components/product_img.js';
// import ProductDescribe from '../components/product_dsc.js';


class ProductIntro extends Component {


    render() {

        return (
            <body className='bodyProduct'>
                <Index />
                <ProductImg />
                {/* <ProductDescribe /> */}


                {/* <div className="content"> */}
                {/* <h1>{props.match.params.who}</h1> */}
                {/* <p> */}
                {/* 改自動換行 */}
                {/* · 自己喝太孤單，草帽海賊團來當神隊友。
                    <br />
                    &nbsp;&nbsp;可雙面翻轉的飲料提袋，正面是全彩熱昇華轉印，背面是精美刺繡，一次擁
                    <br />
                    &nbsp;&nbsp;有兩個夥伴，優質又超值。 */}
                {/* </p> */}
                {/* <br /> */}
                {/* <p> */}
                {/* 改自動換行 */}
                {/* · 雙面飲料提袋一共三款：
                    <br />
                    &nbsp;&nbsp;紅款：魯夫＆娜美
                    <br />
                    &nbsp;&nbsp;綠款：喬巴＆索隆
                    <br />
                    &nbsp;&nbsp;藍款：香吉士＆羅賓
                    <br />
                    &nbsp;&nbsp;夥伴們收集開始囉！！！ */}
                {/* </p> */}
                {/* <hr /> */}
                {/* <h3>NT$ 280</h3> */}
                {/* <div className="choose">
                    <select>
                        <option>請選擇款式</option>
                        <option>款式一</option>
                        <option>款式二</option>
                        <option>款式三</option>
                    </select>
                    <input type="submit" value="-" />
                    <input type="text" value="1" />
                    <input type="submit" value="+" />
                    <button className="cart" onclick="plusCart()">加入購物車</button>
                </div> */}
                {/* </div> */}

                <Footer />
            </body>
        );
    }
}

export default ProductIntro;