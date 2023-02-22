import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/product_list.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

import banner1 from "../images/product/banner1.jpg";
import banner2 from "../images/product/banner2.jpg";
import banner3 from "../images/product/banner3.jpg";



class product extends Component {
    state = {
        // 'padding-top': '100px',
        productTitle: [1, 2],
        banner: [banner1, banner2, banner3],
        slideIndex: 1
    }
    startStyle = {
        display: "block"
    }


    // React.useState(showSlides(slideIndex));
    // showSlides = (slideIndex) => {

    // };





    plusSlides = (n) => {
        this.showSlides(this.state.slideIndex += n);
    }
    currentSlide = (n) => {
        this.showSlides(this.state.slideIndex = n);
    }

    showSlides(n) {
        // var newState = { ...this.state };
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            this.state.slideIndex = 1;
        }
        if (n < 1) {
            this.state.slideIndex = slides.length;
        }



        let k;
        for (k = 0; k < slides.length; k++) {
            var newStyle = { ...this.startStyle }
            newStyle.display = "none";
            slides[k].style.display = newStyle.display;
        }
        for (k = 0; k < dots.length; k++) {
            dots[k].className = dots[k].className.replace(" active", "");
        }

        slides[this.state.slideIndex - 1].style.display = this.startStyle.display;
        dots[this.state.slideIndex - 1].className += " active";
    }



    // (自動輪播)
    // componentDidMount() {
    //     // this.setState(this.state);
    // 	// this.state.slideIndex = setInterval(() => {
    //     //     // var newState = {...this.state};
    //     //     // newState.slideIndex += 1;
    //     //     // this.setState(newState);
    //     //     // this.plusSlides(this.state.slideIndex += 1);
    //     //     // console.log(this.state.slideIndex);
    //     //     // console.log(n);
    //     //     // this.showSlides(this.state.slideIndex);
    //     // }, 5000);


    //     // const autoPlay = () =>{
    //     //     //這裡面的setState()能夠重新設定state的值
    //     //     // this.setState({time : new Date().toLocaleTimeString()})

    //     //     // var newState = {...this.state};
    //     //     // newState.slideIndex += 1;
    //     //     // this.state.slideIndex += 1;
    //     //     // this.setState(newState.slideIndex);
    //     //     // console.log(newState.slideIndex);
    //     // }
    //     // setInterval(autoPlay,5000)
    // }


    render() {
        // banner
        let bannerImg = [];
        for (let j = 0; j < this.state.banner.length; j++) {
            if (j == 0) {
                // 第一個div的display為block
                bannerImg.push(
                    <div className="mySlides fade" style={this.startStyle}>
                        <img src={this.state.banner[j]} className="banner" />
                    </div>
                )

            }
            else {
                var newStyle = { ...this.startStyle }
                newStyle.display = "none";
                // 剩下的div的display為none
                bannerImg.push(
                    <div className="mySlides fade" style={newStyle}>
                        <img src={this.state.banner[j]} className="banner" />
                    </div>
                )
            }

        }


        // product
        let productImg = [];
        for (let i = 0; i < this.state.productTitle.length; i++) {
            productImg.push(
                <div>
                    <img src={require(`../images/product/${this.state.productTitle[i]}.png`)} className="product_img" />
                    <NavLink to={`/product/航海王/product${this.state.productTitle[i]}`} className="title" href='/product_intro.js'>{`product${this.state.productTitle[i]}`}</NavLink>
                </div>
            )
        }



        return (
            <body className='bodyProduct'>
                <Index />
                <div className="slideshow-container">
                    {bannerImg}
                    {/* <div className="mySlides fade">
                        <img src={banner1} className="banner" />
                    </div> */}

                    {/* <a className="prev" onClick={this.plusSlides}>❮</a> */}
                    <button className="prev" onClick={this.plusSlides.bind(this, -1)}>❮</button>
                    {/* <a className="next" value="1" onClick={this.plusSlides}>❯</a> */}
                    <button className="next" onClick={this.plusSlides.bind(this, 1)}>❯</button>

                    <br />
                    <div className='dots'>
                        {/* <span className="dot active" onClick="currentSlide(1)"></span> */}
                        {/* <span className="dot" onClick="currentSlide(2)"></span> */}
                        {/* <span className="dot" onClick="currentSlide(3)"></span> */}
                        <span className="dot active" onClick={this.currentSlide.bind(this, 1)}></span>
                        <span className="dot" onClick={this.currentSlide.bind(this, 2)}></span>
                        <span className="dot" onClick={this.currentSlide.bind(this, 3)}></span>
                    </div>
                </div>
                <div className="typ">
                    {/* 根據網址列名稱印出不同名稱(商品分類) */}
                    {/* <h1>About {props.match.params.who}</h1> */}

                    <NavLink to="/product/航海王" className="name">航海王</NavLink> | &nbsp;
                    <NavLink to="/product/哥吉拉" className="name">哥吉拉</NavLink> | &nbsp;
                    <NavLink to="/product/黃阿媽的後宮生活" className="name">黃阿媽的後宮生活</NavLink>
                </div>


                <hr />
                <div className="product">
                    {productImg}
                    {/* <div> */}
                    {/* <img src={p1} className="product_img" /> */}
                    {/* <NavLink to="/product/雙面飲料手提袋" className="title">雙面飲料手提袋</NavLink> */}
                    {/* </div> */}
                </div>
                <Footer />
            </body>
        );
    }
}

export default product;