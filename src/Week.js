import React from 'react'
import PropTypes from 'prop-types'
import getCalendarDayTimeArray from './utils/getCalendarDayTimeArray'
import getCalendarWeekArray from './utils/getCalendarWeekArray'
import WeekTitleRow from './Week/WeekTitleRow'
import styles from './styles/week_style.module.css'
import TimeRow from './Week/TimeRow'
import classNames from 'classnames'

const Week = props => {
  const { min, max, weekRootClassName } = props
  let timeArray = getCalendarDayTimeArray(min, max)
  let weekArray = getCalendarWeekArray()
  return (
    <div className={classNames(styles.weekView, weekRootClassName)}>
      <table>
        <colgroup>
          <col style={{ width: 60 }} />
        </colgroup>
        <WeekTitleRow {...{ weekArray }} />
        {
          timeArray && timeArray.map((item, index) =>
            <TimeRow
              key={index}
              time={item}
              {...{ weekArray }}
            />
          )
        }
      </table>
    </div>
  )
}

Week.propTypes = {}

export default Week
