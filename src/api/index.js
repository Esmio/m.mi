let host = 'http://localhost:8080'
let { NODE_ENV, VUE_APP_API } = process.env
let apiPrefix = '/api/v1'
// if (NODE_ENV === 'development' || (NODE_ENV === 'production' && VUE_APP_API === 'rap')) {
//   host = 'http://rap2api.taobao.org/app/mock/13801'
// }

const url = {
  login: {
    method: 'post',
    path: apiPrefix + '/site/login',
    implemented: true
  },
  // logout: '/user/logout',
  userInfo: {
    method: 'get',
    path: apiPrefix + '/user',
    implemented: true
  },
  // getCode: '/user/getCode',
  // navList: '/home/navList',
  // homePage: '/home/homePage',
  // category: '/home/category',
  // commodity: '/home/commodityList',
  // forRecommend: '/home/forRecommend',
  // productView: '/product/productView',
  // recommend: '/product/recommend',
  // estDelivery: '/product/estDelivery',
  // cartIndex: '/cart/index',
  // cartSelect: '/cart/selcart',
  // cartEdit: '/cart/edit',
  // cartAdd: '/cart/add',
  // cartDelete: '/cart/del',
  // cartSelService: '/cart/selService',
  // cartCount: '/cart/count',
  addressList: {
    method: 'get',
    path: apiPrefix + '/address',
    implemented: true
  },
  addressAdd: {
    method: 'post',
    path: apiPrefix + '/address',
    implemented: true
  },
  addressSave: {
    method: 'patch',
    path: apiPrefix + '/address/:id',
    implemented: true
  },
  addressView: {
    method: 'get',
    path: apiPrefix + 'address/:id',
    implemented: true
  },
  addressDel: {
    method: 'delete',
    path: apiPrefix + '/address/:id',
    implemented: true
  }
  // addressAll: '/address/all'
  // addressRegion: '/address/region',
  // orderCheckout: '/order/checkout',
  // orderList: '/order/list',
  // orderView: '/order/view'
}

Object.keys(url).forEach(key => {
  if (!url[key].path) url[key].path = '/'
  url[key].path = host + url[key].path
})

export default url
