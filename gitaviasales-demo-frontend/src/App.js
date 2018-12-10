import React from "react";
import "normalize.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from "./Header";
import Body from "./Body";
import Error from "./components/Error";
import TicketsBody from "./TestingGround";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  body {
    font-family:roboto;

  }
`;

function FirstPage() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function AviaSales() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/Tickets" component={TicketsBody} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default AviaSales;
