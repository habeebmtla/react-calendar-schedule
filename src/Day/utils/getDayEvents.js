import moment from 'moment'

export default (events, selectedDate) => {
  let dayEvents = {}
  events.forEach(item => {
    let startDate = moment(item.start).format('YYYY-MM-DD')
    let hour = moment(item.start).format('HH')
    let minute = moment(item.start).format('mm')
    if (parseInt(minute) < 30) {
      let full_hour_data = dayEvents[`${startDate} ${hour}:00`]
      if (full_hour_data)
        dayEvents[`${startDate} ${hour}:00`].push(item)
      else
        dayEvents[`${startDate} ${hour}:00`] = [item]
    } else {
      let half_hour_data = dayEvents[`${startDate} ${hour}:30`]
      if (half_hour_data)
        dayEvents[`${startDate} ${hour}:30`].push(item)
      else
        dayEvents[`${startDate} ${hour}:30`] = [item]
    }
  })
  return dayEvents
}
