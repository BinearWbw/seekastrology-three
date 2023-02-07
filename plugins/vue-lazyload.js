import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

export default () => {
  if (Vue._use_components_lazyload) {
    return
  }
  Vue._use_components_lazyload = true
  Vue.use(VueLazyLoad, {
    attempt: 1,
  })
}
