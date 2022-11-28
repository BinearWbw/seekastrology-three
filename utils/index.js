const copyObject = (obj) => {
  let newObj = {}
  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      newObj[key] = copyObject(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
const copyArray = (arr) => {
  let newArr = []
  arr.map((item) => {
    newArr.push(item)
  })
  return newArr
}
const formatArr = (data, boolean) => {
  return (a, b) => {
    var value1 = a[data]
    var value2 = b[data]
    if (boolean) {
      return value1 - value2
    } else {
      return value2 - value1
    }
  }
}
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
const getLocalData = (id) => {
  let num = Number(id)
  let favoriteGame = JSON.parse(localStorage.getItem('favoriteGame')) || []
  return favoriteGame.includes(num)
}
const setLocalData = (id, isFavorite) => {
  let num = Number(id)
  let favoriteGame = JSON.parse(localStorage.getItem('favoriteGame')) || []
  if (isFavorite) {
    if (favoriteGame.includes(num)) {
      return false
    } else {
      favoriteGame.push(num)
    }
  } else {
    if (favoriteGame.includes(num)) {
      favoriteGame.splice(favoriteGame.indexOf(num), 1)
    } else {
      return false
    }
  }
  localStorage.setItem('favoriteGame', JSON.stringify(favoriteGame))
}
export default {
  getLocalData,
  setLocalData,
  formatArr,
}
