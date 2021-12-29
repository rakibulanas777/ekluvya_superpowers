import React, { useEffect } from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import Carousoul from "./Component/main/Carousoul";
import Main from "./Component/main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./Component/Pages/Page";
import Navbar1 from "./Component/Home/Navbar/Navbar1";
import Navbar from "./Component/Home/Navbar/Navbar";
import Icon from "./Component/Icon";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home></Home>
            <Main />
            <Carousoul />
            <Icon />
          </Route>
          <Route exact path="/home">
            <Navbar />
            <Home></Home>
            <Main />
            <Carousoul />
            <Icon />
          </Route>
          <Route exact path="/page/:id">
            <Navbar1 />
            <Page />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
