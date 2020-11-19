import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/month_style.module.css'
import moment from 'moment'

const DayEvents = props => {
  const { dayEvents } = props
  return (
    <div style={{ display: 'flex', marginTop: 15, position: 'absolute' }}>
      {
        dayEvents && dayEvents.map((item, index) => {
          if (index < 5)
            return (
              <div
                title={`${item.title}: ${moment(item.start).format('hh:mm A')} -- ${moment(item.end).format('hh:mm A')}`}
                key={index}
                className={styles.event}
                style={item.background ? { background: item.background } : {}}
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

DayEvents.propTypes = {}

export default DayEvents
