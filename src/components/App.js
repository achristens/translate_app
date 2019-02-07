import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends Component {

  state = {
    language: "english"
  };

  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a Language:
          <i className="flag ca" onClick={() => this.onLanguageChange("english")}/>
          <i className="flag nl" onClick={() => this.onLanguageChange("dutch")}/>
        </div>
        <LanguageContext.Provider value={this.state.language}> //this is how you set the default value for the context object
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
