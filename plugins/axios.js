import apiList from '@/api/index'
export default ({ $axios }, inject) => {
  $axios.defaults.timeout = 20000
  $axios.interceptors.request.use(
    (config) => {
      // config.headers['Authorization'] = $cookies.get('Authorization') || ''
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  $axios.interceptors.response.use(
    (response) => {
      const res = response.data
      if (!res.code) {
        return res.data
      }
      return Promise.reject(res)
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  var apiObject = {}
  for (var i in apiList) {
    apiObject[i] = apiList[i]($axios)
  }
  inject('apiList', apiObject)
}
