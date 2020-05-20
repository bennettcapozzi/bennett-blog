import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
`

const Column1 = styled.div`
  flex: 1;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Picture = styled.img`
    max-width: 400px;
    border-radius: 5px;
    position: relative;
    margin: 25px;
    opacity: .9;
  }`

const Column2 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

export default function Home() {
  return (
    <Layout>
      <FlexBox>
        <Column1>
          <Picture src="https://i.ibb.co/dPWzGHb/amman-photo.jpg" />
        </Column1>
        <Column2>
          <div>
            <h2>Hello, World!</h2>
            <p>
              My name is Bennett Capozzi and I am a project manager at Via
              Transportation in New York City. I help cities launch innovative
              on-demand transportation solutions to support their existing
              services. I'm interested in tech, transportation, and making it
              easier and more efficient for people to get from point A to point
              B.
            </p>
            <p>
              Before I moved to New York and started at Via, I worked as a
              consultant for Booz Allen Hamilton in Riyadh, Saudi Arabia. During
              my time in the Middle East I worked on a variety of projects in
              government affairs, tech, and international relations.
            </p>
            <p>
              I have a B.A. in History & Literature and a citation in Arabic
              from Harvard College where I focused on American History and
              Middle Eastern Studies.
            </p>
          </div>
        </Column2>
      </FlexBox>
    </Layout>
  )
}
