import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import styles from '../styles/week_style.module.css'

const WeekEvents = props => {
  const { weekDay, weekEvents, time, onSelectEvent } = props
  let dateTime = weekDay.format('YYYY-MM-DD') + ` ${time}`
  return (
    <div style={{ display: 'flex', position: 'absolute', top: 2, left: 2 }}>
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
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelectEvent(item)
                  }}
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

WeekEvents.propTypes = {
  weekDay: PropTypes.object,
  weekEvents: PropTypes.object,
  time: PropTypes.string,
  onSelectEvent: PropTypes.func
}

export default WeekEvents
