import React, { Component } from 'react';
import '../css/index.css';
import "../css/drinks.css";
import Index from '../components/index.js';
import 粉條奶茶 from '../images/drink/MT/粉條奶茶.png';
import 茶凍奶綠 from '../images/drink/MT/茶凍奶綠.png';
import 珍珠奶茶 from '../images/drink/MT/珍珠奶茶.png';
import 錫蘭奶紅 from '../images/drink/TT/紅茶拿鐵.png';
import 烏龍奶茶 from '../images/drink/MT/烏龍奶茶.png';
import 特級奶綠 from '../images/drink/MT/特級奶綠.png';
import 仙草凍奶茶 from '../images/drink/MT/仙草凍奶茶.png';
import 椰果奶茶 from '../images/drink/MT/椰果奶茶.png';
import 布丁奶茶 from '../images/drink/MT/布丁奶茶.png';
import 暗黑水晶奶茶 from '../images/drink/MT/暗黑水晶奶茶.png';
import 蜂蜜奶茶 from '../images/drink/MT/蜂蜜奶茶.png';
import 芝麻奶茶 from '../images/drink/MT/芝麻奶茶.png';
import axios from 'axios';


class MTSerious extends Component {
    state = {
        drinks: []
    }

    async componentDidMount() {
        var a = "奶茶系列奶茶推薦";
        var url = `http://localhost:8000/menu/${a}`;
        var fromServer = await axios.get(url);
        // console.log(fromServer.data);
        this.setState({ drinks: fromServer.data });
    }

    async componentDidUpdate() {

        document.getElementById("MT01").addEventListener('mouseenter', (event) => {

            document.getElementById("image").src= 粉條奶茶;

        })
        document.getElementById("MT02").addEventListener('mouseenter', (event) => {

            document.getElementById("image").src= 茶凍奶綠;

        })
        
        document.getElementById("MT03").addEventListener('mouseenter', (event) => {

            document.getElementById("image").src= 珍珠奶茶; 

        })
        document.getElementById("MT04").addEventListener('mouseenter', (event) => {

            document.getElementById("image").src= 錫蘭奶紅; 

        })
        document.getElementById("MT05").addEventListener('mouseenter', (event) => {

            document.getElementById("image").src= 烏龍奶茶; 

        })
        document.getElementById("MT06").addEventListener('mouseenter', (event) => {

            document.getElementById("image").src= 特級奶綠; 

        })
        document.getElementById("MT07").addEventListener('mouseenter', (event) => {

            document.getElementById("image").src= 仙草凍奶茶; 

        })
        document.getElementById("MT08").addEventListener('mouseenter', (event) => {

            document.getElementById("image").src= 椰果奶茶; 

        })
        document.getElementById("MT09").addEventListener('mouseenter', (event) => {

            document.getElementById("image").src= 布丁奶茶; 

        })
        document.getElementById("MT10").addEventListener('mouseenter', (event) => {

            document.getElementById("image").src= 暗黑水晶奶茶; 

        })
        document.getElementById("MT11").addEventListener('mouseenter', (event) => {

            document.getElementById("image").src= 蜂蜜奶茶; 

        })
        document.getElementById("MT12").addEventListener('mouseenter', (event) => {

            document.getElementById("image").src= 芝麻奶茶; 

        })

    }

    render() {
        return (
            <div>
                <Index />
                <div className='allMenuArea'>
                    <div className='drinksPicture'>
                        <img id='image' src='' alt='' />
                    </div>
                    <div className='toppingArea'>
                        <div className="toppingContent">
                            <div className="topping_title">
                                加料選項
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
                    </div>
                    <div className="menu_area">
                        <div className="drinkTitlesArea">
                            <div className="drinktitlesText">奶茶系列/奶茶推薦</div>
                        </div>
                        <div className="drinks_menu">
                            <ul className="cell_drinkList">
                                {this.state.drinks.map(drink => (
                                    <li key={drink.pid} id={drink.pid} className="cell">
                                        <div className="cell_drink_title_two">
                                            {drink.pname}
                                        </div>
                                        <div className="cell_line"></div>
                                        <div className="cell_drink_note">
                                            {drink.content}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='SeriousBtn1Area'>
                            <a href="/menu/TTSerious">
                                <div className='SeriousBtn1'>
                                    鮮奶系列<br />拿鐵系列
                                </div>
                            </a>
                        </div>
                        <div className='SeriousBtn2Area'>
                            <a href="/menu/TSerious">
                                <div className='SeriousBtn3'>
                                    茗品系列
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MTSerious;