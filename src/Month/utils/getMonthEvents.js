import moment from 'moment'

export default (events) => {
  let monthEvents = {}
  events.forEach(item => {
    let startDate = moment(item.start).format('YYYY-MM-DD')
    if (monthEvents[startDate])
      monthEvents[startDate].push(item)
    else
      monthEvents[startDate] = [item]
  })
  return monthEvents
}
