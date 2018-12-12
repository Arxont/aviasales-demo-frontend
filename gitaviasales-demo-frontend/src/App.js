import React from "react";
import "normalize.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from "./Header";
import { StateManager, SecondPage, MainPage } from "./components/Context";
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
    <StateManager>
      <GlobalStyle />
      <Header />
      <SecondPage />
      <MainPage />
      <Footer />
    </StateManager>
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
