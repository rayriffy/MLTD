import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import { Flex, Box, Text } from "rebass"

interface IProps {
  name: string
}

const Container = styled(Flex)`
  background-image: linear-gradient(to top, #fff, #e1e1e1);
  display: flex;
  font-family: sans-serif;
  font-weight: 300;
  font-size: 1.2rem;

  ul {
    list-style: none;
  }
`

const ColorSpan = styled.span`
  padding: 3px 5px;
  background: #99b7dc;
  border-radius: 5px;
`

const IdolInfoContainer = styled(Flex)`
  flex-basis: 60%;

  br {
    width: 100%;
  }
`

const Image = styled(Img)`
  width: 100%;
`

const Component: React.SFC<IProps> = ({ name }) => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "mizuki.char.default.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
    }
  `)

  return (
    <Container width="100%" mb="4rem">
      <Box width="30%">
        <Image fluid={data.img.childImageSharp.fluid}>
          This is going to be replaced by Image.
        </Image>
      </Box>
      <IdolInfoContainer m="auto" ml={-3} flexDirection="column" alignItems="strech">
        <Flex alignItems="center">
          <Text fontSize={5} fontWeight="bold">
            MIZUKI
          </Text>
          <Text ml="auto" mr={4} fontSize={3}>
            CV: <b>RIKA ABE</b>
          </Text>
        </Flex>
        <br />
        <Flex>
          <Text>
            Image Color: <ColorSpan>blue</ColorSpan> #99b7dc
          </Text>
        </Flex>
        <Flex mt={3}>
          <Text>Theater Days Type: Fairy</Text>
          <Text ml="5rem">Greenmas Type: Dance</Text>
        </Flex>
        <Flex mt={3}>
          <ul>
            <li>Height: 160 cm</li>
            <li>Weight: 63 kg</li>
            <li>Blood Type: B</li>
            <li>Three Sizes: 73 / 54 / 77</li>
            <li>Hometown: Kanagawa</li>
            <li>Hobby: Magic tricks</li>
            <li>Special Skill: Baton twirling</li>
            <li>Likes: Crossword puzzles</li>
          </ul>
          <ul style={{ marginLeft: "4rem" }}>
            <li>Age: 17</li>
            <li>Birth Day: January 27th</li>
            <li>Writting Hand: Right</li>
          </ul>
        </Flex>
      </IdolInfoContainer>
    </Container>
  )
}

export default Component
