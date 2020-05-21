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
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

export default function Nav({ children }) {
  const links = [
    { to: "/", title: "About Me" },
    { to: "/work_experience", title: "Work Experience" },
    { to: "/blog", title: "Blog" },
    { to: "/contact", title: "Contact Me" },
  ]

  return (
    <SiteNav>
      {links.map(link => {
        return (
          <LinkBox>
            <StyledLink to={link.to}>{link.title}</StyledLink>
          </LinkBox>
        )
      })}

      {children}
    </SiteNav>
  )
}
