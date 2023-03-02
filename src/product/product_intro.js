import React, { Component } from 'react';
import '../css/product_list.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

import img1 from "../images/product/1.png";
import img2 from "../images/product/2.png";
import img3 from "../images/product/3.png";
import img4 from "../images/product/4.png";



class ProductIntro extends Component {
    state = {
        productImg: [img1, img2, img3, img4],
        slideIndex: 1,
        num: 1
    }
    style = {
        paddingTop: "100px"
    }

    plusSlides = (n) => {
        this.showSlides(this.state.slideIndex += n);
    }

    showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");

        if (n > slides.length) {
            this.state.slideIndex = 1;
        }
        if (n < 1) {
            this.state.slideIndex = slides.length;
        }


        let k;
        for (k = 0; k < slides.length; k++) {
            var a = this.state.slideIndex + k;
            if (a > slides.length) {
                a -= 4;
                slides[k].src = slides[k].src.replace(slides[k].src, this.state.productImg[a - 1]);
            }
            slides[k].src = slides[k].src.replace(slides[k].src, this.state.productImg[a - 1]);
        }
    }

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

    addCart = () => {
        alert("已加入購物車");
    }



    render() {

        return (
            <body className='bodyProduct'>
                <Index />
                <div className="slideshow-container-banner-2" style={this.style}>
                    <div className="img_big">
                        <img src={img1} className="mySlides fade" alt='' />
                        <a className="prev" onClick={this.plusSlides.bind(this, -1)}>❮</a>
                        <a className="next" onClick={this.plusSlides.bind(this, 1)}>❯</a>
                    </div>
                    <div className="ContentProduct">
                        <h1 className='ProductTitle'>雙面飲料手提袋</h1>
                        <p className='ProductIntro'>
                            · 自己喝太孤單，草帽海賊團來當神隊友。
                            <br />
                            &nbsp;&nbsp;可雙面翻轉的飲料提袋，正面是全彩熱昇華轉印，背面是精美刺繡，一次擁
                            <br />
                            &nbsp;&nbsp;有兩個夥伴，優質又超值。
                        </p>
                        <br />
                        <p className='ProductIntro'>
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
                            <input type="text" value={this.state.num} />
                            <button type="submit" className='ProductIntroPlus' onClick={this.addNumber}>+</button>
                            <button className="cart" onClick={this.addCart}>加入購物車</button>
                        </div>
                    </div>
                    <div className="img_small">
                        <img src={img2} className="mySlides fade" alt='' />
                        <img src={img3} className="mySlides fade" alt='' />
                        <img src={img4} className="mySlides fade" alt='' />
                    </div>
                </div>

                <Footer />
            </body>
        );
    }
}

export default ProductIntro;