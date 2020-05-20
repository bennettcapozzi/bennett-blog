import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const PostCard = styled.div`
  padding-right: 48px;
  padding-left: 48px;
  padding-top: 24px;
  padding-bottom: 24px;
  margin: 24px;
  border: solid 2px;
  border-color: rgb(236, 206, 193);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`
const BlogPost = ({ post }) => (
  <PostCard>
    <Link
      style={{
        color: "black",
        textDecoration: "none",
        fontSize: "32px",
        paddingBottom: "24px",
      }}
      to={post.frontmatter.slug}
    >
      {post.frontmatter.title}
    </Link>

    <div
      style={{
        color: "black",
        textDecoration: "none",
        fontSize: "medium",
      }}
    >
      {post.excerpt}
    </div>
    <br />
    <div
      style={{
        color: "black",
        textDecoration: "none",
        fontSize: "medium",
        textAlign: "right",
      }}
    >
      {post.frontmatter.date}
    </div>
  </PostCard>
)
export default BlogPost
