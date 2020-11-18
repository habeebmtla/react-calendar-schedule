import React from 'react'
import PropTypes from 'prop-types'
import getCalendarDayTimeArray from './utils/getCalendarDayTimeArray'
import DayRow from './Day/DayRow'
import dayViewStyle from './styles/day_style.module.css'
import Resources from './Day/Resources'
import classNames from 'classnames'

const Day = props => {
  const { date, min, max, resources, resourceTitleAccessor, dayRootClassName } = props
  let timeArray = getCalendarDayTimeArray(min, max)
  return (
    <div className={classNames(dayViewStyle.dayView, dayRootClassName)}>
      <table>
        <colgroup>
          <col style={{ width: 60 }} />
        </colgroup>
        <Resources {...{ resources, resourceTitleAccessor }} />
        <tbody>
        {
          timeArray && timeArray.map((item, index) =>
            <DayRow
              key={index}
              time={item}
              {...{ resources }}
            />
          )
        }
        </tbody>
      </table>
    </div>
  )
}

Day.propTypes = {}

export default Day
