import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import styled from "styled-components"
import "typeface-oswald"
import Nav from "../components/nav"

const Div = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: oswald;
  background: rgb(255, 255, 255);
`
const Main = styled.div`
  display: flex;
  min-height: 60vh;
  flex-direction: column;
`

export default function Layout({ children }) {
  return (
    <Div
      style={{
        margin: `auto`,
        maxWidth: 800,
        padding: `0 1rem`,
      }}
    >
      <Header />
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </Div>
  )
}
