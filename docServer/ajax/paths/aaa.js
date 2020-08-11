export default function (SERVER) {
  return {
    /* 登出 */
    logout: SERVER + '/logout',
    
    /* 获取用户页面权限 */
    getPageAuthByUserAndProduct: SERVER + '/getPageAuthByUserAndProduct'
  }
}
