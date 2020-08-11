export default function (SERVER) {
  return {
    /* 审核充值订单 */
    balanceRechargeSet: SERVER + '/balance/recharge/set',

    /* 添加充值订单 */
    balanceRecharge: SERVER + '/balance/recharge',

    /* 上传图片 */
    balanceFileUploadFile: SERVER + '/file/uploadFile',

    /* 线上充值列表 */
    balanceOnlineRechargeListList: SERVER + '/balance/onlineRechargeList/list',

    /* 线下充值列表 */
    balanceRechargeList: SERVER + '/balance/recharge/list',
  }
}
