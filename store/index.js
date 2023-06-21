export const state = () => ({
  intersperseUrl: 'https://www.seekastrology.com',
  toastCfg: {
    position: 'bottom-left',
    timeout: 3000,
    closeOnClick: false,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    draggable: false,
    draggablePercent: 0.6,
    showCloseButtonOnHover: true,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    rtl: false,
  },
})
export const getters = {
  getIntersperseUrl(state) {
    return state.intersperseUrl
  },
}
export const mutations = {
  UPDATE_INTERSPERSE_URL(state, payload) {
    state.intersperseUrl = payload
  },

}
export const actions = {
  toast({ state }, res) {
    if (process.client) {
      this.$toast[res.type ? res.type : 'info'](res.msg, state.toastCfg)
    }
  },

}
