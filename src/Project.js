import React from 'react'
import { Heading, Text, Flex, Link } from 'rebass'

const Project = ({
  title = 'My Title',
  description = 'My description',
  github = '#',
  demo = '#'
}) =>

  <div>

    <Heading 
      f={[2, 3]}
      mt={[2, 3]}
      children={title}
    />

    <Text
      my={[1, 2]}
      children={description}
    />

    <Flex
      mb={[2, 3]}
    >
      <Link
        href={github}
        children='Github'
        mr={2}   
      />

      <Link
        href={demo}
        children='Demo'            
      />
    </Flex>

  </div>

  export default Project