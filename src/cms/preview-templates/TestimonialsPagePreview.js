import React from 'react'
import PropTypes from 'prop-types'
import { TestimonialsPageTemplate } from '../../templates/testimonials-page'

const TestimonialsPagePreview = ({ entry}) => {


  const entryTestimonialsPage = entry.getIn(['data', 'testimonialsPage'])
  const testimonials= entryTestimonialsPage ? entryTestimonialsPage.toJS() : []


  return (
    <TestimonialsPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      testimonials={testimonials}
    />
  )
}

TestimonialsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default TestimonialsPagePreview
