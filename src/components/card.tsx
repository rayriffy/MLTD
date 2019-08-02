import React from "react"
import styled from "styled-components"

import Img from "../components/image"
import src from "../images/mizuki.card.land.png" // template picture

import { Text, Box } from "rebass"

const CardContainer = styled.div`
  position: relative;
  background: #333;
  border-radius: 15px;
  color: #fff;

  width: 500px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  border-radius: 15px 15px 0 0;
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

const TagText = styled(Text)`
  color: #fff;
  background: none;
`

const Component: React.SFC = props => {
  return (
    <>
      <CardContainer>
        <Image src={src} />
        <CardInfo>
          <Text py={2}>Limited</Text>
          <TagContainer style={{ top: "50%", left: "95%" }}>
            <TagText>C+</TagText>
          </TagContainer>
          <TagContainer style={{ top: "50%", left: "5%" }}>
            <TagText>Vi</TagText>
          </TagContainer>
        </CardInfo>
      </CardContainer>
    </>
  )
}

export default Component
