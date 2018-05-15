import axios from 'axios';
import {baseUrl} from "../config/env";
import {setEncrypt} from "../config/rsaAndBase64";

import {setStore, getStore, removeStore} from '../config/mUtils';

export function myAxios(url, dataList = null, type = 'post') {
  // let _url = baseUrl + url;
  // let data = [];
  let dataStr = ''; //数据拼接字符串
  Object.keys(dataList).forEach(key => {
    dataStr += key + '=' + dataList[key] + '&';
  });
  dataStr = dataStr.slice(0, dataStr.length - 1);
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
      // 跨域请求 这个配置不能少
      // "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      // 'Accept': 'application/json',
      // 'CODE-TOKEN': getStore('CODE-TOKEN')
    }
  });
  instance.interceptors.request.use(
    config => {
      // if(getStore('CODE-TOKEN') {
        config.headers.CODETOKEN = `${getStore('CODETOKEN')}`;
      // }
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );

  if (type === 'post') {
    return new Promise((resolve, reject) => {
      instance({
        method: type,
        url: url,
        data: dataStr
      }).then(function (response) {
        resolve(response.data)
      }).catch(function (err) {
        reject(err)
      })
    })
  } else if (type === 'get') {
    return new Promise((resolve, reject) => {
      instance({
        method: type,
        url: url,
        data: dataStr
      }).then(function (response) {
        resolve(response.data)
      }).catch(function (err) {
        reject(err)
      })
    })
  }
}

/**
 * 图片 验证码
 * @returns {PromiseLike<T> | Promise<T> | *}
 */
export const getcaptchas = () => myAxios('/code/index', {}, 'get').then((res) => {
  setStore('CODETOKEN', res.code_token);
  return res
}, (err) => {
  removeStore('CODE-TOKEN');
  return err
});

/**
 * 免费 注册
 * @returns {PromiseLike<T> | Promise<T> | *}
 */
export const registerAccount = (opt) => myAxios('/user/reg', opt, 'post').then((res) => {
  return res
}, (err) => {
  return err
});

/**
 * 账号登录
 * @returns {PromiseLike<T> | Promise<T> | *}
 */
export const loginAccount = () => myAxios('/reg/index', {}, 'post').then((res) => {
  return res
}, (err) => {
  return err
});



