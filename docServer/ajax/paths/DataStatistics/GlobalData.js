export default function (SERVER) {
  return {
    /* Overview 概览页 */
    /* 获取 开发者趋势 面板数据 */
    OVdeviDauP: SERVER + '/dashboard/deviceDauPanel',

    /* 获取 开发者趋势 折线图数据 */
    OVdeviDau: SERVER + '/dashboard/deviceDau',

    /* 获取 新增设备、应用、开发者、应用包数 */
    OVsdkTrend: SERVER + '/dashboard/sdkTrend',

    /* 获取 新增设备、应用、开发者、应用包数 */
    OVsdkTrendDetail: SERVER + '/dashboard/sdkTrendDetail',

    /* 获取 开发者 日、周、月活 上升/下降 TOP10 */
    OVdevDauT: SERVER + '/dashboard/developerDauTop',

    /* 获取 应用 日、周、月活 上升/下降 TOP10 */
    OVappDauT: SERVER + '/dashboard/appDauTop',

    /* 获取 SDK 日、周、月活 同比/累加同比 */
    OVsdkDauT: SERVER + '/dashboard/sdkDauTrend',

    /* DataTrend 数据趋势页 */
    /* 获取 设备日活、日活累加、设备新增、设备总量 折线图数据 */
    DTdatTre: SERVER + '/trend/dataTrend',

    /* 获取 设备日活、日活累加、设备新增、设备总量 表格数据 */
    DTdatTab: SERVER + '/trend/dataTable',

    /* 获取 开发者趋势 折线图数据 */
    DTdevTre: SERVER + '/trend/developerTrend',

    /* 获取 开发者趋势 表格数据 */
    DTdevTab: SERVER + '/trend/developerTable',

    /* 获取 应用趋势 折线图数据 */
    DTappTre: SERVER + '/trend/appTrend',

    /* 获取 应用趋势 表格数据 */
    DTappTab: SERVER + '/trend/appTable',

    /* 获取 应用等级趋势 折线图数据 */
    DTappLevTre: SERVER + '/trend/appLevelTrend',

    /* 获取 应用等级趋势 表格数据 */
    DTappLevTab: SERVER + '/trend/appLevelTable',

    /* 获取 应用包趋势 折线图数据 */
    DTpkgTre: SERVER + '/trend/pkgTrend',

    /* 获取 应用包趋势 表格数据 */
    DTpkgTab: SERVER + '/trend/pkgTable',

    /* DeveloperStatistics 开发者统计页 */
    /* 获取 开发者详情 表格数据 */
    DEVdetTab: SERVER + '/developer/detailTable',

    /* 获取 开发者详情 折线图数据 */
    DEVappTre: SERVER + '/developer/appTrend',

    /* 获取 开发者统计 面板数据 */
    DEVdataP: SERVER + '/developer/dataPanel',

    /* 获取 开发者统计 认证数量分布饼图数据 */
    DEVCert: SERVER + '/developer/cert',

    /* 获取 开发者统计 表格数据 */
    DEVdataT: SERVER + '/developer/dataTable',

    /* AppStatistics 应用统计页 */
    /* 获取 集成SDK分布 饼图数据 */
    APPInterg: SERVER + '/app/integration',

    /* 获取 应用统计 面板数据 */
    APPPanel: SERVER + '/app/dataPanel',

    /* 获取 等级分布 饼图数据 */
    APPLevel: SERVER + '/app/level',

    /* 获取 应用统计 表格数据 */
    APPDataT: SERVER + '/app/dataTabel',

    /* 获取 应用明细 表格数据 */
    APPDetailT: SERVER + '/app/detailTable',

    /* 获取 应用明细 折线图数据 */
    APPAnalysis: SERVER + '/app/analysis',

    // 数据获取趋势-用户信息收集统计
    UserInfoTrend: SERVER + '/collect/userInfoTrend',

    // 数据获取趋势-APP信息收集统计
    AppTrend: SERVER + '/collect/appTrend',

    // 看板app信息
    BoardAppInfo: SERVER + '/displayBoard/appInfo',

    // 看板总信息
    BoardTotal: SERVER + '/displayBoard/total',

    // 充值消费数据
    billList: SERVER + '/bill/list',

    // top2000列表
    top2KSdkInfo: SERVER + '/app/sdkInfo',
    
    // top2000列表
    top2KSdkInfoStatic: SERVER + '/app/sdkInfoStatic'
  }
}
