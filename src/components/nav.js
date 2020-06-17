import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SiteNav = styled.div`
  margin: auto;
  background-color: rgb(236, 206, 193);
  width: 100%;
  text-align: center;
  display: flex;
`

const LinkBox = styled.div`
  margin: auto;
  flex-direction: row;
  list-style: none;
  text-align: center;
  font-family: "Oswald";
  justify-content: space-evenly;
  flex: 1;
  border-right: 1px solid rgba(194, 166, 155, 0.479);
  border-left: 1px solid rgba(194, 166, 155, 0.479);
  padding: 5px;
  @media (max-width: 450px) {
    font-size: small;
  }
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

export default function Nav({ children }) {
  const links = [
    { key: 1, to: "/", title: "About Me" },
    { key: 2, to: "/work_experience", title: "Work Experience" },
    { key: 3, to: "/blog", title: "Blog" },
    { key: 4, to: "/contact", title: "Contact Me" },
  ]

  return (
    <SiteNav>
      {links.map(link => {
        return (
          <LinkBox>
            <StyledLink key={link.key} to={link.to}>
              {link.title}
            </StyledLink>
          </LinkBox>
        )
      })}
      {children}
    </SiteNav>
  )
}
