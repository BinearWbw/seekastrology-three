/*
 * @Date: 2023-06-07 09:43:31
 * @LastEditors: tianjun
 * @LastEditTime: 2023-06-07 10:05:07
 * @FilePath: /seekastrology/api/apiList/tarot.js
 * @Description: 
 */
export default (axios) => ({
    /* 塔罗牌列表 */
    getTarotList(params) {
        return axios.get('api/tarot', { params })
    },
    /**
     * 抽牌
     * @param type 类型:1-爱情、2-事业、3-通用、4-日常
     * @returns 
     */
    drawTarot(params) {
        return axios.get('api/tarot/cards', { params })
    },
    /**
     * 塔罗牌详情
     * @param {*} id
     * @returns 
     */
    getDetail(params) {
        return axios.get('api/tarot/detail', { params })
    },
    // postSubscribe(data) {
    //   return axios.post('api/subscribe', data)
    // }
})
