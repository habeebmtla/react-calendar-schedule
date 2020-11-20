import React from 'react'
import PropTypes from 'prop-types'
import getCalendarDayTimeArray from './utils/getCalendarDayTimeArray'
import DayRow from './Day/DayRow'
import dayViewStyle from './styles/day_style.module.css'
import Resources from './Day/Resources'
import classNames from 'classnames'
import getDayEvents from './Day/utils/getDayEvents'
import moment from 'moment'

const Day = props => {
  const { date, min, max, resources, resourceTitleAccessor, resourceIdAccessor, dayRootClassName, events, fixedHeader } = props
  let selectedDate = date ? moment(date) : moment()
  let timeArray = getCalendarDayTimeArray(min, max)
  let dayEvents = getDayEvents(events)
  return (
    <div className={classNames(dayViewStyle.dayView, dayRootClassName)}>
      <table>
        <colgroup>
          <col style={{ width: 60 }} />
        </colgroup>
        <Resources {...{ resources, resourceTitleAccessor, fixedHeader }} />
        <tbody>
        {
          timeArray && timeArray.map((item, index) =>
            <DayRow
              key={index}
              time={item}
              {...{ resources, dayEvents, selectedDate, resourceIdAccessor }}
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
