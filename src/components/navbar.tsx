import React, { ReactNode } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Flex, Box, Text } from "rebass"

const NavContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: #333;
  color: #fff;
  padding: 0.8rem 2rem;
`

const NavLink = styled(Link)`
  color: #fff;
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
            fontWeight="800"
            css={{
              "& span": {
                fontSize: "1.2rem",
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
              <NavText>{name}</NavText>
            </NavLink>
          )
        })}
      </Flex>
    </NavContainer>
  )
}

export default Navbar
