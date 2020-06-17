import React from "react"
import Layout from "../components/layout"
import BlogPost from "../components/blogPost"
import { graphql } from "gatsby"
import styled from "styled-components"

const BlogHeader = styled.div`
  margin: auto;
  max-width: 800px;
  font-size: 32px;
  font-weight: bold;
  margin-top: 32px;
  margin-bottom: 12px;
`

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <BlogPost key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <BlogHeader>Blog Posts</BlogHeader>
      <div>{Posts}</div>
    </Layout>
  )
}
export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
