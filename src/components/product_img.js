// Component
import React, { Component } from 'react';
import '../css/product_list.css';
import '../css/index.css';

import ProductDescribe from '../components/product_dsc.js';


import img1 from "../images/product/1.png";
import img2 from "../images/product/2.png";
import img3 from "../images/product/3.png";
import img4 from "../images/product/4.png";



class ProductImg extends Component {
    state = {
        productImg: [img1, img2, img3, img4],
        slideIndex: 1
    }
    style = {
        paddingTop: "100px"
    }

    // showSlides(slideIndex);

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



    render() {
        return (
            // <div  className="bodyProduct">
            //     <div className="img_big">
            //         <img src={img1} className="mySlides fade" />
            //         <a className="prev" onClick={this.plusSlides.bind(this, -1)}>❮</a>
            //         <a className="next" onClick={this.plusSlides.bind(this, 1)}>❯</a>
            //     </div>
            //     {/* <div className='content'>
            //         <h4></h4>
            //     </div> */}
            //     <ProductDescribe />
            //     <div className="img_small">
            //         <img src={img2} className="mySlides fade" />
            //         <img src={img3} className="mySlides fade" />
            //         <img src={img4} className="mySlides fade" />
            //     </div>
            // </div>
            <div className="slideshow-container-banner-2" style={this.style}>
                    <div className="img_big">
                     <img src={img1} className="mySlides fade" />
                     <a className="prev" onClick={this.plusSlides.bind(this, -1)}>❮</a>
                     <a className="next" onClick={this.plusSlides.bind(this, 1)}>❯</a>
                 </div>
                 <ProductDescribe />
                 <div className="img_small">
                     <img src={img2} className="mySlides fade" />
                     <img src={img3} className="mySlides fade" />
                     <img src={img4} className="mySlides fade" />
                 </div>
            </div>
        )
    }
}

export default ProductImg;

// class aaa extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <div>hi</div>
//         );
//     }
// }
 
// export default {aaa, ProductImg};