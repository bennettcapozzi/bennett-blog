import React from "react"

export default function Header({ children }) {
  return (
    <div style={{ margin: "auto", paddingTop: "24px", paddingBottom: "40px" }}>
      Under Construction. You can find me on Substack 
      <a href="www.bennettcapozzi.substack.com"
      >
        here
</a>
      {children}
    </div>
  )
}
