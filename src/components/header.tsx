import React from "react"

import Navbar from "./navbar"

const Header: React.SFC = () => {
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
