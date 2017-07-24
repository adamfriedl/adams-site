import React, { Component } from 'react'
import {Provider} from 'react-redux'
import surfer from './assets/img/surfer.jpg';
import './App.css'
import { Container, BackgroundImage } from 'rebass'
import Intro from './Intro'
import Projects from './Projects'

class App extends Component {
  render() {

    
    return (

      <div>
        <Container>

          
          <Intro />
          
          <Projects />

        </Container>
      </div>
    );
  }
}

export default App;
