import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const WeekTitleRow = props => {
  const { weekArray } = props
  return (
    <thead>
    <tr>
      <th></th>
      {
        weekArray && weekArray.map((item, index) => {
          return (
            <th key={index}>{moment(item).format('DD ddd')}</th>
          )
        })
      }
    </tr>
    </thead>
  )
}

WeekTitleRow.propTypes = {}

export default WeekTitleRow
