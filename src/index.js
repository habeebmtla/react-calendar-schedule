import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Month from './Month'
import Day from './Day'
import ToolBar from './ToolBar'
import Week from './Week'
import style from './styles/style.module.css'
import classNames from 'classnames'

const ReactCalendarSchedule = (props) => {
  const { rootClassName } = props
  const [view, onViewChange] = useState(props.view)
  const [date, onNavigate] = useState(props.date)
  const getView = () => {
    switch (view) {
      case 'month':
        return <Month {...props} {...{ date }} />
      case 'day':
        return <Day {...props} {...{ date }} />
      case 'week':
        return <Week {...props} {...{ date }} />
      default:
        return <Month {...props} {...{ date }} />
    }
  }
  return (
    <div className={(classNames(style.root, rootClassName))}>
      <ToolBar onViewChange={onViewChange} />
      {getView()}
    </div>
  )
}

ReactCalendarSchedule.propTypes = {
  view: PropTypes.string,
  date: PropTypes.string
}

export default ReactCalendarSchedule
