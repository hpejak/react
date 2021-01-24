import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
      <React.StrictMode>
              <BrowserRouter>
                  <Switch>
                      <Route exact path="/">
                          <App />
                      </Route>
                      <Route exact path="/home">
                          <App />
                      </Route>
                      <Route exact path="/first">
                          <App />
                      </Route>
                      <Route exact path="/second">
                          <App />
                      </Route>
                  </Switch>
              </BrowserRouter>
      </React.StrictMode>,
  document.getElementById('root')
);