import React, { Component } from "react";
import PropTypes from "prop-types";
class Typing extends Component {
  state = {
    currentIndex: 0,
    current: "",
    typing: false,
    item: "",
    interval: 250,
  };
  time = 250;
  interval;
  componentDidMount() {
    this.time = 250;
    this.interval = setInterval(() => this.typeFunc(), this.time);
  }
  componentDidUpdate() {
    clearInterval(this.interval);
    this.interval = setInterval(() => this.typeFunc(), this.time);
  }
  typeFunc() {
    this.setState((state) => {
      if (state.current.length === 0 && !state.typing) {
        if (state.currentIndex + 1 < this.props.items.length) {
          return {
            ...state,
            currentIndex: state.currentIndex + 1,
            item: this.props.items[state.currentIndex + 1],
            typing: true,
          };
        } else {
          return {
            ...state,
            currentIndex: 0,
            item: this.props.items[0],
            typing: true,
          };
        }
      }
      if (state.typing) {
        state = {
          ...state,
          current: state.item.slice(0, state.current.length + 1),
          typing: state.current.length + 1 < state.item.length,
        };
      } else {
        state = {
          ...state,
          current: state.current.slice(0, state.current.length - 1),
        };
      }
      this.time = state.current.length === state.item.length ? 2000 : 180;
      return state;
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <span>{this.state.current}</span>;
  }
}

Typing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default Typing;
