import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import Home from './pages/home/home';
import BrowseBooks from './pages/browseBooks/browseBooks';
import BookPage from './pages/bookPage/bookPage';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/signup/signup';
import Header from './components/header/header';
import CartIcon from './components/cartIcon/cartIcon';
import booksReducer from './store/reducer/books';
import cartReducer from './store/reducer/cart';
import notificationReducer from './store/reducer/notification';
import userReducer from './store/reducer/user';
import Cart from './pages/cart/cart';
import Profile from './pages/profile/profile';
import Footer from './components/footer/footer';
import Notification from './components/notification/notification';
import ContactUs from './pages/contactUs/contactUs';

const rootReducer = combineReducers({
  books: booksReducer,
  cartItems: cartReducer,
  notification: notificationReducer,
  user: userReducer,
})

const store = createStore(rootReducer);


const App = props => {

  return(
    <Provider store={store}>
      <Router>
        <Header/>
        <CartIcon/>
        <Notification />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/lexoj.al" exact component={Home}/>
          <Route path="/shfleto" exact component={BrowseBooks}/>
          <Route path="/book/:id" exact component={BookPage}/>
          <Route path ="/hyr" exact component={SignIn}/>
          <Route path ="/regjistrohu" exact component={SignUp}/>
          <Route path="/shporte" exact component={Cart}/>
          <Route path="/llogaria" exact component={Profile}/>
          <Route path="/kontakt" exact component={ContactUs}/>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  )
}
export default App;
