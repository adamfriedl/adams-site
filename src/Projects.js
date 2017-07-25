import React from 'react'
import { Heading, Panel, PanelHeader, Box, PanelFooter, Text, Flex, Container } from 'rebass'

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
          
          <Heading 
            f={[2, 3]}
            mt={[2, 3]}
            children='Cafe Roulette'
          />

          <Text
            my={[1, 2]}
            children="An engaging, whimsical way to pick your coffee destination in Midtown Manhattan."
          />

          <Flex
            mb={[2, 3]}
          >
            <Text
              is='a'
              href='https://github.com/adamfriedl/caferoulette'
              children='Github'
              mr={2}   
            />

            <Text
              is='a'
              href='https://caferoulette.herokuapp.com'
              children='Demo'            
            />
          </Flex>

          <Heading 
            f={[2, 3]}
            mt={[2, 3]}
            children='Recipe Ajax'
          />

          <Text
            my={[1, 2]}
            children="A recipe-sharing community."
          />

          <Flex
            mb={[2, 3]}
          >
            <Text
              is='a'
              href='https://github.com/adamfriedl/recipe-ajax'
              children='Github'
              mr={2}   
            />

            <Text
              is='a'
              href='https://recipeajax.herokuapp.com'
              children='Demo'            
            />
          </Flex>      
          
          <Heading 
            f={[2, 3]}
            mt={[2, 3]}
            children='Project Three'
          />

          <Text
            my={[1, 2]}
            children="Description for Project Three."
          />

          <Flex
            mb={[2, 3]}
          >
            <Text
              is='a'
              href='#'
              children='Github'
              mr={2}   
            />

            <Text
              is='a'
              href='#'
              children='Demo'            
            />
          </Flex>
          
        </Flex>

      </Flex>
    </div>
  )
}

export default Projects

