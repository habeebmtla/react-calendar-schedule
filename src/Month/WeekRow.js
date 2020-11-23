import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DayEvents from './DayEvents'

const WeekRow = props => {
  let { days, monthEvents, onSelectEvent, onSelectSlot } = props

  const selectSlot = (slot) => {
    let slotInfo = {
      start: slot.format('YYYY-MM-DD HH:mm'),
      end: slot.format('YYYY-MM-DD HH:mm')
    }
    onSelectSlot(slotInfo)
  }

  return (
    <tr>
      {
        days && days.map((item, index) => {
          let dayEvents = monthEvents[item.format('YYYY-MM-DD')]
          return (
            <td onClick={(e) => selectSlot(item)} style={{ position: 'relative' }} key={index}>
              <div style={{ textAlign: 'right' }}>
                {item.format('DD')}
              </div>
              <DayEvents {...{ dayEvents, onSelectEvent }} />
            </td>
          )
        })
      }
    </tr>
  )
}

WeekRow.propTypes = {
  days: PropTypes.array,
  monthEvents: PropTypes.object,
  onSelectEvent: PropTypes.func,
  onSelectSlot: PropTypes.func
}

export default WeekRow
