import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { Flex, Text } from "rebass"

const HeroContainer = styled(Flex)`
  justify-content: center;
  align-items: flex-end;

  width: 100%;
  height: 60vh;
  background-image: linear-gradient(
      to top,
      rgba(255, 255, 255),
      rgba(170, 170, 170, 0.5)
    ),
    url(${props => props.bg});
  background-size: cover;
  background-position: 50% 0%;
`

const Component: React.SFC = () => {
  const data = useStaticQuery(
    graphql`
      {
        allImageSharp(
          filter: { id: { eq: "cc77c83c-2083-5db0-bb85-9aaf198c7da2" } }
        ) {
          nodes {
            original {
              src
            }
          }
        }
      }
    `
  )
  return (
    <>
      <HeroContainer bg={data.allImageSharp.nodes[0].original.src}>
        <Flex flexDirection="column" alignItems="center" pb="3rem">
          <Text fontSize="2.5rem" fontWeight="200">
            Welcome to the
          </Text>
          <Text fontSize="4rem" fontWeight="800">
            Million Live! Theater Days
          </Text>
          <Text fontSize="3rem" fontWeight="200">
            English Database!
          </Text>
        </Flex>
      </HeroContainer>
    </>
  )
}

export default Component
