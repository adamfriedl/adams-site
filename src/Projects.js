import React from 'react'
import { Heading, Panel, PanelHeader, Box, PanelFooter, Text, Flex } from 'rebass'

const Projects = () => {

  return(
    <div>

      <Heading
        my={3}
        children='Projects'
      />
      
      <Flex wrap>
        <Panel 
        w={[1, 1/3]}
        mr={4}
        >
          <PanelHeader
            children='Cafe Roulette'
          />
          <Box p={2}>
            <p>
              An engaging, whimsical way to choose your coffee-break destination in Midtown
            </p>
          </Box>
          <PanelFooter>
            <Text
              is='a'
              href='https://github.com/adamfriedl/caferoulette'
              children='Github'
              mr={1}   
            />

            <Text
              is='a'
              href='https://caferoulette.herokuapp.com'
              children='Demo'            
            />
          </PanelFooter>
        </Panel>

        <Panel w={[1, 1/3]}>
          <PanelHeader
            children='Recipe Ajax'
          />
          <Box p={2}>
            <p>
              A recipe-sharing community
            </p>
          </Box>
          <PanelFooter>
            <Text
              is='a'
              href='https://github.com/adamfriedl/recipe-ajax'
              children='Github'
              mr={1}   
            />

            <Text
              is='a'
              href='https://recipeajax.herokuapp.com'
              children='Demo'            
            />
          </PanelFooter>
        </Panel>
      </Flex>
    </div>
  )
}

export default Projects