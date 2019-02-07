import React, { Component } from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';
import LanguageSelector from './LanguageSelector';

class App extends Component {
  render() {
    return (
      <div className="ui container">
      <LanguageStore>
        <LanguageSelector />
        <ColourContext.Provider value="red" >
          <UserCreate />
        </ColourContext.Provider>
      </LanguageStore>
      </div>
    );
  }
}
//this is how you set the default value for the context object:
//<LanguageContext.Provider value={this.state.language}>
// this wrapped LanguageContext object is what creates the 'pipe' of information down to child components

export default App;
