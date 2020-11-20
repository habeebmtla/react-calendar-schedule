import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/day_style.module.css'
import getEventSpecs from '../utils/getEventSpecs'

const Events = props => {
  let { time, resource, dayEvents, selectedDate, resourceIdAccessor } = props

  let dateTime = selectedDate.format('YYYY-MM-DD') + ` ${time}`
  let events = dayEvents[dateTime]
  return (
    <div>
      {
        events && events.map((item, index) => {
          let { height, offset } = getEventSpecs(item)
          if ((resource && resource[resourceIdAccessor] === item[resourceIdAccessor]) || !resource)
            return (
              <div key={index} className={styles.event} style={{ height, top: offset }}>
                {item.title}
              </div>
            )
        })
      }

    </div>
  )
}

Events.propTypes = {}

export default Events
