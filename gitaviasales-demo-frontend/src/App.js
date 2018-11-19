import React from "react";
import "normalize.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Error from "./components/Error";
import TicketsBody from "./TestingGround";
import Footer from "./Footer";

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
