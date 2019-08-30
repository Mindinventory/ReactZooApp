import React from "react";
import { intro, list } from "./data";

const Context = React.createContext();

class Provider extends React.Component {
  state = {
    intro,
    list,
    itemForDetailPage: {},
    cords: {},
    windowScrollPosition: 0
  };
  getSelectedItem = id => {
    return this.state.list.find(item => item.id === id);
  };
  handleDetailPage = id => {
    const selectedItem = this.getSelectedItem(id);
    this.setState({
      itemForDetailPage: selectedItem
    });
  };
  getCords = id => {
    this.setState({
      cords: document.getElementById(id).getBoundingClientRect(),
      windowScrollPosition: window.scrollY
    });
  };
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          handleDetailPage: this.handleDetailPage,
          getCords: this.getCords
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Context, Provider, Consumer };
