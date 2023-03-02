import React, { Component } from 'react';
import "../css/about_us.css";
import Index from '../components/index.js';
import Headernav from './headernav.js';
import Footer from '../components/footer.js';
import tea01 from '../images/story/tea_check_images/原鄉四季茶葉.jfif';
import tea02 from '../images/story/tea_check_images/特級綠茶茶葉.jfif';
import tea03 from '../images/story/tea_check_images/錫蘭紅茶.jfif';
import tea04 from '../images/story/tea_check_images/烏龍綠茶茶葉.jfif';
import tea05 from '../images/story/tea_check_images/極品菁茶茶葉.jfif';
import tea06 from '../images/story/tea_check_images/翡翠烏龍綠茶茶葉.jfif';
import tea07 from '../images/story/tea_check_images/嚴選高山茶茶葉.jfif';
import tea08 from '../images/story/tea_check_images/特選普洱茶茶葉.jfif';

class Report extends Component {
    state = {}
    render() {
        return (
            <body>
                <Index />
                < Headernav />
                <div className='teaCheckText'>
                    茶葉檢驗報告
                </div>
                <div className='teaCheckList'>
                    原鄉四季茶葉、特級綠茶茶葉、錫蘭紅茶茶葉、烏龍綠茶茶葉、極品菁茶茶葉、翡翠烏龍茶葉、嚴選高山茶茶葉、特選普洱茶葉等「茶葉」類SGS檢驗報告。
                </div>
                {/* <div className="line_check'"></div> */}
                <div className="teaArea">
                    <div className="checkText" id="checkText">
                        <a href="../images/story/PDF/原鄉四季.pdf">
                            <img src={tea01} alt='' />
                        </a>
                    </div>
                    <div className="checkText" id="checkText">
                        <a href="../images/story/PDF/特級綠茶茶葉.pdf">
                            <img src={tea02} alt='' />
                        </a>
                    </div>
                    <div className="checkText" id="checkText">
                        <a href="../images/story/PDF/錫蘭紅茶茶葉.pdf">
                            <img src={tea03} alt='' />
                        </a>
                    </div>
                    <div className="checkText" id="checkText">
                        <a href="../images/story/PDF/烏龍綠茶茶葉.pdf">
                            <img src={tea04} alt='' />
                        </a>
                    </div>
                </div>
                <div className="teaArea">
                    <div className='checkText' id="checkText">
                        <a href="../images/story/PDF/極品菁茶茶葉.pdf">
                            <img src={tea05} alt='' />
                        </a>
                    </div>
                    <div className="checkText" id="checkText">
                        <a href="../images/story/PDF/翡翠烏龍茶葉.pdf">
                            <img src={tea06} alt='' />
                        </a>
                    </div>
                    <div className="checkText" id="checkText">
                        <a href="../images/story/PDF/嚴選高山茶茶葉.pdf">
                            <img src={tea07} alt='' />
                        </a>
                    </div>
                    <div className="checkText" id="checkText">
                        <a href="../images/story/PDF/特選普洱茶茶葉.pdf">
                            <img src={tea08} alt='' />
                        </a>
                    </div>
                </div>
                <Footer />
            </body>
        );
    }
}

export default Report;