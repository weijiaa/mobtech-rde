export default function (SERVER) {
  return {
    /* 应用列表 */
    SDKQuickMobauthApps: SERVER + '/sdk/mobauth/apps',

    /* 应用列表-导出数据 */
    SDKQuickMobauthAppsExport: SERVER +'/sdk/mobauth/apps/export/to',

    /* 刷新缓存 */
    SDKQuickMobauthAppsAppRefresh: SERVER + '/sdk/mobauth/apps/app/refresh',

    /* 设置/取消 主key */
    SDKQuickMobauthAppsMaster: SERVER + '/sdk/mobauth/apps/master',

    /* 保存 编辑配置 */
    SDKQuickMobauthAppsApp: SERVER + '/sdk/mobauth/apps/app',

    /* 开发者管理 账户列表 */
    SDKQuickMobauthDevelopersAccounts: SERVER + '/sdk/mobauth/developers/accounts',

    /* 设置代理商资格/取消代理商资格 */
    SDKQuickMobauthDevelopersAccountsAgency: SERVER + '/sdk/mobauth/developers/accounts/agency',

    /* 充值消费总计 */
    SDKQuickMobauthDevelopersTotalPrice: SERVER + '/sdk/mobauth/developers/totalPrice',

    /* 修改价格 */
    SDKQuickMobauthDevelopersAccountsAccount: SERVER + '/sdk/mobauth/developers/accounts/account',

    /* 代理详情 */
    SDKQuickMobauthDevelopersAccountsAgencyAgencySubAccounts: SERVER + '/sdk/mobauth/developers/accounts/agency/{devId}/agencySubAccounts',
    
    /* 充值消费记录 */
    SDKQuickMobauthRecordsCategoriesBill: SERVER + '/sdk/mobauth/records/categories/bill',
    
    /* 验证记录 */
    SDKQuickMobauthRecordsCategoriesVerify: SERVER + '/sdk/mobauth/records/categories/verify',

    /* 客户端错误记录 */
    SDKQuickMobauthRecordsCategoriesClientError: SERVER + '/sdk/mobauth/records/categories/clientError',

    /* 访问记录 */
    SDKQuickMobauthRecordsCategoriesAccess: SERVER + '/sdk/mobauth/records/categories/access',
    
    /* 黑名单 */
    SDKQuickMobauthBwlistBlackItems: SERVER + '/sdk/mobauth/bwlist/black/items',

    /* 黑名单-添加 */
    SDKQuickMobauthBwlistBlackItemsAdd: SERVER + '/sdk/mobauth/bwlist/black/items/item',

    /* 黑名单-更新 */
    SDKQuickMobauthBwlistBlackItemsUpdate: SERVER + '/sdk/mobauth/bwlist/black/items/item',

    /* 黑名单-删除 */
    SDKQuickMobauthBwlistBlackItemsDel: SERVER + '/sdk/mobauth/bwlist/black/items/item/{id}',

    /* 白名单 */
    SDKQuickMobauthBwlistWhiteItems: SERVER + '/sdk/mobauth/bwlist/white/items',

    /* 白名单-添加 */
    SDKQuickMobauthBwlistWhiteItemsAdd: SERVER + '/sdk/mobauth/bwlist/white/items/item',

    /* 白名单-更新 */
    SDKQuickMobauthBwlistWhiteItemsUpdate: SERVER + '/sdk/mobauth/bwlist/white/items/item',

    /* 白名单-删除 */
    SDKQuickMobauthBwlistWhiteItemsDel: SERVER + '/sdk/mobauth/bwlist/white/items/item/{id}',

    /* 运营商 平台 - 选项 */
    SDKQuickMobauthTunnelOptionPlat: SERVER + '/sdk/mobauth/tunnel/option/plat',

    /* 秒验 > 运营商管理列表 */
    SDKQuickMobauthTunnelOperators: SERVER + '/sdk/mobauth/tunnel/operators',

    /* 秒验 > 运营商管理 添加 */
    SDKQuickMobauthTunnelOperatorsOperatorAdd: SERVER + '/sdk/mobauth/tunnel/operators/operator',

    /* 秒验 > 运营商管理 更改 */
    SDKQuickMobauthTunnelOperatorsOperatorUpdate: SERVER + '/sdk/mobauth/tunnel/operators/operator',

    /* 秒验 > 协议配置列表*/
    SDKQuickMobauthTunnelProtocols: SERVER + '/sdk/mobauth/tunnel/protocols',

    /* 秒验 > 协议配置列表 新增*/
    SDKQuickMobauthTunnelProtocolsAdd: SERVER + '/sdk/mobauth/tunnel/protocols/protocol',

    /* 秒验 > 协议配置列表 编辑*/
    SDKQuickMobauthTunnelProtocolsUpdate: SERVER + '/sdk/mobauth/tunnel/protocols/protocol',

    /* 秒验 > 协议配置列表 删除*/
    SDKQuickMobauthTunnelProtocolsDel: SERVER + '/sdk/mobauth/tunnel/protocols/protocol/{id}',

    /* 秒验 > 运营商秘钥列表*/
    SDKQuickMobauthTunnelOperatorSecrets: SERVER + '/sdk/mobauth/tunnel/operatorSecrets',

    /* 秒验 >  DEMO列表 */
    SDKQuickMobauthDemos: SERVER + '/sdk/mobauth/demos',

    /* 秒验 > DEMO 刷新缓存 */
    SDKQuickMobauthDemosDemoFlush: SERVER + '/sdk/mobauth/demos/flush',

    /* 秒验 > DEMO 删除 */
    SDKQuickMobauthDemosDemoDel: SERVER + '/sdk/mobauth/demos/demo/{appkey}',

    /* 秒验 > DEMO 添加/编辑 */
    SDKQuickMobauthDemosDemo: SERVER + '/sdk/mobauth/demos/demo',

    SDKQuickMobauthOptionsOperator: SERVER + '/sdk/mobauth/options/operator'
  }
}
