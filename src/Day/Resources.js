import React from 'react'
import PropTypes from 'prop-types'

const Resources = props => {
  const { resources, resourceTitleAccessor } = props
  return (
    <thead>
    <tr>
      <th></th>
      {
        resources && resources.map((item, index) => {
          return (
            <th key={index}>{item[resourceTitleAccessor]}</th>
          )
        })
      }
    </tr>
    </thead>
  )
}

Resources.propTypes = {}

export default Resources
