import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const WeekRow = props => {
  let { days } = props

  return (
    <tr>
      {
        days && days.map((item, index) => {
          return (
            <td key={index}>
              <div style={{ float: 'right' }}>
                {moment(item).format('DD')}
              </div>
            </td>
          )
        })
      }
    </tr>
  )
}

WeekRow.propTypes = {}

export default WeekRow
