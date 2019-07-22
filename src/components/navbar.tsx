import React, { ReactNode } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Flex, Box, Text } from "rebass"

const NavContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: rgb(237, 236, 238);
  padding: 0.8rem 2rem;
`

const NavLink = styled(Link)`
  color: rgb(170, 170, 170);
  text-decoration: none;
  padding: 0 0.5rem;
`

const NavText = styled(Text)``

interface IProps {
  children?: ReactNode
  tabs: {
    name: string
    href: string
  }[]
}

const Navbar: React.SFC<IProps> = props => {
  const { tabs } = props

  return (
    <NavContainer>
      <Flex>
        <NavLink to="/">
          <NavText
            fontSize="2rem"
            fontWeight="900"
            css={{
              "& span": {
                fontSize: "1.3rem",
                fontWeight: "800",
              },
            }}
          >
            MTDL <span>English Database</span>
          </NavText>
        </NavLink>
      </Flex>
      <Flex ml="auto">
        {tabs.map(tab => {
          const { href, name } = tab
          return (
            <NavLink to={href} key={name}>
              <NavText fontSize="1.3rem">{name}</NavText>
            </NavLink>
          )
        })}
      </Flex>
    </NavContainer>
  )
}

export default Navbar
