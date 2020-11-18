import moment from 'moment'

export default (selectedDate) => {
  let currentDate = selectedDate ? moment(selectedDate) : moment()
  let calendar = []
  const startDay = currentDate.clone().startOf('month').startOf('week')
  const endDay = currentDate.clone().endOf('month').endOf('week')

  let date = startDay.clone().subtract(1, 'day')

  while (date.isBefore(endDay, 'day')) {
    calendar.push({
      days: Array(7).fill(0).map(() => date.add(1, 'day').clone())
    })
  }
  return calendar
}
