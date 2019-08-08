import React, { useState } from "react"
import styled from "styled-components"

import { Flex, Box, Text } from "rebass"

import IdolBodyCards from "./idol-body-cards"

const Container = styled(Box)``
const NavItem = styled(Box)`
  background: #bbb;
  padding: 10px 0;
  width: 9rem;
  border-radius: 25px 25px 0 0;

  cursor: pointer;

  &[class^="active"] {
    background: #ddd !important;
    color: #444 !important;
  }
`

const Component: React.SFC = props => {
  const [activeItem, setActiveItem] = useState("cards")
  return (
    <Container width={`100%`} mt={4} px={3}>
      <Flex>
        <NavItem
          className={activeItem === `cards` ? `active` : ""}
          onClick={() => setActiveItem("cards")}
          mr={2}
        >
          <Text fontSize={20} fontWeight={600} textAlign={`center`}>
            CARDS
          </Text>
        </NavItem>
        <NavItem
          className={activeItem === `songs` ? `active` : ""}
          onClick={() => setActiveItem("songs")}
          mr={2}
        >
          <Text fontSize={20} fontWeight={600} textAlign={`center`}>
            SONG
          </Text>
        </NavItem>
        <NavItem
          className={activeItem === `costumes` ? `active` : ""}
          onClick={() => setActiveItem("costumes")}
          mr={2}
        >
          <Text fontSize={20} fontWeight={600} textAlign={`center`}>
            COSTUMES
          </Text>
        </NavItem>
        <NavItem
          className={activeItem === `voice` ? `active` : ""}
          onClick={() => setActiveItem("voice")}
          mr={2}
        >
          <Text fontSize={20} fontWeight={600} textAlign={`center`}>
            VOICE
          </Text>
        </NavItem>
      </Flex>
      {activeItem === "cards" && <IdolBodyCards />}
    </Container>
  )
}

export default Component
