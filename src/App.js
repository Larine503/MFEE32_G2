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
            <Route path="/login" component={Login} exact />
            <Route path="/member/creat" component={LoginCreat} exact />
            <Route path="/member/:id" component={MemberBar} exact />
            <Route path="/member/:id/:id" component={MemberBar} exact />
          </Switch></div>
      </BrowserRouter>);
}

export default App;