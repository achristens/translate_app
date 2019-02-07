import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class Button extends Component {
  renderButton(colour) {
    return (
      <button className={`ui button ${colour}`}>
        <LanguageContext.Consumer>
          {(value) => value === "english" ? "Submit" : "Voorleggen" }
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColourContext.Consumer>
      {(colour) => this.renderButton(colour)}
      </ColourContext.Consumer>
    );
  }
}

export default Button;
