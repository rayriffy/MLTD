import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import _ from "lodash"

import Img from "gatsby-image"

import { Text, Box } from "rebass"

interface TextProps {
  color?: string
}

const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background: #99b7dc;
  border-radius: 15px;
  color: #fff;

  min-width: 25rem;
  overflow: hidden;
  box-shadow: 0.5rem 0.7rem 3rem rgba(0, 0, 0, 0.3);
`

const Image = styled(Img)`
  width: 100%;
  border-radius: 15px 15px 0 0;
`
const RarityText = styled(Text)`
  position: absolute;
  font-size: 1.8rem;
  font-weight: 900;
  top: 3%;
  left: 3%;

  color: #fff;
  letter-spacing: -0.09em;
  -webkit-text-stroke: 2.5px #333;
`

const CardInfo = styled.div`
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 15px 15px;
`
const TagContainer = styled(Box)`
  position: absolute;
  background: orange;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  transform: translate(-50%, -50%);

  font-size: 1.5rem;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
`

const TagText = styled(Text)<TextProps>`
  color: ${({ color }) => (color ? color : `#fff`)};
  background: none;
`

interface IProps {
  idolName: string
  name?: string
  avability: string
  passive: string
  rarity: string
  stat: string
}

const Component: React.SFC<IProps> = ({
  idolName,
  avability,
  passive,
  rarity,
  stat,
}) => {
  const data = useStaticQuery(graphql`
    query {
      img: file(
        relativePath: { eq: "mizuki.card.みんなへ愛をこめて.land.png" }
      ) {
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
    <>
      <CardContainer>
        <Image fluid={data.img.childImageSharp.fluid} />
        <RarityText>{rarity}</RarityText>
        <CardInfo>
          <Text py={2}>{avability}</Text>
          <TagContainer style={{ top: "50%", left: "95%" }}>
            <TagText pr={2}>{stat}</TagText>
          </TagContainer>
          <TagContainer style={{ top: "50%", left: "5%" }}>
            <TagText pl={2}>{passive}</TagText>
          </TagContainer>
        </CardInfo>
      </CardContainer>
    </>
  )
}

export default Component
