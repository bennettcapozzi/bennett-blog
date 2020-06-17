import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const Div = styled.div`
  margin: auto;
  max-width: 600px;
`
const WorkHeader = styled.div`
  margin: auto;
  max-width: 800px;
  font-size: 32px;
  font-weight: bold;
  margin-top: 32px;
  margin-bottom: 24px;
  @media (max-width: 450px) {
    font-size: 24px;
  }
`
const JobHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 450px) {
    font-size: 16px;
  }
`
const JobDetails = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  @media (max-width: 450px) {
    font-size: 14px;
  }
`

export default function Work() {
  return (
    <Layout>
      <WorkHeader>Work Experience</WorkHeader>
      <Div>
        <JobHeader>Via Transportation</JobHeader>
        <JobDetails>Expansion Associate - NYC</JobDetails>
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
        <JobHeader>Booz Allen Hamilton</JobHeader>
        <JobDetails>Analyst - Riyadh</JobDetails>
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
        <JobHeader>Boston Foods</JobHeader>
        <JobDetails>Director of Operations - Boston</JobDetails>
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
