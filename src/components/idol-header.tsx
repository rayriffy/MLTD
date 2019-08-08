import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import { Flex, Box, Text } from "rebass"

interface IProps {}

const Container = styled(Box)`
  font-family: sans-serif;
`

const ColorSpan = styled(Box)`
  display: inline-block;
  color: white;
  background: #99b7dc;
  border-radius: 5px;
`

const Image = styled(Img)`
  width: 100%;
`

const Component: React.SFC<IProps> = () => {
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

      sign: file(relativePath: { eq: "mizuki.sign.default.png" }) {
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
    <Container width={`100%`} px={4} pt={3}>
      <Box py={2}>
        <Flex>
          <Box css={{ position: `relative` }} width={4 / 12}>
            <Image fluid={data.img.childImageSharp.fluid}></Image>
            <Box
              css={{ position: `absolute`, bottom: 0, right: `-4em` }}
              width={[1, 1, 3 / 4, 2 / 3]}
            >
              <Image fluid={data.sign.childImageSharp.fluid}></Image>
            </Box>
          </Box>
          <Box width={8 / 12} px={3}>
            <Flex alignItems={`center`}>
              <Box>
                <Text fontSize={26} fontWeight={400}>
                  MIZUKI
                </Text>
                <Text mt={-1} fontSize={12} fontWeight={300}>
                  MAKABE 真壁瑞希
                </Text>
              </Box>
              <Box mx={`auto`}></Box>
              <Box>
                <Flex>
                  <Text fontSize={22}>CV: </Text>
                  <Text fontSize={22} fontWeight={700} pl={2}>
                    RIKA ABE
                  </Text>
                </Flex>
              </Box>
              <Box mr={4}></Box>
            </Flex>
            <Box py={2}>
              <hr />
            </Box>
            <Box px={3}>
              <Flex py={2}>
                <Box width={[1, 1 / 2]}>
                  <Flex alignItems={`center`}>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={400} px={1}>
                      Image color:{" "}
                    </Text>
                    <ColorSpan px={2} py={1}>
                      <Text fontSize={[14, 16, 16, 18]}>Blue</Text>
                    </ColorSpan>
                    <Text
                      fontSize={[14, 16, 16, 18]}
                      color={`#99b7dc`}
                      fontWeight={400}
                      px={1}
                    >
                      #99b7dc
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Flex py={2} flexWrap={`wrap`}>
                <Box width={[1, 1 / 2]}>
                  <Flex alignItems={`center`}>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={400} px={1}>
                      Theater Days Type:{" "}
                    </Text>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={200} px={2}>
                      Fairy
                    </Text>
                  </Flex>
                </Box>
                <Box width={[1, 1 / 2]}>
                  <Flex alignItems={`center`}>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={400} px={1}>
                      Greemas Type:{" "}
                    </Text>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={200} px={2}>
                      Dance
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Flex py={2} flexWrap={`wrap`}>
                <Box width={[1, 1, 1, 1 / 2]}>
                  <Flex alignItems={`center`} flexWrap={`wrap`} mt={1}>
                    <Text
                      width={125}
                      fontSize={[14, 16, 16, 18]}
                      fontWeight={400}
                      px={1}
                    >
                      Height:{" "}
                    </Text>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={200} px={2}>
                      160 cm
                    </Text>
                  </Flex>
                  <Flex alignItems={`center`} flexWrap={`wrap`} mt={1}>
                    <Text
                      width={125}
                      fontSize={[14, 16, 16, 18]}
                      fontWeight={400}
                      px={1}
                    >
                      Weight:{" "}
                    </Text>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={200} px={2}>
                      43 kg
                    </Text>
                  </Flex>
                  <Flex alignItems={`center`} flexWrap={`wrap`} mt={1}>
                    <Text
                      width={125}
                      fontSize={[14, 16, 16, 18]}
                      fontWeight={400}
                      px={1}
                    >
                      Blood Type:{" "}
                    </Text>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={200} px={2}>
                      B
                    </Text>
                  </Flex>
                  <Flex alignItems={`center`} flexWrap={`wrap`} mt={1}>
                    <Text
                      width={125}
                      fontSize={[14, 16, 16, 18]}
                      fontWeight={400}
                      px={1}
                    >
                      Three Sizes:{" "}
                    </Text>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={200} px={2}>
                      73 / 54 / 77
                    </Text>
                  </Flex>
                  <Flex alignItems={`center`} flexWrap={`wrap`} mt={1}>
                    <Text
                      width={125}
                      fontSize={[14, 16, 16, 18]}
                      fontWeight={400}
                      px={1}
                    >
                      Hometown:{" "}
                    </Text>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={200} px={2}>
                      Kanagawa
                    </Text>
                  </Flex>
                  <Flex alignItems={`center`} flexWrap={`wrap`} mt={1}>
                    <Text
                      width={125}
                      fontSize={[14, 16, 16, 18]}
                      fontWeight={400}
                      px={1}
                    >
                      Hobby:{" "}
                    </Text>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={200} px={2}>
                      Magic tricks
                    </Text>
                  </Flex>
                  <Flex alignItems={`center`} flexWrap={`wrap`} mt={1}>
                    <Text
                      width={125}
                      fontSize={[14, 16, 16, 18]}
                      fontWeight={400}
                      px={1}
                    >
                      Special Skill:{" "}
                    </Text>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={200} px={2}>
                      Baton twirling
                    </Text>
                  </Flex>
                  <Flex alignItems={`center`} flexWrap={`wrap`} mt={1}>
                    <Text
                      width={125}
                      fontSize={[14, 16, 16, 18]}
                      fontWeight={400}
                      px={1}
                    >
                      Likes:{" "}
                    </Text>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={200} px={2}>
                      Crossword puzzles
                    </Text>
                  </Flex>
                </Box>
                <Box width={[1, 1, 1, 1 / 2]}>
                  <Flex alignItems={`center`} flexWrap={`wrap`} mt={1}>
                    <Text
                      width={125}
                      fontSize={[14, 16, 16, 18]}
                      fontWeight={400}
                      px={1}
                    >
                      Age:{" "}
                    </Text>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={200} px={2}>
                      17
                    </Text>
                  </Flex>
                  <Flex alignItems={`center`} flexWrap={`wrap`} mt={1}>
                    <Text
                      width={125}
                      fontSize={[14, 16, 16, 18]}
                      fontWeight={400}
                      px={1}
                    >
                      Birthday:{" "}
                    </Text>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={200} px={2}>
                      January 27th
                    </Text>
                  </Flex>
                  <Flex alignItems={`center`} flexWrap={`wrap`} mt={1}>
                    <Text
                      width={125}
                      fontSize={[14, 16, 16, 18]}
                      fontWeight={400}
                      px={1}
                    >
                      Writing Hand:{" "}
                    </Text>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={200} px={2}>
                      Right
                    </Text>
                  </Flex>
                  <Flex alignItems={`center`} flexWrap={`wrap`} mt={1}>
                    <Text
                      width={125}
                      fontSize={[14, 16, 16, 18]}
                      fontWeight={400}
                      px={1}
                    >
                      Zodiac Sign:{" "}
                    </Text>
                    <Text fontSize={[14, 16, 16, 18]} fontWeight={200} px={2}>
                      Aquarius
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box py={2}>{/* Tabs here */}</Box>
    </Container>
  )
}

export default Component
