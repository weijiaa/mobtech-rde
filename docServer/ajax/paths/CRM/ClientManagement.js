export default function (SERVER) {
  return {
    /* 公共-城市树状图 */
    commonProvinceCityList: SERVER + '/common/provinceCity/list',
    
    /* 公共-开发者列表 */
    commonDeveloperList: SERVER + '/common/developer/list',

    /* 公共-获取部门人员列表 */
    commonOrgUsersList: SERVER + '/common/org/users/list',

    /* 公共-跟进团队人员列表 */
    commonPersonList: SERVER + '/common/person/list',

    /* 客户管理-开发者-列表 */
    customerDeveloperList: SERVER + '/customer/developer/list',
    
    /* 客户管理-开发者-更新备注 */
    customerDeveloperRemarkEdit: SERVER + '/customer/developer/remark/edit',

    /* 客户管理-开发者-下载SDK信息列表 */
    customerDeveloperDownloadList: SERVER + '/customer/developer/download/list',

    /* 客户管理-开发者-登录列表 */
    customerDeveloperLoginList: SERVER + '/customer/developer/login/list',

    /* 客户管理-开发者-详情 */
    customerDeveloperInfo: SERVER + '/customer/developer/info',

    /* 收藏/取消收藏 */
    customerDeveloperCollect: SERVER + '/customer/developer/collect',

    /* 客户管理-开发者-跟进团队-列表 */
    customerDeveloperPersonList: SERVER + '/customer/developer/person/list',

    /* 客户管理-开发者-跟进团队-新增 */
    customerDeveloperPersonAdd: SERVER + '/customer/developer/person/add',

    /* 客户管理-开发者-跟进团队-编辑 */
    customerDeveloperPersonEdit: SERVER + '/customer/developer/person/edit',

    /* 客户管理-开发者-跟进团队-删除 */
    customerDeveloperPersonDel: SERVER + '/customer/developer/person/del',

    /* 客户管理-开发者-跟进团队-列表 */
    customerDeveloperContactList: SERVER + '/customer/developer/contact/list',

    /* 客户管理-开发者-跟进团队-新增 */
    customerDeveloperContactAdd: SERVER + '/customer/developer/contact/add',

    /* 客户管理-开发者-跟进团队-编辑 */
    customerDeveloperContactEdit: SERVER + '/customer/developer/contact/edit',

    /* 客户管理-开发者-跟进团队-删除 */
    customerDeveloperContactDel: SERVER + '/customer/developer/contact/del',

    /* 客户管理-开发者认证-列表 */
    customerDeveloperCertList: SERVER + '/customer/developer/cert/list',

    /* 客户管理-开发者认证-详情 */
    customerDeveloperCertInfo: SERVER + '/customer/developer/cert/info',

    /* 客户管理-开发者认证-审核 */
    customerDeveloperCertUpdate: SERVER + '/customer/developer/cert/update',

    /* 客户管理-开发者&应用-跟进记录-编辑 */
    customerDeveloperFollowEdit: SERVER + '/customer/developer/follow/edit',

    /* 客户管理-开发者&应用-跟进记录-删除 */
    customerDeveloperFollowDel: SERVER + '/customer/developer/follow/del',

    /* 客户管理-开发者&应用-跟进记录-列表 */
    customerDeveloperFollowList: SERVER + '/customer/developer/follow/list',

    /* 客户管理-开发者&应用-跟进记录-详情 */
    customerDeveloperFollowInfo: SERVER + '/customer/developer/follow/info',

    /* 客户管理-开发者&应用-跟进记录-新增 */
    customerDeveloperFollowAdd: SERVER + '/customer/developer/follow/add',

    /* 客户管理-应用-设为KA */
    customerAppKa: SERVER + '/customer/app/ka',

    /* 客户管理-应用-列表 */
    customerAppList: SERVER + '/customer/app/list',

    /* 客户管理-应用-详情 */
    customerAppInfo: SERVER + '/customer/app/info',

    /* 客户管理-应用-应用名字-更新 */
    customerAppStorenameEdit: SERVER + '/customer/app/storename/edit',

    /* 客户管理-应用-非法appk列表 */
    customerAppErrorList: SERVER + '/customer/app/error/list',

    /* 客户管理-发票-列表 */
    customerInvoiceList: SERVER + '/customer/invoice/list',

    /* 客户管理-发票-驳回 */
    customerInvoiceReject: SERVER + '/customer/invoice/reject',

    /* 客户管理-发票-通过 */
    customerInvoiceAdopt: SERVER + '/customer/invoice/adopt',
  }
}
