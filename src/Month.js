import React from 'react'
import PropTypes from 'prop-types'
import getCalendarMonthArray from './utils/getCalendarMonthArray'
import WeekRow from './Month/WeekRow'
import monthStyles from './styles/month_style.module.css'
import classNames from 'classnames'
import getMonthEvents from './Month/utils/getMonthEvents'

const Month = (props) => {
  const { date, monthRootClassName, events } = props
  let range = getCalendarMonthArray(date)
  let monthEvents = getMonthEvents(events)
  return (
    <div className={classNames(monthStyles.monthView, monthRootClassName)}>
      <table>
        <tbody>
        {
          range && range.map((item, index) => <WeekRow {...{ monthEvents }} key={index} days={item.days} />)
        }
        </tbody>
      </table>

    </div>
  )
}

Month.propTypes = {}

export default Month
