import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const ServicePageTemplate = ({
  image,
}) => (
  <div className="content">
    <div
    >
content
    </div>
  </div>
)

ServicePageTemplate.propTypes = {
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const ServicePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ServicePageTemplate
        // image={frontmatter.image}
      />
    </Layout>
  )
}


ServicePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicePage

export const servicePageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {

      }
    }
  }
`
