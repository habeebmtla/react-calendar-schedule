import React from 'react'
import PropTypes from 'prop-types'
import getCalendarDayTimeArray from './utils/getCalendarDayTimeArray'
import getCalendarWeekArray from './utils/getCalendarWeekArray'
import WeekTitleRow from './Week/WeekTitleRow'
import styles from './styles/week_style.module.css'
import TimeRow from './Week/TimeRow'
import classNames from 'classnames'
import getWeekEvents from './Week/utils/getWeekEvents'
import style from './styles/style.module.css'

const Week = props => {
  const { min, max, weekRootClassName, events, date, fixedHeader, onSelectEvent, onSelectSlot, height } = props
  let timeArray = getCalendarDayTimeArray(min, max)
  let weekArray = getCalendarWeekArray(date)
  let weekEvents = getWeekEvents(events)
  return (
    <div style={{ height }} className={classNames(styles.weekView, style.container, weekRootClassName)}>
      <table>
        <colgroup>
          <col style={{ width: 60 }} />
        </colgroup>
        <WeekTitleRow {...{ weekArray, fixedHeader }} />
        {
          timeArray && timeArray.map((item, index) =>
            <TimeRow
              key={index}
              time={item}
              {...{ weekArray, weekEvents, onSelectEvent, onSelectSlot }}
            />
          )
        }
      </table>
    </div>
  )
}

Week.propTypes = {
  min: PropTypes.string,
  max: PropTypes.string,
  weekRootClassName: PropTypes.string,
  events: PropTypes.array,
  date: PropTypes.string,
  fixedHeader: PropTypes.bool,
  onSelectEvent: PropTypes.func,
  onSelectSlot: PropTypes.func
}

export default Week
