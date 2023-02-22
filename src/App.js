// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/index.css';
import Home from './components/home.js';
import Login from './components/login.js';
import MemberBar from './components/memberbar.js';
import Story from './story/story.js';
import News from './news/news.js';
import Product from './product/product.js';
import Menu from './menu/menu.js';
import Order from './order/order.js';
import Store from './store/store.js';
import LoginCreat from './components/logincreat.js';
import Contact from './contact/contact.js';
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
//-----


function App() {
  return (
    <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/story" component={Story} exact />
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
            <Route path="/order/fullJo" component={FullJo} exact />
            <Route path="/order/teamJo" component={TeamJo} exact />
            <Route path="/order/friendJo" component={FriendJo} exact />
          </Switch></div>
      </BrowserRouter>);
}

export default App;