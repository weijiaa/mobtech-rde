import aaa from './aaa.js';
import { GlobalData, SecverifyData } from './DataStatistics';
import { MobPush, QuickVerify, MobLink } from './SDKAdmin';
import { SubAccount, ClientManagement, Finance, Auth } from './CRM';

const SERVER_AAA = {
  dev: 'http://api.id.aaa.test.mob.com',
  test: 'http://api.id.aaa.test.mob.com',
  prod: 'http://api.id.aaa.mob.com'
};

const SERVER_STAT = {
  dev: 'http://api.sac.test.mob.com/api',
  test: 'http://api.sac.test.mob.com/api',
  prod: 'http://api.sac.mob.com/api'
}

const SERVER_SDK_PUSH = {
  dev: 'http://api.scs.test.mob.com',
  test: 'http://api.scs.test.mob.com',
  prod: 'http://api.scs.mob.com'
}
const SERVER_SUB_ACCOUNT = {
  dev: 'http://sdk.inner.test.mob.com/api',
  test: 'http://sdk.inner.test.mob.com/api',
  prod: 'https://webapi.accuratead.cn/api'
}

const SERVER_SDK_QUICK = {
  dev: 'http://api.scs.test.mob.com',
  test: 'http://api.scs.test.mob.com',
  prod: 'http://api.scs.mob.com'
}

const SERVER_SDK_MOBLINK = {
  dev: 'http://10.18.97.172:8882',
  test: 'http://10.18.97.172:8882'
}

const SERVER_CRM = {
  dev: 'http://api.sac.test.mob.com/api',
  test: 'http://api.sac.test.mob.com/api',
  prod: 'http://api.sac.mob.com/api'
}

const SERVER_SECVERIFY = {
  dev: 'http://api.scs.test.mob.com',
  test: 'http://api.scs.test.mob.com',
  prod: 'http://api.scs.mob.com'
}

const SERVER_FINANCE = {
  dev: 'http://api.scs.test.mob.com',
  test: 'http://api.scs.test.mob.com',
  prod: 'http://api.scs.mob.com'
}

const SERVER_AUTH = {
  dev: 'http://internal.aaa.test.mob.com',
  test: 'http://internal.aaa.test.mob.com',
  prod: 'http://internal.test.mob.com'
}

const paths = {
  ...aaa(SERVER_AAA[RUNTIME_ENV]),
  ...GlobalData(SERVER_STAT[RUNTIME_ENV]),
  ...MobPush(SERVER_SDK_PUSH[RUNTIME_ENV]),
  ...SubAccount(SERVER_SUB_ACCOUNT[RUNTIME_ENV]),
  ...ClientManagement(SERVER_CRM[RUNTIME_ENV]),
  ...QuickVerify(SERVER_SDK_QUICK[RUNTIME_ENV]),
  ...MobLink(SERVER_SDK_MOBLINK[RUNTIME_ENV]),
  ...SecverifyData(SERVER_SECVERIFY[RUNTIME_ENV]),
  ...Finance(SERVER_FINANCE[RUNTIME_ENV]),
  ...Auth(SERVER_AUTH[RUNTIME_ENV])
}

export default paths;
