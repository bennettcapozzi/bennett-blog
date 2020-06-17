import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const ErrorHeader = styled.div`
  max-width: 800px;
  font-size: 32px;
  font-weight: bold;
  margin-top: 32px;
  margin-bottom: 24px;
  @media (max-width: 450px) {
    font-size: 24px;
  }
`

export default function Page404() {
  return (
    <Layout>
      <ErrorHeader>Sorry, there's nothing here!</ErrorHeader>
    </Layout>
  )
}
