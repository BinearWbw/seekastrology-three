import axios from 'axios'
const addRoutes = async () => {
  let routes = []
  let res2 = await axios.get(
    'http://47.108.105.189:3000/api/news/all?origin=seekastrology&page=1&size=10000'
  )
  res2.data.data.list.map((item) => {
    routes.push(`/resources/details/${item.name.trim().replace(/\?/g, '').replace(/\s+/g, '-').toLowerCase()}-${item.id}/`)
  })
  let res1 = await axios.get(
    'http://47.108.105.189:3000/api/quiz/all?origin=seekastrology&page=1&size=10000'
  )
  res1.data.data.list.map((item) => {
    routes.push(`/test/details/${item.name.trim().replace(/\?/g, '').replace(/\s+/g, '-').toLowerCase()}-${item.id}/`)
  })

  let res3 = await axios.get(
    'http://47.108.105.189:3000/api/astro/all?origin=seekastrology&page=1&size=10000'
  )
  res3.data.data.map((item) => {
    routes.push(
      `/zodiac/details/${item.name
        .replace(/[^a-zA-Z0-9\\s]/g, '-')
        .toLowerCase()}-${item.id}/`
    )
  })
  return routes
}
let routes = addRoutes()
export default routes
