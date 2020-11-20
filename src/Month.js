import React from 'react'
import PropTypes from 'prop-types'
import getCalendarMonthArray from './utils/getCalendarMonthArray'
import WeekRow from './Month/WeekRow'
import monthStyles from './styles/month_style.module.css'
import classNames from 'classnames'
import getMonthEvents from './Month/utils/getMonthEvents'
import WeekHeader from './Month/WeekHeader'

const Month = (props) => {
  const { date, monthRootClassName, events, fixedHeader } = props
  let range = getCalendarMonthArray(date)
  let monthEvents = getMonthEvents(events)
  return (
    <div className={classNames(monthStyles.monthView, monthRootClassName)}>
      <table>
        <WeekHeader {...{ fixedHeader }} />
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
