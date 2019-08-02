import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Navbar from "./navbar"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/ggp3ryx.css");
  @import url('https://fonts.googleapis.com/css?family=Raleway:200,300,400,600,800,900&display=swap');

  html {
    font-size: 16px; 
    font-family: 'Raleway', sans-serif;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

const Component: React.SFC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Component
