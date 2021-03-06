import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Month from './Month'
import Day from './Day'
import ToolBar from './ToolBar'
import Week from './Week'
import style from './styles/style.module.css'
import classNames from 'classnames'
import { resources } from '../example/src/utils/exampleData'

const ReactCalendarSchedule = (props) => {
  const { rootClassName, components } = props
  const [view, onViewChange] = useState(props.view)
  const [date, onNavigate] = useState(props.date)
  const CustomToolbar = components && components.Toolbar
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
      {CustomToolbar ? <CustomToolbar {...{ onViewChange, onNavigate, view, date }} /> :
        <ToolBar {...{ onViewChange, onNavigate }} />}
      <div className={style.calendar}>
        {getView()}
      </div>
    </div>
  )
}

ReactCalendarSchedule.propTypes = {
  view: PropTypes.string,
  date: PropTypes.string,
  events: PropTypes.array.isRequired,
  resources: PropTypes.array,
  resourceTitleAccessor: PropTypes.string,
  resourceIdAccessor: PropTypes.string,
  fixedHeader: PropTypes.bool,
  onSelectEvent: PropTypes.func,
  onSelectSlot: PropTypes.func,
  rootClassName: PropTypes.string,
  monthRootClassName: PropTypes.string,
  weekRootClassName: PropTypes.string,
  dayRootClassName: PropTypes.string,
  components: PropTypes.object
}

export default ReactCalendarSchedule
