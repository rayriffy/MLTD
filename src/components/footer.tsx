import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  background: #222;
`
const FooterText = styled.div`
  color: #fff;

  a:link,
  a:visited {
    text-decoration: none;
    color: #fff;
  }
`

const Component: React.SFC = props => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()}
        <a href="https://github.com/TuwanonKonjaiboon"> Tuwanon Konjaiboon</a>
      </FooterText>
    </FooterContainer>
  )
}

export default Component
