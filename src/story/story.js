import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/index.css';
import "../css/about_us.css";
// import '../css/_css/bootstrap.css';
import Index from '../components/index.js';
import Headernav from './headernav.js';
import AboutUsButton from './AboutUsButton.js';
import Footer from '../components/footer.js';
import originTeaDec from '../images/story/about_us_images/teaLine_dec.png';
import t06 from '../images/story/brand_story_images/t06.png';
import startTeaDec from '../images/story/about_us_images/teaLine_dec.png';
import t07 from '../images/story/brand_story_images/t07.png';
import spiritTeaDec from '../images/story/about_us_images/teaLine_dec.png';
import foodStory from '../foodStory/foodStory.js';



class Story extends Component {
    state = {
        'padding-top': '100px',
    }
    render() {
        return (
            <body>
                <Index />
                <main>
                    < Headernav />
                    <div className="row brandOriginContent ">
                        <div className="col-2">
                            <div className="left_title_Origin">
                                <span> 品牌起源</span>
                            </div>
                            <img className="origin_tea_dec" src={originTeaDec} alt="" />
                        </div>
                        <div className="col-5 brandOriginText">
                            <p>
                                1987年初，在以美食、小吃聞名的台南，正準備創業的趙福全先生與太太坐在一家茗品店裡，討論著未來的願景。趙先生點了一杯泡沫桂香紅茶，這是他第一次喝這款剛開始流行的手搖茶飲。在不斷試茶、配茶的過程中，趙先生發揮創意巧思，精心調配多種產地、產季、茶類的茶葉比例，並搭配多元的煮、泡、燜、調等方式，以天然的茶葉成就多種絕妙的好味道。
                            </p>
                        </div>
                        <div className=" t06 col-5">
                            <img src={t06} alt="" />
                        </div>
                    </div>
                    <div className=" row brandStartContent">
                        <div className="col-5 t07">
                            <img src={t07} alt="" />
                        </div>
                        <div className="col-5 brandStartText">
                            之後趙先生在台南市金華路二段的巷弄內嘗試開店，當時想替這間小店取個有福氣的好名字，而在反覆思量之後，聽從父親的建議：「呷茶，『清心』上好」，並徵求舅公的同意，決定使用舅公位於澎湖數十年老字號「清心飲食店」的名稱，正式命名為「清心冷飲站」。
                        </div>
                        <div className="col-2">
                            <div className="left_title_Start">
                                <span>品牌草創</span>
                            </div>
                            <img className="start_tea_dec" src={startTeaDec} alt="" />
                        </div>
                    </div>
                    <div className="brandSpiritContent">
                        <div className="row">
                            <div className="col-2">
                                <div className="left_title_Spirit">
                                    <span>品牌精神</span>
                                </div>
                                <img className="spirit_tea_dec" src={spiritTeaDec} alt="" />
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="trust">誠信</div>
                                        <p className="trustText">
                                            創立以來力求務實經營、嚴謹管理、穩健成長。我們堅持以「誠信」原則服務消費者，講究真材實料、貨真價實、童叟無欺。
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <div className="creat">創新</div>
                                        <p className="creatText">
                                            於沖調技術、品管作為、意象設計、門市裝潢、行銷策略等多元面向，不斷精益求精、推陳出新。
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="line_brandSpirit_dec_1"></div>
                                <div className="line_brandSpirit_dec_2"></div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="workhard">用心</div>
                                        <p className="workhardText">
                                            嚴選優質茶葉、食材與包材，落實食品安全衛生之把關，訂定標準作業程序，堅持以「手工」與「客製化」沖泡、調製飲品。
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <div className="thanks">惜福</div>
                                        <p className="thanksText">
                                            本著「惜福」、「感恩」的心意，力行「取之社會，用之社會」的理念，善盡企業的社會責任。。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='about_us_button'>
                            <a href="/foodStory">
                                <button className='Button'>
                                    嚴選食材
                                </button>
                            </a>
                        </div>
                        <BrowserRouter>
                            <div>
                                <Switch>
                                    <Route path="/foodStory" Component={foodStory} exact />
                                </Switch>
                            </div>
                        </BrowserRouter>
                    </div>
                    <AboutUsButton />
                </main >
                <Footer />
            </body>
        );
    }
}

export default Story;