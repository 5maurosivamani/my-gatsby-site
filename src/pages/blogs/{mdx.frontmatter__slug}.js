import { graphql } from 'gatsby';
import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = ({data}) => {


  const {title, content} = data.mdx.frontmatter

  return (
    <Layout pageTitle={title}>
      <p>{content}</p>
    </Layout>
  )
}

export const query = graphql`
query MyQuery($id: String) {
  mdx(id: { eq: $id }) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      content
    }
  }
}
`


export const Head = () => <Seo title="Super Cool Blog Posts" />

export default BlogPost