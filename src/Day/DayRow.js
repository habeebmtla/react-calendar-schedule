import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/day_style.module.css'
import Events from './Events'
import moment from 'moment'

const DayRow = props => {
  let { time, resources, dayEvents, selectedDate, resourceIdAccessor, onSelectEvent, onSelectSlot } = props

  const selectSlot = () => {
    let date = selectedDate.format('YYYY-MM-DD')
    let start = date + ` ${time}`
    let end = date + ` ${moment(time, 'HH:mm').add(30, 'minute').format('HH:mm')}`
    let slotInfo = {
      start,
      end
    }
    onSelectSlot(slotInfo)
  }

  return (
    <tr>
      <td className={styles.time}>{time}</td>
      {
        resources ? resources.map((item, index) => {
            return (
              <td onClick={selectSlot} style={{ position: 'relative' }} key={index}>
                <Events
                  resource={item}
                  {...{ dayEvents, selectedDate, time, resourceIdAccessor, onSelectEvent }}
                />
              </td>
            )
          })
          : <td onClick={selectSlot} style={{ position: 'relative' }}>
            <Events
              {...{ dayEvents, selectedDate, time, resourceIdAccessor, onSelectEvent }}
            />
          </td>
      }
    </tr>
  )
}

DayRow.propTypes = {
  time: PropTypes.string,
  resources: PropTypes.array,
  dayEvents: PropTypes.object,
  selectedDate: PropTypes.object,
  resourceIdAccessor: PropTypes.string,
  onSelectEvent: PropTypes.func,
  onSelectSlot: PropTypes.func
}

export default DayRow
