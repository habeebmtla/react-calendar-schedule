import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/day_style.module.css'
import getEventSpecs from '../utils/getEventSpecs'
import moment from 'moment'

const Events = props => {
  let { time, resource, dayEvents, selectedDate, resourceIdAccessor, onSelectEvent } = props

  let dateTime = selectedDate.format('YYYY-MM-DD') + ` ${time}`
  let events = dayEvents[dateTime]
  return (
    <div>
      {
        events && events.map((item, index) => {
          let { height, offset } = getEventSpecs(item)
          if ((resource && resource[resourceIdAccessor] === item[resourceIdAccessor]) || !resource)
            return (
              <div
                key={index}
                className={styles.event}
                style={{ height, top: offset, boxSizing: 'border-box' }}
                onClick={(e) => {
                  e.stopPropagation()
                  onSelectEvent(item)
                }}
              >
                <span
                  style={{ fontSize: '75%' }}>{moment(item.start).format('hh:mm A')} - {moment(item.end).format('hh:mm A')}</span><br />
                {item.title}
              </div>
            )
        })
      }

    </div>
  )
}

Events.propTypes = {
  time: PropTypes.string,
  resource: PropTypes.object,
  dayEvents: PropTypes.object,
  selectedDate: PropTypes.object,
  resourceIdAccessor: PropTypes.string,
  onSelectEvent: PropTypes.func
}

export default Events
