import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import "./assets/styles/styles.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
