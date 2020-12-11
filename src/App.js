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
import booksReducer from './store/reducer/books';

const rootReducer = combineReducers({
  books: booksReducer
})

const store = createStore(rootReducer);


const App = props => {

  return(
    <Provider store={store}>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/shfleto" exact component={BrowseBooks}/>
          <Route path="/book/:title" exact component={BookPage}/>
          <Route path ="/hyr" exact component={SignIn}/>
          <Route path ="/regjistrohu" exact component={SignUp}/>
        </Switch>
      </Router>
    </Provider>
  )
}
export default App;
