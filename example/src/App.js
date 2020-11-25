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
        height={'90vh'}
        date={'2020-11-20'}
        fixedHeader={true}
        onSelectEvent={(e) => console.log(e)}
        onSelectSlot={(e) => console.log(e)}
        components={{
          Toolbar
        }}
      />
    </div>
  )
}

export default App


const Toolbar = (props) => {
  const { onViewChange } = props
  return (
    <div>
      <button onClick={() => onViewChange('day')}>day</button>
      <button onClick={() => onViewChange('week')}>week</button>
      <button onClick={() => onViewChange('month')}>month</button>
    </div>
  )
}
