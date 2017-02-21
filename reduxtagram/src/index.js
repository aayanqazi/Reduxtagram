import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Main from "./Component/Main"
import PhotoGrid from "./Component/PhotoGrid"
import Single from "./Component/Single"
import { Router, Route, IndexRoute, browserHistory } from "react-router"

const router = (<Router history={browserHistory}>
  <Route path="/" component={Main}>
    <IndexRoute component={PhotoGrid} />
    <Route path="/view/:postid" component={Single} />
  </Route>
</Router>)

ReactDOM.render(
  router,
  document.getElementById('root')
);
