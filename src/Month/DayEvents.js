import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/month_style.module.css'
import moment from 'moment'

const DayEvents = props => {
  const { dayEvents, onSelectEvent } = props
  return (
    <div style={{ display: 'flex', marginTop: 15, position: 'absolute', left: 2 }}>
      {
        dayEvents && dayEvents.map((item, index) => {
          if (index < 5)
            return (
              <div
                title={`${item.title}: ${moment(item.start).format('hh:mm A')} -- ${moment(item.end).format('hh:mm A')}`}
                key={index}
                className={styles.event}
                style={item.background ? { background: item.background } : {}}
                onClick={(e) => {
                  e.stopPropagation()
                  onSelectEvent(item)
                }}
              >{item.avatarText}</div>
            )
        })
      }
      {
        dayEvents && dayEvents.length > 5 &&
        <div
          className={styles.event}
        >{dayEvents.length - 5}+</div>
      }

    </div>
  )
}

DayEvents.propTypes = {
  dayEvents: PropTypes.array,
  onSelectEvent: PropTypes.func
}

export default DayEvents
