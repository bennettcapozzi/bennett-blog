import React from "react"
import { Link } from "gatsby"

export default function Header({ children }) {
  return (
    <div style={{ margin: "auto", paddingTop: "24px", paddingBottom: "40px" }}>
      Under Construction. You can find me on Substack
      <Link
        to="www.bennettcapozzi.substack.com"
      >
        here
      </Link>
      {children}
    </div>
  )
}
