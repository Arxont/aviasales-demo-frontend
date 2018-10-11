import React from "react";
import Header from "./Header";
import Body from "./Body";
import Error from "./components/Error";
import TicketsBody from "./TestingGround";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

function MainPage() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function AviaSales() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default AviaSales;
