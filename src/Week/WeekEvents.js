import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import styles from '../styles/week_style.module.css'

const WeekEvents = props => {
  const { weekDay, weekEvents, time } = props
  let dateTime = weekDay.format('YYYY-MM-DD') + ` ${time}`
  console.log(weekEvents[dateTime])
  return (
    <div style={{ display: 'flex', position: 'absolute', top: 0 }}>
      {
        weekEvents[dateTime] && weekEvents[dateTime].map((item, index) => {
          if (index < 5)
            return (
              <div key={index}>
                <div
                  title={`${item.title}: ${moment(item.start).format('hh:mm A')} - ${moment(item.end).format('hh:mm A')}`}
                  key={index}
                  className={styles.event}
                  style={item.background ? { background: item.background } : {}}
                >{item.avatarText}</div>
              </div>
            )
        })
      }
      {
        weekEvents[dateTime] && weekEvents[dateTime].length > 5 &&
        <div
          className={styles.event}
        >{weekEvents[dateTime].length - 5}+</div>
      }
    </div>
  )
}

WeekEvents.propTypes = {}

export default WeekEvents
