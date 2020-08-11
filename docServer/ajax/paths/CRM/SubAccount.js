export default function (SERVER) {
  return {
    /* 子账号管理 */
    /* 获取 主账号列表 */
    getMainAccountList: SERVER + '/admin/masterList',

    /* 获取 主账号信息 */
    getMainAccountInfo: SERVER + '/admin/devInfo',

    /* 设置开通子账号功能 */
    setMainAccount: SERVER + '/admin/setMaster',

    /* 设置开通子账号功能 */
    getSubDevList: SERVER + '/admin/subDevList',
    
    /* 获取 子账号详情 */
    getSubDevConfig: SERVER + '/admin/devConfig'
  }
}
