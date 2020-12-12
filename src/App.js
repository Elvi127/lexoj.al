import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
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
import Cart from './pages/cart/cart';

const rootReducer = combineReducers({
  books: booksReducer
})

const store = createStore(rootReducer);


const App = props => {

  return(
    <Provider store={store}>
      <Router>
        <Header/>
        <CartIcon/>
        <Switch>
          <Route path="/lexoj.al" exact component={Home}/>
          <Route path="/lexoj.al/shfleto" exact component={BrowseBooks}/>
          <Route path="/lexoj.al/book/:title" exact component={BookPage}/>
          <Route path ="/lexoj.al/hyr" exact component={SignIn}/>
          <Route path ="/lexoj.al/regjistrohu" exact component={SignUp}/>
          <Route path="/lexoj.al/shporte" exact component={Cart}/>
        </Switch>
      </Router>
    </Provider>
  )
}
export default App;
