import React, { ReactNode } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Box, Text } from "rebass"

const NavContainer = styled.div`
  display: flex;
  align-items: center;

  background: #f4f4f4;
  padding: 0.5rem 1rem;
`
const NavItem = styled(Box)`
  display: flex;
`
const NavLink = styled(Link)`
  display: flex;
  align-items: flex-end;

  &:link,
  &:visited {
    text-decoration: none;
    color: #333;
  }
`
const NavText = styled(Text)`
  padding: 0 0.2rem;
`

const Component: React.SFC = () => {
  const tabs = [
    { href: "/", name: "Idols" },
    { href: "/", name: "Cards" },
    { href: "/", name: "Songs" },
    { href: "/", name: "Costumes" },
    { href: "/", name: "Events" },
  ]

  return (
    <>
      <NavContainer>
        <NavItem>
          <NavLink
            style={{
              color: "#333",
            }}
            to="/"
          >
            <NavText fontSize={4} fontWeight={900}>
              MLTD
            </NavText>
            <NavText fontSize={2} fontWeight={800}>
              English database
            </NavText>
          </NavLink>
        </NavItem>
        <NavItem ml="auto">
          {tabs.map(tab => {
            const { href, name } = tab
            return (
              <NavLink key={name} to={href}>
                <NavText>{name}</NavText>
              </NavLink>
            )
          })}
        </NavItem>
      </NavContainer>
    </>
  )
}

export default Component
