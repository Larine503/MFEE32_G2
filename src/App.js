// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/index.css';
import Home from './components/home.js';
import Login from './components/login.js';
import MemberBar from './components/memberbar.js';
import Story from './story/story.js';
import Report from './report/report.js';
import News from './news/news.js';
import Product from './product/product.js';
import Menu from './menu/menu.js';
import Order from './order/order.js';
import Store from './store/store.js';
import LoginCreat from './components/logincreat.js';
import Contact from './contact/contact.js';
import OderdirnkID from './components/orderlist_billAll.js';
//---郁的---
import DrinkInfo from './order/drinkInfo.js';
import GoOrder from './order/goOrder.js';
import DrinkList from './order/drinkList.js';
import AddDrink from './order/AddDrink.js';
import BillList from './order/billList.js';
import BillAll from './order/billAll.js';
import FullJo from './order/fullJo.js'
import TeamJo from './order/teamJo.js'
import FriendJo from './order/friendJo.js'
//--渼涵---
import ProductStep1 from './product/product_cart.js'
import ProductStep2 from './product/product_info.js'


function App() {
  return (
    <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/story" component={Story} exact />
            <Route path="/report" component={Report} exact />
            <Route path="/news" component={News} exact />
            <Route path="/product" component={Product} exact />
            <Route path="/menu" component={Menu} exact />
            <Route path="/order" component={Order} exact />
            <Route path="/store" component={Store} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/member/creat" component={LoginCreat} exact />
            <Route path="/member/:id" component={MemberBar} exact />
            <Route path="/member/:id/:id" component={MemberBar} exact />
            <Route path="/order" component={Order} exact />
            <Route path="/order/drinkInfo" component={DrinkInfo} exact />
            <Route path="/order/goOrder" component={GoOrder} exact />
            <Route path="/order/drinkList" component={DrinkList} exact />
            <Route path="/order/billList" component={BillList} exact />
            <Route path="/order/AddDrink" component={AddDrink} exact />
            <Route path="/order/billAll" component={BillAll} exact />
            <Route path="/order/billAll/:id" component={OderdirnkID} exact />
            <Route path="/order/fullJo" component={FullJo} exact />
            <Route path="/order/teamJo" component={TeamJo} exact />
            <Route path="/order/friendJo" component={FriendJo} exact />
            <Route path="/product/航海王" component={Product}/>
            <Route path="/product/哥吉拉" component={Product}/>
            <Route path="/product/黃阿媽的後宮生活" component={Product}/>
            <Route path="/product/step1" component={ProductStep1}/>
            <Route path="/product/step2" component={ProductStep2}/>
          </Switch></div>
      </BrowserRouter>);
}

export default App;