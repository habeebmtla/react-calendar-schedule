import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/day_style.module.css'
import Events from './Events'

const DayRow = props => {
  let { time, resources, dayEvents, selectedDate, resourceIdAccessor, onSelectEvent } = props

  return (
    <tr>
      <td className={styles.time}>{time}</td>
      {
        resources ? resources.map((item, index) => {
            return (
              <td style={{ position: 'relative' }} key={index}>
                <Events
                  resource={item}
                  {...{ dayEvents, selectedDate, time, resourceIdAccessor, onSelectEvent }}
                />
              </td>
            )
          })
          : <td style={{ position: 'relative' }}>
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
  onSelectEvent: PropTypes.func
}

export default DayRow
