import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { fixedHeaderStyle } from '../styles/styles'

const WeekHeader = props => {
  const { fixedHeader } = props
  const weeks = moment.weekdaysShort()
  return (
    <thead>
    <tr>
      {
        weeks && weeks.map((item, index) => <th style={fixedHeader ? fixedHeaderStyle : {}} key={index}>{item}</th>)
      }
    </tr>
    </thead>
  )
}

WeekHeader.propTypes = {
  fixedHeader: PropTypes.bool
}

export default WeekHeader
