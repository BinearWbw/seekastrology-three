import axios from 'axios'
const addRoutes = async () => {
  let routes = []
  let res2 = await axios.get(
    'http://47.108.105.189:3000/api/news/all?origin=seekastrology&page=1&size=10000'
  )
  res2.data.data.list.map((item) => {
    routes.push(`/resources/details/${item.name.replace(/[^a-zA-Z0-9\\s]/g, '-').toLowerCase()}-${item.id}/`)
  })
  // let res1 = await axios.get(
  //   'https://api.taptogame.com/api/sitemap/games?origin=taptogame'
  // )
  // res1.data.data.map((item) => {
  //   const encodedName = item.name.replace(/[^a-zA-Z0-9\\s]/g, '-').toLowerCase()
  //   routes.push(`/game/${encodedName}-${item.id}`)
  //   routes.push(`/download/${encodedName}-${item.id}`)
  // })
  return routes
}
let routes = addRoutes()
export default routes
