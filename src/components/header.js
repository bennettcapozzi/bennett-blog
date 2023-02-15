import React from "react"
import { Link } from "gatsby"

export default function Header({ children }) {
  return (
    <div style={{ margin: "auto", paddingTop: "24px", paddingBottom: "40px" }}>
      Under Construction. You can find me on Substack 
      <script src="www.bennettcapozzi.substack.com"
      >
        here
</script>
      {children}
    </div>
  )
}
