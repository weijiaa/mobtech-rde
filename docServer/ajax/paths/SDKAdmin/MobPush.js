export default function (SERVER) {
  return {
    /* 推送列表 */
    SDKPushWorkdetailList: SERVER + '/workdetail/list',

    /* 下发概要 */
    SDKPushPushStats: SERVER + '/push/stats/{id}',
  
    /* 推送详情 */
    SDKPushPushDetail: SERVER + '/push/detail',
  
    /* 应用资料 列表*/
    SDKPushAppList: SERVER + '/app/list',
  
    /* 应用资料 详情 */
    SDKPushAppDetail: SERVER + '/app/detail',
  
    /* 应用资料 编辑 */
    SDKPushAppUpdate: SERVER + '/app/update',
  
    /* 应用资料 下载 */
    SDKPushAppListDownload: SERVER + '/app/list/download', 
  
    /* 设备列表-列表 */
    SDKPushDeviceList: SERVER + '/device/list',
  
    /* SDK配置 服务器列表 */
    SDKPushServerList: SERVER + '/server/list',
  
    /* SDK配置 接口列表 */
    SDKPushInterfaceList: SERVER + '/interface/list',
  
    /* SDK配置 黑白名单配置 */
    SDKPushBlackList: SERVER + '/black/list',
  
    /* SDK配置  新增/更新黑白名单配置*/
    SDKPushBlacklistSave: SERVER + '/blacklist/save',
  
    /* SDK配置 删除 */
    SDKPushBlacklistDelete: SERVER + '/blacklist/delete',
  
    /* 访问记录 */
    SDKPushAccessLogList: SERVER + '/access/log/list',
  
    /* 推送明细 */
    SDKPushPushDetailList: SERVER + '/push/detail/list',
  }
}
