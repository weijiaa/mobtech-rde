export default function (SERVER) {
  return {
    /* 应用列表 */
    mobLinksApps: SERVER + '/scs/apps',

    /* 短链查询 */
    mobLinkLinkID: SERVER + '/scs/link',

    /* 测试用的看到请删除 */
    mobLinkTest: SERVER + '/test/test/{id}',
  }
}
