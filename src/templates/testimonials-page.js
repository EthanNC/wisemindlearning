import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Testimonials from '../components/Testimonials'

export const TestimonialsPageTemplate = ({
    image,
    heading,
    testimonials,
  }) => (
    <div className="content">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <h2
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: '0.5rem 0 0 #86a9e9, -0.5rem 0 0 #86a9e9',
            backgroundColor: '#86a9e9',
            color: 'white',
            padding: '1rem',
          }}
        >
          {heading}
        </h2>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

TestimonialsPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    testimonials: PropTypes.array,
  }


const TestimonialsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
      <Layout>
        <TestimonialsPageTemplate
          image={frontmatter.image}
          heading={frontmatter.heading}
          testimonials={frontmatter.testimonials}
        />
      </Layout>
    )
  }
  
  TestimonialsPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }
  
  export default TestimonialsPage
  
  export const testimonialsPageQuery = graphql`
    query TestimonialsPage($id: String!) {
      markdownRemark(id: { eq: $id }) {
        frontmatter {
          image {
            childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                }
          }
          heading
          testimonials {
            author
            quote
          }
        }
      }
    }
  `