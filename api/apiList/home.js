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
  /* 最近热门 */
  getGameNew(params) {
    return axios.get('api/game/new', { params })
  },
  /* 游戏搜索 */
  getGameSearch(params) {
    return axios.get('api/game/search', { params })
  },
  /* 邮箱订阅 */
  postSubscribe(data) {
    return axios.post('api/subscribe', data)
  },
  /* 分类游戏 */
  getGameMenu(params) {
    return axios.get('api/game/menu', { params })
  },
  /* 游戏评论列表 */
  getGameComment(params) {
    return axios.get('api/game/comment', { params })
  },
  /* 游戏评论 */
  postGameComment(data) {
    return axios.post('api/game/comment', data)
  },
})
