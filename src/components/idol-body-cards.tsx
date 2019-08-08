import React from "react"
import styled from "styled-components"
import head from "lodash/head"

import IdolContext from "../providers/idol-context"

import Card from "./card"
import { Flex, Box, Text } from "rebass"

const Container = styled(Flex)`
  width: 100%;
`

const Component: React.SFC = props => {
  const { profile, imgs } = React.useContext(IdolContext)
  const { firstName, cards } = profile.node

  return (
    <Container bg={`#ddd`} flexDirection={`column`}>
      {["SSR", "SR", "R", "N"].map(rare => (
        <Flex key={rare} alignItems={`center`} my={2}>
          <Text
            px={3}
            py={2}
            bg={`#fff`}
            width={[150]}
            textAlign={`center`}
            fontSize={26}
            fontWeight={700}
          >
            {rare}
          </Text>
          <Flex width={[4 / 5]} flexWrap={`wrap`}>
            {cards
              .filter(card => card.rarity === rare)
              .map((card, index) => {
                const patt = new RegExp(
                  `${firstName.toLowerCase()}.card.${card.name || ""}(.t)?.${
                    card.rarity === "SSR" || card.avability === "Event"
                      ? "land"
                      : "port"
                  }(.png)$`
                )
                console.log(patt)
                return (
                  <React.Fragment key={index}>
                    <Card
                      images={imgs.filter(img =>
                        patt.test(img.fluid["originalName"])
                      )}
                      avability={card.avability}
                      passive={card.passive}
                      rarity={card.rarity}
                      stat={card.stat}
                    />
                    <Box mr={2} />
                  </React.Fragment>
                )
              })}
          </Flex>
        </Flex>
      ))}
    </Container>
  )
}

export default Component
