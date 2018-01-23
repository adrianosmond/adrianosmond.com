import React from "react";
import Helmet from 'react-helmet'
import Link, { withPrefix } from 'gatsby-link'
import './work.css'

export default ({ data }) => {
  const project = data.markdownRemark;
  return (
    <article className="work-page">
      <Helmet title={`Work done with ${project.frontmatter.title} - Adrian Osmond`} />
      <div className="container">
        <div className="content">
          <Link to="/" className="home-link">Back to the homepage</Link>
          <h1>{project.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: project.html }} />
        </div>
      </div>
    </article>
  )
}

export const query = graphql`
  query WorkQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        logo
      }
    }
  }
`