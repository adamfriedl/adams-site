import React from 'react'
import { Heading, Text, Link, Flex } from 'rebass'

const Intro = () => {

  return(
    <div>
      <Heading
        fontSize={[4, 5]}
        mt={[4, 5]}
        children="Adam Friedl"
      />

      <Link
        children="ajfriedl@gmail.com"
        href="mailto:ajfriedl@gmail.com"
        my={2}
      />

      <br />

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
        >
        I've spent the last ten years as a lawyer and consultant, developing solutions to some of the many problems with our justice system. Along the way, I saw tech's power to solve these – and many other! – problems and I learned to code. <br /><br />        

        </Text> 

      </Flex>
            
    </div>
  )
}

export default Intro
