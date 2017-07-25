import React from 'react'
import { Heading, Panel, PanelHeader, Box, PanelFooter, Text, Flex, Container } from 'rebass'
import Project from './Project'

const Projects = () => {

  return(
    <div>

      <Flex 
        wrap 
        style={{alignItems: 'flex'}}
        my={[4, 5]}
      >

        <Heading
          f={[5, 6]}
          w={[
            1, 
            1/2
          ]}
          children="Projects"
        />

        <Flex column
          w={[
            1, 
            1/2
          ]}
        >
          
          <Project
            title={'Cafe Roulette'}
            description={'An engaging, whimsical way to pick your coffee destination in Midtown Manhattan.'}
            github={'https://github.com/adamfriedl/caferoulette'}
            demo={'https://caferoulette.herokuapp.com'}
          />

          <Project
            title={'The Recipe Box'}
            description={'A recipe-sharing community.'}
            github={'https://github.com/adamfriedl/recipe-ajax'}
            demo={'https://recipeajax.herokuapp.com'}
          />    
          
          <Project 
            title={'Project Three'}
            description='Description for Project Three'
          />
          
        </Flex>

      </Flex>
    </div>
  )
}

export default Projects

