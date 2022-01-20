import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
const Home = lazy(() => import("./Component/Home/Home"));
const Carousoul = lazy(() => import("./Component/main/Carousoul"));
const Main = lazy(() => import("./Component/main/Main"));
const Page = lazy(() => import("./Component/Pages/Page"));
const Navbar1 = lazy(() => import("./Component/Home/Navbar/Navbar1"));
const Navbar = lazy(() => import("./Component/Home/Navbar/Navbar"));
const Icon = lazy(() => import("./Component/Icon"));
const PrivacyPolicy = lazy(() => import("./Component/Pages/PrivacyPolicy"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ... </div>}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Home />
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
            <Route exact path="/privacy-policy.html">
              <PrivacyPolicy />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
