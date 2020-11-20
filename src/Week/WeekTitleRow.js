import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { fixedHeaderStyle } from '../styles/styles'

const WeekTitleRow = props => {
  const { weekArray, fixedHeader } = props
  return (
    <thead>
    <tr>
      <th style={{ background: '#fff' }}></th>
      {
        weekArray && weekArray.map((item, index) => {
          return (
            <th style={fixedHeader ? fixedHeaderStyle : {}} key={index}>{moment(item).format('DD ddd')}</th>
          )
        })
      }
    </tr>
    </thead>
  )
}

WeekTitleRow.propTypes = {
  weekArray: PropTypes.array,
  fixedHeader: PropTypes.bool
}

export default WeekTitleRow
