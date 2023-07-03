import axios from './config'

export const getSwiperList = () => {
    return axios.get('/swiperList')
}
export const getMoreList = () => {
    return axios.get('/moreList')
}
export const getProductList = () => {
    return axios.get('/productList')
}
export const getnoteList = () => {
    return axios.get('/noteList')
}
export const getcommentList = () => {
    return axios.get('/commentList')
}
export const getwaterfallL = () => {
    return axios.get('/waterfallL')
}
export const getwaterfallR = () => {
    return axios.get('/waterfallR')
}
export const getdetail = () => {
    return axios.get('/detail')
}