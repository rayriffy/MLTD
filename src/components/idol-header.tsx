import React from "react"
import styled from "styled-components"

import { Flex, Box } from "rebass"

interface IProps {
  name: string
}

const Container = styled(Flex)``

const Component: React.SFC<IProps> = ({ name }) => {
  return (
    <Container width="100%" justifyContent="center">
      <Box></Box>
      {name}
    </Container>
  )
}

export default Component
