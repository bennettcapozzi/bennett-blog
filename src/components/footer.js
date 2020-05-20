import React from "react"
import styled from "styled-components"

const Div = styled.div`
  margin: auto;
  padding-top: 20px;
`

export default function Footer({ children }) {
  return (
    <Div>
      <p>All Content © Bennett Capozzi</p>
      {children}
    </Div>
  )
}
