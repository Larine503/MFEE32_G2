import React, { Component } from 'react';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import homeImg1 from '../images/home/home1.jpg';
import homeImg2 from '../images/home/home2.jpg';
import homeImg3 from '../images/home/home3.jpg';
import homeImg4 from '../images/home/home4.jpg';
import dirnkImg1 from '../images/home/series-5.jpg';
import dirnkImg2 from '../images/home/series-2.jpg';
import dirnkImg3 from '../images/home/series-3.jpg';
import productImg1 from '../images/home/product_1.jpg';
import productImg2 from '../images/home/product_2.jpg';
import productImg3 from '../images/home/product_3.jpg';
import newsImg1 from '../images/home/new.jpg';

class Home extends Component {
    state = {}
    render() {
        return (
            <body>
                <Index/>
            <div>
                <section id="home" className="">
                    <div className="homeDiv1">誠信‧創新‧用心‧惜福</div>
                    <div className="homeDiv2">
                        <ul className="homeList">
                            <li className="homeItem"><img className="homeItem-img" src={homeImg1} alt="" /></li>
                            <li className="homeItem"><img className="homeItem-img" src={homeImg2} alt="" /></li>
                            <li className="homeItem"><img className="homeItem-img" src={homeImg3} alt="" /></li>
                            <li className="homeItem"><img className="homeItem-img" src={homeImg4} alt="" /></li>
                        </ul>
                    </div>
                </section>
                <section id="about">
                    <div className="aboutDiv">
                        <div className="aboutBg">
                            <div className="aboutMain">
                                <div className="aboutCenter">
                                    <div className="aboutText">
                                        <p className="aboutText-p">
                                            1987年3月8日趙福全夫妻
                                            <br />
                                            於台南市南區，
                                            <br />
                                            創立「清心冷飲站」，
                                            <br />
                                            設置一座簡易的吧檯，
                                            <br />
                                            對外販售冷飲、冰品。
                                            <br />
                                            而剛由調酒杯倒入飲用杯中的茶飲，
                                            <br />
                                            茶湯上層漂浮冰塊，
                                            <br />
                                            冰塊上層漂浮泡沫，
                                            <br />
                                            形成漸層的圖象，
                                            <br /><br />
                                            更有細小泡沫從杯底竄起，
                                            <br />
                                            恰似香檳一般，
                                            <br />
                                            令人驚豔不已，
                                            <br />
                                            在當時稱這種新興時尚飲品。

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section>
                <section id="menuBg">
                    <div className="menuBgImg"></div>
                </section>
                <section id="menu">
                    <div className="menuMain">
                        <ul className="menuUl">
                            <li className="menuLi">
                                <div className="menuLi-div"><img src={dirnkImg1} alt="" /></div>
                                <div className="menuLi-Text">
                                    <h3>奶茶類</h3>
                                </div>
                            </li>
                            <li className="menuLi">
                                <div className="menuLi-div"><img src={dirnkImg2} alt="" /></div>
                                <div className="menuLi-Text">
                                    <h3>純茶類</h3>
                                </div>
                            </li>
                            <li className="menuLi">
                                <div className="menuLi-div"><img src={dirnkImg3} alt="" /></div>
                                <div className="menuLi-Text">
                                    <h3>果茶類</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="news">
                    <div className="newsBg"></div>
                    <div className="newsMain">
                        <div className="newsText">
                            <div className="newsDiv">
                                <h3>最新消息</h3>
                                <p>農曆春節近了，炒氣氛少不了草帽海賊團～不讓過年冷清清，來清心福全喝飲料，還可以抽航海王加價購，笑喝喝過新年，把美味飲料和熱鬧好運一起帶回家！</p>
                                <a href="/news">
                                    <button className="btnL btnR">
                                        <span>MORE+</span>
                                        <div className="border btnR"></div>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="newsImg"><img src={newsImg1} alt="" /></div>
                    </div>
                </section>
                <section id="product">
                    <div className="productMain">
                        <div className="productMain-d">
                            <div className="productMain-div">
                                <div className="productMain-img"><img src={productImg1} alt="" /></div>
                            </div>
                            <div className="productMain-div2">
                                <div className="productMain-img"><img src={productImg2} alt="" /></div>
                            </div>
                            <div className="productMain-div3">
                                <div className="productMain-img"><img src={productImg3} alt="" /></div>
                            </div>
                        </div>

                        <div className="product-T">
                            <div className="productText">
                                <h3>周邊商品選購</h3>
                                <p>航海王系列-馬克杯</p>
                                <h5>索隆、魯夫、娜美、喬巴</h5>
                                <a href="/product">
                                    <button className="btnL btnR">
                                        <span>MORE+</span>
                                        <div className="border btnR"></div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="store">
                    <div className="storeBg">
                        <div className="storeBg-div"></div>
                    </div>
                    <div className="storeMain">
                        <div className="storeText">
                            <div className="storeText-div">
                                <h3>門市據點</h3>
                                <p>營業時間</p>
                                <p>地址</p>
                                <a href="/store">
                                    <button className="btnL btnR">
                                        <span>MORE+</span>
                                        <div className="border btnR"></div>
                                    </button>
                                </a>
                            </div>

                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </section >
                <Footer/>
            </div>
            </body>
        );
    }
}

export default Home;