export const state = () => ({
  slideActive: false,
  visibleSearch: false,
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
  getSlideActive(state) {
    return state.slideActive
  },
  getVisibleSearch(state) {
    return state.visibleSearch
  },
}
export const mutations = {
  UPDATE_SLIDE_ACTIVE(state) {
    state.slideActive = !state.slideActive
  },
  UPDATE_VISIBLE_SEARCH(state, payload) {
    state.visibleSearch = payload
  },
}
export const actions = {
  // async nuxtServerInit({ commit }, { query, $cookies, $apiList }) {
  //   if (query.InvitationCode) {
  //     commit("UPDATE_INVITATION_CODE", query.InvitationCode);
  //   }
  //   if ($cookies.get("Authorization")) {
  //     await $apiList.common
  //       .getCommonUserinfo()
  //       .then((res) => {
  //         $cookies.set("ID", res.id);
  //         if (res.steamTradeLink) {
  //           res.steamTradeLink = res.steamTradeLink.replace(
  //             /(.{53}).{6}(.{10}).{6}(.{1})/,
  //             "$1******$2******$3"
  //           );
  //         }
  //         commit("UPDATE_USERINFO", res);
  //         commit("UPDATE_IS_LOGIN", true);
  //       })
  //       .catch(() => {
  //         $cookies.removeAll();
  //         commit("UPDATE_IS_LOGIN", false);
  //         commit("UPDATE_USERINFO", null);
  //       });
  //   }
  // },

  toast({ state }, res) {
    if (process.client) {
      this.$toast[res.type ? res.type : 'info'](res.msg, state.toastCfg)
    }
  },
}
