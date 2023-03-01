import React, { Component } from 'react';
import "../css/about_us.css";
import Index from '../components/index.js';
import Headernav from '../story/headernav.js';
import Footer from '../components/footer.js';

class Report extends Component {
    state = {}
    render() {
        return (
            <body>
                <Index />
                <main>
                    < Headernav />
                    <div className='teaCheckText'>
                        茶葉檢驗報告
                    </div>
                    <div style="text-align: center; padding-top: 5%; padding-bottom:5%; color: #005743;">
                        原鄉四季茶葉、特級綠茶茶葉、錫蘭紅茶茶葉、烏龍綠茶茶葉、極品菁茶茶葉、翡翠烏龍茶葉、嚴選高山茶茶葉、特選普洱茶葉等「茶葉」類SGS檢驗報告。
                    </div>
                    <div className="line_check'"></div>
                    <div className="row">
                        <div className="col-3 checkText" id="checkText">
                            <a href="../images/story/tea_check_images/reports/原鄉四季.pdf">
                                <img src="../images/story/tea_check_images/原鄉四季茶葉.jfif" />
                            </a>
                        </div>
                        <div className="col-3 checkText" id="checkText">
                            <a href="../images/story/tea_check_images/reports/特級綠茶茶葉.pdf">
                                <img src="/about_us_images/tea_check_images/特級綠茶茶葉.jfif" />
                            </a>
                        </div>
                        <div className="col-3 checkText" id="checkText">
                            <a href="/about_us_images/tea_check_images/檢驗報告/錫蘭紅茶茶葉.pdf">
                                <img src="/about_us_images/tea_check_images/錫蘭紅茶.jfif" />
                            </a>
                        </div>
                        <div className="col-3 checkText" id="checkText">
                            <a href="/about_us_images/tea_check_images/檢驗報告/烏龍綠茶茶葉.pdf">
                                <img src="/about_us_images/tea_check_images/烏龍綠茶茶葉.jfif" />
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-3 checkText" id="checkText">
                            <a href="/about_us_images/tea_check_images/檢驗報告/極品菁茶茶葉.pdf">
                                <img src="/about_us_images/tea_check_images/極品菁茶茶葉.jfif" />
                            </a>
                        </div>
                        <div className="col-3 checkText" id="checkText">
                            <a href="/about_us_images/tea_check_images/檢驗報告/翡翠烏龍茶葉.pdf">
                                <img src="/about_us_images/tea_check_images/翡翠烏龍綠茶茶葉.jfif" />
                            </a>
                        </div>
                        <div className="col-3 checkText" id="checkText">
                            <a href="/about_us_images/tea_check_images/檢驗報告/嚴選高山茶茶葉.pdf">
                                <img src="/about_us_images/tea_check_images/嚴選高山茶茶葉.jfif" />
                            </a>
                        </div>
                        <div className="col-3 checkText" id="checkText">
                            <a href="/about_us_images/tea_check_images/特選普洱茶茶葉.jfif">
                                <img src="/about_us_images/tea_check_images/特選普洱茶茶葉.jfif" />
                            </a>
                        </div>
                    </div>
                </main>
                <Footer />
            </body>
        );
    }
}

export default Report;