import moment from 'moment'

const SINGLE_EVENT_HEIGHT = 50

export default (event) => {
  let diff = moment(event.end).diff(moment(event.start), 'hour', true)
  let minute = moment(event.start).format('mm')
  minute = parseInt(minute)
  let offset_minute
  if (minute >= 0 && minute < 30) {
    offset_minute = minute
  } else
    offset_minute = minute - 30
  // 30 minute  = 40px height
  // 1 minute = 40/30 px height
  let offset = (SINGLE_EVENT_HEIGHT / 30) * offset_minute
  let event_height = SINGLE_EVENT_HEIGHT * diff * 2
  return {
    height: event_height,
    offset
  }
}
