import React, { Component } from 'react'
import './App.css'
import { Container } from 'rebass'
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
