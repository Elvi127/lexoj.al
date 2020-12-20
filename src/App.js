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
import Cart from './pages/cart/cart';

const rootReducer = combineReducers({
  books: booksReducer,
  cartItems: cartReducer
})

const store = createStore(rootReducer);


const App = props => {

  return(
    <Provider store={store}>
      <Router>
        <Header/>
        <CartIcon/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/lexoj.al" exact component={Home}/>
          <Route path="/shfleto" exact component={BrowseBooks}/>
          <Route path="/book/:title" exact component={BookPage}/>
          <Route path ="/hyr" exact component={SignIn}/>
          <Route path ="/regjistrohu" exact component={SignUp}/>
          <Route path="/shporte" exact component={Cart}/>
        </Switch>
      </Router>
    </Provider>
  )
}
export default App;
