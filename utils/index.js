const shuffleArr = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
const getWeek = (dateTime) => {
  let temptTime = new Date(dateTime.getTime())
  let weekday = temptTime.getDay() || 7
  temptTime.setDate(temptTime.getDate() - weekday + 1 + 5)
  let firstDay = new Date(temptTime.getFullYear(), 0, 1)
  let dayOfWeek = firstDay.getDay()
  let spendDay = 1
  if (dayOfWeek != 0) spendDay = 7 - dayOfWeek + 1
  firstDay = new Date(temptTime.getFullYear(), 0, 1 + spendDay)
  let d = Math.ceil((temptTime.valueOf() - firstDay.valueOf()) / 86400000)
  let result = Math.ceil(d / 7)
  return result
}
const formatDate = (date, format) => {
  let we = date.getDay()
  let z = getWeek(date)
  let qut = Math.floor((date.getMonth() + 3) / 3).toString()
  let mon = date.getMonth()
  const opt = {
    'Y+': date.getFullYear().toString(),
    'm+': (date.getMonth() + 1).toString(),
    'd+': date.getDate().toString(),
    'H+': date.getHours().toString(),
    'M+': date.getMinutes().toString(),
    'S+': date.getSeconds().toString(),
    'q+': qut,
  }
  const month = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  }
  const month_s = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sept',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  }
  const week = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tues',
    3: 'Wed',
    4: 'Thur',
    5: 'Fri',
    6: 'Sat',
  }
  const quarter = {
    1: 'First',
    2: 'Second',
    3: 'Third',
    4: 'Fourth',
  }
  if (/(W+)/.test(format))
    format = format.replace(
      RegExp.$1,
      RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? week[we]
          : week[we]
        : week[we]
    )
  if (/(Q+)/.test(format))
    format = format.replace(
      RegExp.$1,
      RegExp.$1.length == 4 ? quarter[qut] + 'quarter' : quarter[qut]
    )
  if (/(Z+)/.test(format))
    format = format.replace(
      RegExp.$1,
      RegExp.$1.length == 3 ? 'Week ' + z : z + ''
    )
  for (let k in opt) {
    let r = new RegExp('(' + k + ')').exec(format)
    if (r)
      format = format.replace(
        r[1],
        RegExp.$1.length == 1 ? opt[k] : opt[k].padStart(RegExp.$1.length, '0')
      )
  }
  if (/(E+)/.test(format)) format = format.replace(RegExp.$1, month[mon])
  if (/(A+)/.test(format)) format = format.replace(RegExp.$1, month_s[mon])
  return format
}
const formatPast = (param, format) => {
  let t, s
  let time = new Date().getTime()
  typeof param === 'string' || 'object'
    ? (t = new Date(param).getTime())
    : (t = param)
  time = Number.parseInt(`${time - t}`)
  if (time < 10000) {
    return 'Just now'
  } else if (time < 60000 && time >= 10000) {
    s = Math.floor(time / 1000)
    return `${s}s ago`
  } else if (time < 3600000 && time >= 60000) {
    s = Math.floor(time / 60000)
    return `${s}m ago`
  } else if (time < 86400000 && time >= 3600000) {
    s = Math.floor(time / 3600000)
    return `${s}h ago`
  } else if (time < 259200000 && time >= 86400000) {
    s = Math.floor(time / 86400000)
    return `${s}day ago`
  } else {
    let date = typeof param === 'string' || 'object' ? new Date(param) : param
    return formatDate(date, format)
  }
}
export default {
  formatArr,
  formatDate,
  formatPast,
  shuffleArr,
}
