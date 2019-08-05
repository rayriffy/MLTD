import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import { Flex, Box, Text } from "rebass"

interface IProps {
  name: string
}

const Container = styled(Box)`
  background-image: linear-gradient(to top, #fff, #e1e1e1);
  width: 100%;

  font-family: sans-serif;
  font-weight: 300;
  font-size: 1.2rem;

  ul {
    list-style: none;
  }
`

const ColorSpan = styled(Box)`
  display: inline-block;
  color: white;
  background: #99b7dc;
  border-radius: 999px;
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
    <Container px={4} pt={3}>
      <Box py={2}>
        <Flex>
          <Box width={3 / 10}>
            <Image fluid={data.img.childImageSharp.fluid}>
              This is going to be replaced by Image.
            </Image>
          </Box>
          <Box width={7 / 10} px={3}>
            <Flex>
              <Box>
                <Text fontSize={26} fontWeight={400}>MIZUKI</Text>
                <Text fontSize={12} fontWeight={300}>MAKABE 真壁瑞希</Text>
              </Box>
              <Box mx={`auto`}></Box>
              <Box>
                <Flex>
                  <Text fontSize={22}>CV: </Text>
                  <Text fontSize={22} fontWeight={700} pl={2}>RIKA ABE</Text>
                </Flex>
              </Box>
              <Box></Box>
            </Flex>
            <Box py={2}>
              <hr />
            </Box>
            <Box>
              <Flex py={2}>
                <Box width={[1, 1 / 2]}>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Image color: </Text>
                    <ColorSpan p={1}><Text fontSize={14}>Blue</Text></ColorSpan>
                    <Text fontSize={14} color={`#99b7dc`} fontWeight={200} px={1}>#99b7dc</Text>
                  </Flex>
                </Box>
              </Flex>
              <Flex py={2} flexWrap={`wrap`}>
                <Box width={[1, 1 / 2]}>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Theater Days Type: </Text>
                    <Text fontSize={14} fontWeight={200} px={2}>Fairy</Text>
                  </Flex>
                </Box>
                <Box width={[1, 1 / 2]}>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Greemas Type: </Text>
                    <Text fontSize={14} fontWeight={200} px={2}>Dance</Text>
                  </Flex>
                </Box>
              </Flex>
              <Flex py={2} flexWrap={`wrap`}>
                <Box width={[1, 1, 1, 1 / 2]}>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Height: </Text>
                    <Text fontSize={14} fontWeight={200} px={2}>160 cm</Text>
                  </Flex>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Weight: </Text>
                    <Text fontSize={14} fontWeight={200} px={2}>43 kg</Text>
                  </Flex>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Blod Type: </Text>
                    <Text fontSize={14} fontWeight={200} px={2}>B</Text>
                  </Flex>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Three Sizes: </Text>
                    <Text fontSize={14} fontWeight={200} px={2}>73 / 54 / 77</Text>
                  </Flex>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Hometown: </Text>
                    <Text fontSize={14} fontWeight={200} px={2}>Kanagawa</Text>
                  </Flex>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Hobby: </Text>
                    <Text fontSize={14} fontWeight={200} px={2}>Magic tricks</Text>
                  </Flex>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Special Skill: </Text>
                    <Text fontSize={14} fontWeight={200} px={2}>Baton twirling</Text>
                  </Flex>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Likes: </Text>
                    <Text fontSize={14} fontWeight={200} px={2}>Crossword puzzles</Text>
                  </Flex>
                </Box>
                <Box width={[1, 1, 1, 1 / 2]}>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Age: </Text>
                    <Text fontSize={14} fontWeight={200} px={2}>17</Text>
                  </Flex>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Birthday: </Text>
                    <Text fontSize={14} fontWeight={200} px={2}>January 27th</Text>
                  </Flex>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Writing Hand: </Text>
                    <Text fontSize={14} fontWeight={200} px={2}>Right</Text>
                  </Flex>
                  <Flex alignItems={`center`}>
                    <Text fontSize={14} fontWeight={300} px={1}>Zodiac Sign: </Text>
                    <Text fontSize={14} fontWeight={200} px={2}>Aquarius</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box py={2}>
        {/* Tabs here */}
      </Box>
    </Container>
  )
}

export default Component
