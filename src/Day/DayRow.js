import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/day_style.module.css'

const DayRow = props => {
  let { time, resources } = props
  return (
    <tr>
      <td className={styles.time}>{time}</td>
      {
        resources ? resources.map((item, index) => {
            return (
              <td key={index}></td>
            )
          })
          : <td></td>
      }
    </tr>
  )
}

DayRow.propTypes = {}

export default DayRow
