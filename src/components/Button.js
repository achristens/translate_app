import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  static contextType = LanguageContext; //how to hook up context object to a class - you need this exact variable name, and then static call creates a context property to the class

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className="ui button primary">{text}</button>
  }
}

export default Button;
