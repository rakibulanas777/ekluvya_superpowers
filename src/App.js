import "./App.css";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Home/Navbar/Navbar";
import Carousoul from "./Component/main/Carousoul";
import Main from "./Component/main/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page from "./Component/Pages/Page";
import Test from "./Component/Test";
import EventTimer from "./Component/Pages/EventTimer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            <Main />
            <Carousoul />
          </Route>
          <Route exact path="/page/:id">
            <Navbar />
            <Page />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
