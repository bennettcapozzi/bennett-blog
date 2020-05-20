import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const P = styled.div`
  padding-bottom: 200px;
  padding-left: 100px;
  font-size: 20px;
  max-width: 800px;
`

export default function Contact() {
  return (
    <Layout>
      <P>
        <h2
          style={{
            fontSize: "32px",
            marginTop: "21.4px",
            marginBottom: "21.4px",
          }}
        >
          Contact
        </h2>
        If you'd like to get in touch, please email me at
        <b> bennett.capozzi@gmail.com</b>
      </P>
    </Layout>
  )
}
