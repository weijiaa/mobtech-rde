import axios from 'axios';
import paths from './paths';

const loginURL = {
  dev: 'http://ids.fe.beta.mob.com/?entry=' + window.location.href,
  test: 'http://ids.fe.beta.mob.com/?entry=' + window.location.href,
  prod: 'http://id.aaa.mob.com//?entry=' + window.location.href,
}[RUNTIME_ENV];

/**
 * 创建单例计数器
*/
const counter = (function () {
  let counter = null;

  return (function () {
    if(counter !== null) {
      return counter;
    }

    const countMap = {};
    const taskList = {};

    counter = {
      getValue(key) {
        return countMap[key];
      },
      setValue(key, value) {
        if(countMap[key] === value) {
          return ;
        }
        countMap[key] = value;
        taskList[key] && taskList[key].forEach(fn => fn(value));
      },
      setTask(key, fn) {
        if(taskList[key] === undefined) {
          taskList[key] = [];
        }
        taskList[key].push(fn);
      }
    };

    return counter;
  })();
})();

/**
 * 请求拦截器
 * @param {object} config
 */ 
function requestInterceptors(config) {


  return config;
}

/**
 * 请求异常处理
 * @param {error} error
*/
function requestErrorProcessor(error) {
  return Promise.reject(error);
}

/**
 * 响应拦截器
 * @param {object} response
 */ 
function responseInterceptors(response) {
  const res = response.data || {};
  if (res.code == 4005) {

    setTimeout(() => {
      window.location.href = loginURL
    }, 1000);

    return;
  }

  return res || {};
}

/**
 * 响应异常处理
 * @param {error} error
*/
function responseErrorProcessor(error) {
  const data = error?.response?.data || {};
  if(data === 'token is error' || data === 'token is null') {

    setTimeout(() => {
      window.location.href = loginURL
    }, 1000);
  }
  return Promise.reject(error);
}

/**
 * @param {string} requestMethod - 请求方式
 * @param {string} counterKey - 请求标识
 * @return {axios} axios实例
*/
function createAxios(requestMethod, counterKey) {
  const axiosConfig = {
    timeout: 300000
  };
  const fetch = axios.create(axiosConfig);

  fetch.interceptors.request.use(
    config => {
      counter.setValue(counterKey, (counter.getValue(counterKey) || 0)+1);
      return requestInterceptors(config);
    },
    error => {
      return requestErrorProcessor(error);
    }
  );

  fetch.interceptors.response.use(
    response => {
      const counterValue = counter.getValue(counterKey);
      counterValue && counter.setValue(counterKey, counterValue-1);
      return responseInterceptors(response);
    },
    error => {
      const counterValue = counter.getValue(counterKey);
      counterValue && counter.setValue(counterKey, counterValue-1);
      return responseErrorProcessor(error);
    }
  );

  return fetch[requestMethod];
}

/**
 * @param {string} method - 请求方式
 * @return {function} 请求实例
*/
function Request(method) {
  return function (url, params, headers, type="default_loading") {
    if(method === 'get') {
      return createAxios('get', type)(url, {params, headers});
    }

    return createAxios(method, type)(url, params, {headers});
  }
}

/**
 * 属性拦截
*/
const requestHandler = {
  get: function (target, key) {
    if(key === '$setHeader') {
      return appendHeaders => new Proxy(
        (url, params, headers, type) => target(url, params, {...headers, ...appendHeaders}, type),
        requestHandler
      );
    }

    return function () {
      let [params={}, type] = arguments;
      let path = paths[key];

      Object.keys(params).forEach(key => {
        if(/\{(.+?)\}/.test(key)) {
          path = path.replace(RegExp(key, 'g'), params[key]);
          delete params[key];
        }
      });

      return target.apply(this, [path, params, {}, type]);
    }.bind(this);
  }
}

const $POST   = new Proxy(new Request('post'), requestHandler);
const $DELETE = new Proxy(new Request('delete'), requestHandler);
const $PUT    = new Proxy(new Request('put'), requestHandler);
const $GET    = new Proxy(new Request('get'), requestHandler);

export {
  counter,
  $POST,
  $DELETE,
  $PUT,
  $GET,
  loginURL,
  paths as $PATHS 
}
