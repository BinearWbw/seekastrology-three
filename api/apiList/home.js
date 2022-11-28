export default (axios) => ({
  /* 主页 */
  getGameHome(params) {
    return axios.get('api/game/home', { params })
  },
  /* 获取分类 */
  getCategory(params) {
    return axios.get('api/category', { params })
  },
  /* 获取分类下游戏 */
  getGameCategory(params) {
    return axios.get('api/game/category', { params })
  },
  /* 游戏详情 */
  getGameDetail(params) {
    return axios.get('api/game/detail', { params })
  },
  /* 我的喜欢 */
  getGameFavorite(params) {
    return axios.get('api/game/favorite', { params })
  },
  /* 最近热门 */
  getGameNew(params) {
    return axios.get('api/game/new', { params })
  },
  /* 最近访问 */
  getGameRecent(params) {
    return axios.get('api/game/recent', { params })
  },
  /* 喜欢游戏 */
  postGameVote(data) {
    return axios.post('api/game/vote', data)
  },
  /* 游戏搜索 */
  getGameSearch(params) {
    return axios.get('api/game/search', { params })
  },
  /* 邮箱订阅 */
  postSubscribe(data) {
    return axios.post('api/subscribe', data)
  },
})
