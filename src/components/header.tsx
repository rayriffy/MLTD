import React from "react"

import Navbar from "./navbar"

interface IProps {
  siteTitle: string
}

const Header: React.SFC<IProps> = () => {
  const navTabs = [
    {
      href: "#!",
      name: "Idols",
    },
    {
      href: "#!",
      name: "Cards",
    },
    {
      href: "#!",
      name: "Songs",
    },
    {
      href: "#!",
      name: "Costumes",
    },
    {
      href: "#!",
      name: "Events",
    },
  ]

  return (
    <>
      <Navbar tabs={navTabs} />
    </>
  )
}

export default Header
