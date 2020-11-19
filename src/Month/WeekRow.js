import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DayEvents from './DayEvents'

const WeekRow = props => {
  let { days, monthEvents } = props

  return (
    <tr>
      {
        days && days.map((item, index) => {
          let dayEvents = monthEvents[moment(item).format('YYYY-MM-DD')]
          return (
            <td style={{ position: 'relative' }} key={index}>
              <div style={{ textAlign: 'right' }}>
                {moment(item).format('DD')}
              </div>
              <DayEvents {...{ dayEvents }} />
            </td>
          )
        })
      }
    </tr>
  )
}

WeekRow.propTypes = {}

export default WeekRow
