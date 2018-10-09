import React from "react";
import Header from "./Header";
import Body from "./Body";
import TicketsBody from "./TestingGround";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AviaSales() {
  return (
    <Router>
      <div>
        <Route path="/" component={Header} />
        <Route path="/" component={Body} exact />
        <Route path="/buyTickets" component={TicketsBody} />
        <Route path="/" component={Footer} />
      </div>
    </Router>
  );
}

export default AviaSales;
