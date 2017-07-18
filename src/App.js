import React, { Component } from 'react'
import {Provider} from 'react-redux'
// import logo from './logo.svg';
// import './App.css'
import { Container, BackgroundImage } from 'rebass'
import Intro from './Intro'

class App extends Component {
  render() {

    
    return (
      <Provider>
        <Container
        mx={3}
        >
          <Intro />
          <p>Here is a picture of Iceland:</p>
          <BackgroundImage
            width={1/2}
            style={{float: 'left'}}
            src='https://source.unsplash.com/_7xYZOvN5TQ'
          />
          <p>
            I've never been to Iceland, but they say everyone simply must go.
          </p>
          <h2>
            Hello, World!
          </h2>
        </Container>
      </Provider>
    );
  }
}

export default App;
