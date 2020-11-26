import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/week_style.module.css'
import WeekEvents from './WeekEvents'
import moment from 'moment'

const TimeRow = props => {
  const { time, weekArray, weekEvents, onSelectEvent, onSelectSlot } = props

  const selectSlot = (slot) => {
    let date = slot.format('YYYY-MM-DD')
    let start = date + ` ${time}`
    let end = date + ` ${moment(time, 'HH:mm').add(30, 'minute').format('HH:mm')}`
    let slotInfo = {
      start: moment(start).toDate(),
      end: moment(end).toDate()
    }
    onSelectSlot(slotInfo)
  }

  return (
    <tbody>
    <tr>
      <td className={styles.time}>{time}</td>
      {
        weekArray ? weekArray.map((item, index) => {
            return (
              <td onClick={() => selectSlot(item)} style={{ position: 'relative' }} key={index}>
                <WeekEvents {...{ weekEvents, onSelectEvent }} weekDay={item} time={time} />
              </td>
            )
          })
          : <td></td>
      }
    </tr>
    </tbody>
  )
}

TimeRow.propTypes = {
  time: PropTypes.string,
  weekArray: PropTypes.array,
  weekEvents: PropTypes.object,
  onSelectEvent: PropTypes.func,
  onSelectSlot: PropTypes.func
}

export default TimeRow
