export default (axios) => ({
    /* 推荐资讯 */
    getNewsRec(params) {
      return axios.get('api/news/rec', { params })
    },
})