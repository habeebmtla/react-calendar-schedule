import React from 'react'
import PropTypes from 'prop-types'

const ToolBar = props => {
  const { onViewChange } = props
  return (
    <div>
      <button onClick={() => onViewChange('day')}>day</button>
      <button onClick={() => onViewChange('week')}>week</button>
      <button onClick={() => onViewChange('month')}>month</button>
    </div>
  )
}

ToolBar.propTypes = {}

export default ToolBar
