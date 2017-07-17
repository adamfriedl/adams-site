import React, { Component } from 'react'
import {Provider} from 'react-redux'
import logo from './logo.svg';
import './App.css'
import Page from './containers/Page'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <Page />
        </div>
      </Provider>
    );
  }
}

export default App;
