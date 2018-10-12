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

function BodyThatCanChange() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/Tickets" component={TicketsBody} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}
function FirstPage() {
  return (
    <div>
      <Header />
      <BodyThatCanChange />
      <Footer />
    </div>
  );
}
function AviaSales() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default AviaSales;
