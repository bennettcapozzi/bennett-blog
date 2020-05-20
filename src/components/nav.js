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

export default function Nav({ children }) {
  return (
    <SiteNav>
      <LinkBox>
        <Link
          style={{ color: "black", textDecoration: "none", fontSize: "medium" }}
          to="/"
        >
          About Me
        </Link>
      </LinkBox>
      <LinkBox>
        <Link
          style={{ color: "black", textDecoration: "none", fontSize: "medium" }}
          to="/work_experience/"
        >
          Work Experience
        </Link>
      </LinkBox>
      <LinkBox>
        <Link
          style={{ color: "black", textDecoration: "none", fontSize: "medium" }}
          to="/blog/"
        >
          Blog
        </Link>
      </LinkBox>
      <LinkBox>
        <Link
          style={{ color: "black", textDecoration: "none", fontSize: "medium" }}
          to="/contact/"
        >
          Contact
        </Link>
      </LinkBox>
      {children}
    </SiteNav>
  )
}
