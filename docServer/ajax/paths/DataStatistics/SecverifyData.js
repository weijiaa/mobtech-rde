export default function (SERVER) {
  return {
    /* 日活统计数据 */
    secverifyDailyActive: SERVER + '/statistic/dailyActive',
    /* 日活统计面板 */
    secverifyDailyActiveCompare: SERVER + '/statistic/dailyActiveCompare',
    /* 新增设备数 */
    newlyDevice: SERVER + '/statistic/newly-device',
    /* 新增应用数 */
    newlyApp: SERVER + '/statistic/newly-app',
    /* 验证统计数 */
    getVerify: SERVER + '/statistic/verify',
    /* 应用日活上升/应用日活下降 */
    dailyActiveUpDown: SERVER + '/statistic/dailyActive-upDown',
    /* 日活数据趋势 -- 折线图 */
    dailyActiveGraph: SERVER + '/statistic/tendency/dailyActive-graph',
    /* 验证数据趋势 -- 折线图 */
    verifyGraph: SERVER + '/statistic/tendency/verify-graph',
    /* 设备数据趋势 -- 折线图 */
    deviceGraph: SERVER + '/statistic/tendency/device-graph',
    /* 应用数据趋势 -- 折线图 */
    appGraph: SERVER + '/statistic/tendency/app-graph',
    /* 验证数据趋势 -- 柱状图 */
    verifyHistogram: SERVER + '/statistic/tendency/verify-histogram',
    /* 验证数据趋势 -- 表格 */
    verifyTable: SERVER + '/statistic/tendency/verify-table',
    /* 开发者数据列表 */
    developers: SERVER + '/statistic/developers',
    /* 开发者统计数据 -- 折线图数据 */
    developerDetailGraph: SERVER + '/statistic/developers/developer/graph',
    /* 开发者统计数据 -- 表格数据 */
    developerDetailTable: SERVER + '/statistic/developers/developer/table',
    /* 开发者统计数据 -- 成本、消费、余额 */
    developerDetailDesc: SERVER + '/statistic/developers/developer/cost-monetary',
    /* 应用统计数据 -- 折线图数据 */
    appDetailGraph: SERVER + '/statistic/apps/app/verify-graph',
    /* 应用统计数据 -- 表格数据 */
    appDetailTable: SERVER + '/statistic/apps/app/verify-table',
    /* 应用数据列表 */
    secverifyApps: SERVER + '/statistic/apps',
    /* 应用数据列表 -- 精确 */
    secverifyAppsExact: SERVER + '/statistic/apps/exact',
    /* 应用数据列表 -- 范围 */
    secverifyAppsRang: SERVER + '/statistic/apps/range',
    /* 应用统计数据 -- 成本、消费、余额 */
    appDetailDesc: SERVER + '/statistic/apps/app/cost',
    /* 应用秒验统计数据 -- 日活表格 */
    appDetailActiveTable: SERVER + '/statistic/apps/app/dailyActive-table',
    /* 应用秒验统计数据 -- 日活折线 */
    appDetailActiveGraph: SERVER + '/statistic/apps/app/dailyActive-graph',
    /* 数据概览静态数据 -- 累计成本与消费和昨日验证数统计 */
    costMonetaryVerify: SERVER + '/statistic/cost-monetary-verify',
  }
}
