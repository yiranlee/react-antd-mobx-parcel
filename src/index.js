import React from "react";
import ReactDOM from "react-dom";
import {  Router, Route, hashHistory } from 'react-router';
import {HashRouter} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'mobx-react';
import * as stores from './stores';
import App from "./pages/App";
import Home from "./pages/Home";

const history = createBrowserHistory();
console.log(stores)
class Main extends React.Component {
  render() {
    return <div>
      <Provider {...stores}>
        <Router history={history}>
          <div>
            <Route path="/app" component={App}/>
            <Route path="/home" component={Home}/>
          </div>
        </Router>
      </Provider>
  </div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<Main />, mountNode);
