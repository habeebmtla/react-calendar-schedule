import React from 'react'
import PropTypes from 'prop-types'
import { fixedHeaderStyle } from '../styles/styles'

const Resources = props => {
  const { resources, resourceTitleAccessor, fixedHeader } = props
  return (
    <thead>
    <tr>
      <th style={{ background: '#fff' }}></th>
      {
        resources && resources.map((item, index) => {
          return (
            <th style={fixedHeader ? fixedHeaderStyle : {}} key={index}>{item[resourceTitleAccessor]}</th>
          )
        })
      }
    </tr>
    </thead>
  )
}

Resources.propTypes = {
  resources: PropTypes.array,
  resourceTitleAccessor: PropTypes.string,
  fixedHeader: PropTypes.bool
}

export default Resources
