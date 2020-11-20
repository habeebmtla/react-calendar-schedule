import React from 'react'

import ReactCalendarSchedule from 'react-calendar-schedule'
import 'react-calendar-schedule/dist/index.css'
import { events, resources } from './utils/exampleData'

const App = () => {
  return (
    <div style={{ padding: 10 }}>
      <ReactCalendarSchedule
        resources={resources}
        events={events}
        resourceTitleAccessor={'resourceTitle'}
        resourceIdAccessor={'resourceId'}
        view={'day'}
        min={'04:00'}
        max={'20:00'}
        fixedHeader={true}
        onSelectEvent={(e) => console.log(e)}
      />
    </div>
  )
}

export default App
