import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const ContactHeader = styled.div`
  max-width: 800px;
  font-size: 32px;
  font-weight: bold;
  margin-top: 32px;
  margin-bottom: 24px;
  @media (max-width: 450px) {
    font-size: 24px;
  }
`

const ContactDiv = styled.div`
  font-size: 20px;
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 450px) {
    width: 300px;
  }
`

export default function Contact() {
  return (
    <Layout>
      <ContactDiv>
        <ContactHeader>Contact</ContactHeader>
        If you'd like to get in touch, please email me at
        <b> bennett.capozzi@gmail.com</b>
      </ContactDiv>
    </Layout>
  )
}
