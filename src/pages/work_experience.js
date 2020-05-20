import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const Div = styled.div`
  margin: auto;
  padding-left: 96px;
  max-width: 800px;
`
const WorkHeader = styled.div`
  max-width: 800px;
  font-size: 32px;
  font-weight: bold;
  margin-top: 21.44px;
`

export default function Work() {
  return (
    <Layout>
      <WorkHeader>Work Experience</WorkHeader>
      <Div>
        <h2>Via Transportation -- Expansion Associate -- New York City</h2>
        <ul>
          <li>
            Launching on-demand microtransit services in cities like Austin,
            Brasilia, and NYC
          </li>
          <li>
            Designing new services and use-cases for on-demand transportation
          </li>
          <li>
            Analyzing existing transport networks and identifying opportunities
            for technological innovation
          </li>
        </ul>
        <h2>Booz Allen Hamilton -- Analyst -- Riyadh</h2>
        <ul>
          <li>
            Supported transformation efforts in key Saudi government ministries
          </li>
          <li>
            Developed work reporting system to coordinate efforts of multiple
            government agencies
          </li>
          <li>
            Supported Program Management Office for key projects on
            internationally located team
          </li>
        </ul>
        <h2>Boston Foods -- Director of Operations -- Boston</h2>
        <ul>
          <li>
            Led a volunteer-run grocery service that assembles and distributes
            low-cost, healthy food packages to low-income families
          </li>
          <li>
            Institutionalized budgeting, ordering, and marketing strategies to
            ensure the longevity of the organization
          </li>
        </ul>
      </Div>
    </Layout>
  )
}
