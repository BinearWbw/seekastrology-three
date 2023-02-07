import apiList from '@/api/index'
export default ({ $axios, error: nuxtError }, inject) => {
  $axios.defaults.timeout = 30000
  $axios.onRequest((config) => {
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
  })
  $axios.onResponse((response) => {
    if (response.status === 200) {
      const res = response.data
      if (!res.code) {
        return res.data
      }
      return Promise.reject(res)
    } else {
      return Promise.reject(response)
    }
  })
  $axios.onError((error) => {
    if (error.response) {
      nuxtError({
        statusCode: error.response.status,
        message: error.message,
      })
    } else {
      nuxtError({
        statusCode: error.status,
        message: error.message,
      })
    }
    return Promise.resolve(false)
  })
  var apiObject = {}
  for (var i in apiList) {
    apiObject[i] = apiList[i]($axios)
  }
  inject('apiList', apiObject)
}
