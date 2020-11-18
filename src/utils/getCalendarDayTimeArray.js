import moment from 'moment'

export default (min, max) => {
  const hours = Array.from({
      length: 48
    }, (_, hour) => moment({
      hour: Math.floor(hour / 2),
      minutes: (hour % 2 === 0 ? 0 : 30)
    }).format('HH:mm')
  )
  let timeArray = hours
  if (min && max) {
    timeArray = hours.filter(el => el >= min && el <= max)
  }
  return timeArray
}
