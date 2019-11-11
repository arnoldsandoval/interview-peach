import React, { Component } from "react";
import ReactDOM from "react-dom";

const KEYCODES = {
  tab: 9,
  esc: 27
};

class FocusTrap extends Component {
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);

    if (node instanceof HTMLElement) {
      this.elements = node.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
      );

      node.addEventListener("keydown", this.handleKeydown);
    }
  }

  componentDidUpdate() {
    const { isTrapped } = this.props;
    if (isTrapped) {
      this.elements[0].focus();
    }
  }

  handleKeydown = event => {
    const { tab } = KEYCODES;
    const { handleKeydown } = this.props;
    const elements = this.elements;
    const activeElement = document.activeElement;
    const firstFocusable = elements[0];
    const lastFocusable = elements[elements.length - 1];
    const isTabPressed = event.key === "Tab" || event.keyCode === tab;
    const { isTrapped } = this.props;

    if (!isTabPressed) {
      return;
    }

    if (isTrapped) {
      if (typeof handleKeydown === "function") {
        handleKeydown(event);
      }

      if (event.shiftKey) {
        /* shift + tab */
        if (activeElement === firstFocusable) {
          lastFocusable.focus();
          event.preventDefault();
        }
      } else if (activeElement === lastFocusable) {
        /* tab */
        firstFocusable.focus();
        event.preventDefault();
      }
    }
  };

  render() {
    const { children, isTrapped, handleKeydown, ...rest } = this.props;

    return <div {...rest}>{children}</div>;
  }
}

export default FocusTrap;
