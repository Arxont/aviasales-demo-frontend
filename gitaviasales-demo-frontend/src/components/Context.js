import React from "react";

import Body from "../Body";
import TicketsBody from "../TestingGround";
const Context = React.createContext();

class StateManager extends React.Component {
  state = {
    hiddenComponent: true
  };
  toggleComponent = () => {
    this.setState(state => ({ hiddenComponent: !state.hiddenComponent }));
  };

  render() {
    return (
      <Context.Provider
        value={{
          hiddenComponent: !this.state.hiddenComponent && <TicketsBody />,
          ComponentToHide: this.state.hiddenComponent && <Body />,
          toggleHidden: this.toggleComponent.bind(this)
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const MainPage = () => (
  <Context.Consumer>
    {({ ComponentToHide }) => <div>{ComponentToHide && <Body />}</div>}
  </Context.Consumer>
);

const SecondPage = () => (
  <Context.Consumer>
    {({ hiddenComponent }) => <div>{hiddenComponent && <TicketsBody />}</div>}
  </Context.Consumer>
);

export { SecondPage, MainPage, StateManager, Context };
