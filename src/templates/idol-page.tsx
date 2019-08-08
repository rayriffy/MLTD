import React, { createContext } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import IdolContext from "../providers/idol-context"

import Layout from "../components/layout"
import IdolHeader from "../components/idol-header"
import IdolBody from "../components/idol-body"
import { Flex } from "rebass"

const Container = styled(Flex)`
  width: 100%;
  flex-direction: column;
`

interface ICard {
  name: string // Name of Card
  avability: string
  passive: string
  rarity: string
  stat: string
}

interface IIdol {
  node: {
    id: string
    firstName: string
    lastName: string
    tdType: string
    gmType: string
    height: string
    weight: string
    hobby: string
    hometown: string
    likes: string
    specialSkill: string
    threeSizes: number[]
    writingHand: string
    zodiacSign: string
    cv: string
    color: string
    bd: string
    age: string
    bloodType: string
    cards: ICard[]
  }
}

interface IProps {
  pageContext: {
    idol: IIdol
  }
  data: {
    allImageSharp: {
      edges: {
        node: {
          id: string
          fluid: FluidObject
        }
      }[]
    }
  }
}

const Page: React.SFC<IProps> = props => {
  const profile: IIdol = props.pageContext.idol
  const imgs: {
    id: string
    fluid: FluidObject
  }[] = props.data.allImageSharp.edges.map(edge => edge.node)
  return (
    <>
      <Layout>
        <IdolContext.Provider
          value={{
            profile,
            imgs,
          }}
        >
          <Container>
            <IdolHeader />
            <IdolBody />
          </Container>
        </IdolContext.Provider>
      </Layout>
    </>
  )
}

export default Page

export const pageQuery = graphql`
  query IdolCardImagesQuery($reg: String!) {
    allImageSharp(filter: { fluid: { originalName: { regex: $reg } } }) {
      edges {
        node {
          id
          fluid(quality: 80, maxWidth: 1000) {
            originalName
            originalImg
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
  }
`
