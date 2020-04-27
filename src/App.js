import React, { Component } from 'react'

import Header from './components/Header';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import About from './About';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { Provider } from "react-redux";
import store from './store';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Router>
            <Route path="/about">
              <About />
            </Route>
            <Route exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddPost />
                  <hr />
                  <Posts/>
                </React.Fragment>
              )}
            ></Route>
          </Router>
        </div>
      </Provider>
    );
  }
}
