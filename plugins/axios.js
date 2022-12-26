import apiList from '@/api/index'
export default ({ $axios }, inject) => {
  $axios.defaults.timeout = 20000
  $axios.interceptors.request.use(
    (config) => {
      let url = config.url
      if (config.method === 'get' && config.params) {
        url += '?'
        Object.keys(config.params).map((key) => {
          url += `${key}=${encodeURIComponent(config.params[key])}&`
        })
        url = url.substring(0, url.length - 1)
        config.params = {}
      }
      config.url = url
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  $axios.interceptors.response.use(
    (response) => {
      if (response.status === 200) {
        const res = response.data
        if (!res.code) {
          return res.data
        }
        return Promise.reject(res)
      } else {
        return Promise.reject(response)
      }
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
