import React from "react"
import { Link } from "gatsby"

export default function Header({ children }) {
  return (
    <div style={{ margin: "auto", paddingTop: "24px", paddingBottom: "40px" }}>
      <Link
        to="/"
        style={{
          color: "black",
          textDecoration: "none",
          fontSize: "36px",
          fontWeight: "bold",
        }}
      >
        Bennett Capozzi
      </Link>
      {children}
    </div>
  )
}
