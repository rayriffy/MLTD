import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Header from "./header"

const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/ggp3ryx.css");
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,800&display=swap');

  html {
    font-size: 16px; 
    font-family: 'Raleway', sans-serif;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
