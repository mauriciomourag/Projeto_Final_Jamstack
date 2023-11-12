import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const DiaryPost = ({data, children}) => {
  return (
    <Layout pageTile={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

export default DiaryPost
