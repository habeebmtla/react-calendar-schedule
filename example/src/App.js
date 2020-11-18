import React from 'react'

import ReactCalendarSchedule from 'react-calendar-schedule'
import 'react-calendar-schedule/dist/index.css'
import { resources } from './utils/exampleData'

const App = () => {
  return (
    <div style={{ padding: 10 }}>
      <ReactCalendarSchedule
        resources={resources}
        resourceTitleAccessor={'resourceTitle'}
        resourceIdAccessor={'resourceId'}
        view={'week'}
      />
    </div>
  )
}

export default App
