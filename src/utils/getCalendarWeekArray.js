import moment from 'moment'

export default (selectedDate) => {
  let currentDate = selectedDate ? moment(selectedDate) : moment()
  let calendar = []
  const startDay = currentDate.clone().startOf('week')
  const endDay = currentDate.clone().endOf('week')

  let date = startDay.clone().subtract(1, 'day')

  while (date.isBefore(endDay, 'day')) {
    calendar.push(date.add(1, 'day').clone())
  }
  return calendar
}
