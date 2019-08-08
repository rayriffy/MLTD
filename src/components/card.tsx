import React, { useContext } from "react"
import styled from "styled-components"
import keyframs from "styled-components"

import Img, { FluidObject } from "gatsby-image"

import { Text, Box } from "rebass"
import { keyframes } from "styled-components"

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const CardContainer = styled(Box)`
  display: flex;
  position: relative;
  flex-direction: column;
  background: #99b7dc;
  border-radius: 15px;
  color: #fff;

  overflow: hidden;
  box-shadow: 0.6rem 0.9rem 1rem rgba(0, 0, 0, 0.3);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0.6rem 0.9rem 1.5rem rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
  }
`

const Image = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;

  &:hover {
    animation: ${fade} 0.2s;
  }
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

const TagText = styled(Text)<{ color?: string }>`
  color: ${({ color }) => (color ? color : `#fff`)};
  background: none;
`

interface IProps {
  images: {
    id: string
    fluid: FluidObject
  }[]
  avability?: string
  passive?: string
  rarity: string
  stat?: string
}

const Component: React.SFC<IProps> = ({
  images,
  avability,
  passive,
  rarity,
  stat,
}) => {
  const [isMouseOver, setIsMouseOver] = React.useState(false)
  console.log(images)
  return (
    <>
      <CardContainer
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
        width={[1 / 3]}
      >
        {images.length === 1 || isMouseOver ? (
          <Image fluid={images[0].fluid} alt={`Card Image`} />
        ) : (
          <Image fluid={images[1].fluid} alt={`Card Image`} />
        )}
        <RarityText>{rarity}</RarityText>
        <CardInfo>
          <Text py={2}>{avability}</Text>
          <TagContainer style={{ top: "50%", left: "95%" }}>
            <TagText pr={2}>{passive}</TagText>
          </TagContainer>
          <TagContainer style={{ top: "50%", left: "5%" }}>
            <TagText pl={2}>{stat}</TagText>
          </TagContainer>
        </CardInfo>
      </CardContainer>
    </>
  )
}

export default Component
