import React from 'react'
import { Heading, Text, Link } from 'rebass'

const Intro = () => {

  return(
    <div>
      <Heading
        fontSize={5}
        my={3}
        children="Adam Friedl"
      />
      <Text
        my={3}
        children="Web developer, lawyer, cultural observer."
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
    </div>
  )
}

export default Intro
