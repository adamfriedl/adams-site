import React from 'react'
import { Heading, Text, Link, Flex, Box } from 'rebass'

const Intro = () => {

  return(
    <div>
      <Heading
        fontSize={[4, 5]}
        mt={[4, 5]}
        children="Adam Friedl"
      />

      <Link
        mr={3}
        children="Github"
        href="https://github.com/adamfriedl"
      />
      <Link
        mr={3}
        children="LinkedIn"
        href="https://linkedin.com/in/adamfriedl"
      />
      <Link
        mr={3}
        children="Blog"
        href="http://adamfriedl.com/blog"
      />

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
          children="About"
        />
        <Text
          w={[1, 1/2]}
          mt={3}
          children="Web developer, lawyer, and occasional drinker of smoothies. Web developer, lawyer, and occasional drinker of smoothies. Web developer, lawyer, and occasional drinker of smoothies. Web developer, lawyer, and occasional drinker of smoothies.Web developer, lawyer, and occasional drinker of smoothies.Web developer, lawyer, and occasional drinker of smoothies.Web developer, lawyer, and occasional drinker of smoothies.Web developer, lawyer, and occasional drinker of smoothies."
        /> 
      </Flex>
            
    </div>
  )
}

export default Intro
