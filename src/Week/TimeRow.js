import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/week_style.module.css'
import WeekEvents from './WeekEvents'

const TimeRow = props => {
  const { time, weekArray, weekEvents } = props
  return (
    <tbody>
    <tr>
      <td className={styles.time}>{time}</td>
      {
        weekArray ? weekArray.map((item, index) => {
            return (
              <td style={{ position: 'relative' }} key={index}>
                <WeekEvents {...{ weekEvents }} weekDay={item} time={time} />
              </td>
            )
          })
          : <td></td>
      }
    </tr>
    </tbody>
  )
}

TimeRow.propTypes = {}

export default TimeRow
