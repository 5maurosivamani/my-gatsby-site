import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql, Link } from "gatsby"

const Blogs = ({ data}) => {


  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id} className="mb-3">
            <Link to={"/blogs/" + node.frontmatter.slug} onClick={()=>{return "/" + node.frontmatter.slug}}>
            <h4>{node.frontmatter.title}</h4>
            </Link>
            
            <p>Posted: {node.frontmatter.date}</p>

          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default Blogs