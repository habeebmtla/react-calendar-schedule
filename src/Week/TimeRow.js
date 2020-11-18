import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/week_style.module.css'

const TimeRow = props => {
  const { time, weekArray } = props
  return (
    <tbody>
    <tr>
      <td className={styles.time}>{time}</td>
      {
        weekArray ? weekArray.map((item, index) => {
            return (
              <td key={index}></td>
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
