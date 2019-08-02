import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Card from "../components/card"
import { Flex } from "rebass"

const Container = styled(Flex)`
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 50vh;
  width: 100%;
`

const Page = ({ pageContext }) => {
  return (
    <>
      <Layout>
        <Container>
          <Card />
        </Container>
      </Layout>
    </>
  )
}

export default Page
