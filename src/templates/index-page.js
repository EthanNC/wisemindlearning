import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
image,
  title,
  heading,
  mainpitch,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `left bottom`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              '	#86a9e9 0.5rem 0px 0px, 	#86a9e9 -0.5rem 0px 0px',
            backgroundColor: '	#86a9e9',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        {/* <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              '	rgb(233, 198, 134) 0.5rem 0px 0px, 	rgb(233, 198, 134) -0.5rem 0px 0px',
            backgroundColor: '	rgb(233, 198, 134)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3> */}
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile ">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-vertical is-parent">
                    <div className="tile is-child box">
                      <p className="title">{mainpitch.about.title}</p>
                      <p className="subtitle has-text-weight-semibold">{mainpitch.about.text}</p>
                      <Link className="btn" to="/about">
                      Learn More
                      </Link>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child box">
                      <figure className="image">
                          <PreviewCompatibleImage imageInfo={mainpitch.about} />
                    </figure>
                    </div>
                  </div>
                </div>
                <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="tile is-child box">
                      <figure className="image ">
                      <PreviewCompatibleImage imageInfo={mainpitch.service} />
                    </figure>
                    </div>
                    
                  </div>
                  <div className="tile is-4 is-vertical is-parent">
                    <div className="tile is-child box">
                      <p className="title">{mainpitch.service.title}</p>
                      <p className="subtitle has-text-weight-semibold">{mainpitch.service.text}</p>
                      <Link className="btn" to="/products">
                      See All Services
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <Features gridItems={intro.blurbs} /> */}
                {/* <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See All Services
                    </Link>
                  </div>
                </div> */}
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    News Feed
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  tile1: PropTypes.object,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        tile={frontmatter.tile1}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
          about{
            title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            } 
          }
          service{
            title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            } 
          }
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`


// tile1{
//   image {
//     childImageSharp {
//       fluid(maxWidth: 1000, quality: 100) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }