import React, { Component } from 'react'
import './App.css'
import { Container } from 'rebass'
import Intro from './Intro'
import Projects from './Projects'
import Footer from './Footer'

class App extends Component {
  render() {

    
    return (

      <div>
        <Container>
          
          <Intro />
          
          <Projects />

          <Footer />

        </Container>
      </div>
    );
  }
}

export default App;
