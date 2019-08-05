import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import IdolHeader from "../components/idol-header"
import Card from "../components/card"
import { Flex } from "rebass"

const Container = styled(Flex)`
  width: 100%;
`

interface ICard {
  name?: string
  avability: string
  rarity: string
  stat: string
  passive: string
}

interface IProps {
  pageContext: {
    idolInfo?: {
      id: string
      name: string
      cv: string
      imageColor: string
      tdType: string
      gmType: string
      height: string
      weight: string
      bloodType: string
      threeSizes: number[]
      hometown: string
      hobby: string
      specialSkill: string
      likes: string
      age: number
      bd: string
      writingHand: string
      zodiacSign: string
      cards: ICard[]
    }
  }
}

const cardsRender = (name, cards) => {
  return cards.map((card: ICard, index: number) => {
    const { avability, passive, rarity, stat } = card
    return (
      <Card
        key={index}
        idolName={name}
        avability={avability}
        passive={passive}
        rarity={rarity}
        stat={stat}
      />
    )
  })
}

const Page: React.SFC<IProps> = ({ pageContext }) => {
  const { name, cards } = pageContext.idolInfo
  return (
    <>
      <Layout>
        <Container>
          <IdolHeader name={name}></IdolHeader>
          {/* <Flex>{cardsRender(name, cards)}</Flex> */}
        </Container>
      </Layout>
    </>
  )
}

export default Page
