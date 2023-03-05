import React, { Component } from 'react';
import '../css/index.css';
import "../css/drinks.css";
import Index from '../components/index.js';
import 原鄉四季 from '../images/drink/T/原鄉四季.png';
import AllDriksButton from './allDriksButton.js';


class TSerious extends Component {
    state = {
        drinks: []
    }

    async componentDidMount() {
        var a = "茗品系列";
        var url = `http://localhost:8000/menu/${a}`;
        var fromServer = await axios.get(url);
        // console.log(fromServer.data);
        this.setState({ drinks: fromServer.data });
    }
    render() {
        return (
            <body>
                <Index />
                <div>

                    <div className="topping_content">
                        <div className="topping_title">
                            加料
                        </div>
                        <ul className='toppingText'>
                            <li>珍珠</li>
                            <li>粉圓</li>
                            <li>QQ</li>
                            <li>布丁</li>
                            <li>仙草凍</li>
                            <li>暗黑水晶</li>
                            <li>蘆薈</li>
                            <li>冰淇淋</li>
                            <li>茉莉茶凍</li>
                            <li>粉條</li>
                        </ul>
                    </div>
                    <div className="menu_area">
                        <div className="drinkTitlesArea">
                            <div className="drinktitlesText">茗品系列</div>
                        </div>
                        <div className="drinks_menu">
                            <div className="cell_drinkList">
                                {this.state.drinks.map(drink => (
                                    <div key={drink.pid} className="cell">
                                        <div className='drinksPicture'>
                                            <img src={drink.imagePath} alt='' />
                                        </div>
                                        <div className="cell_drink_title">
                                            {drink.pname}
                                        </div>
                                        <div className="cell_line"></div>
                                        <div className="cell_drink_note">
                                            {drink.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="/menu/MTSerious">
                            <button className='SeriousBtn1'>
                                奶茶系列<br />奶茶推薦
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="/menu/TTSerious">
                            <button className='SeriousBtn2'>
                                鮮奶系列<br />拿鐵系列
                            </button>
                        </a>
                    </div>
                </div >
                <a href="/menu">
                    <AllDriksButton />
                </a>
            </body >
        );
    }
}

export default TSerious;