
import axios from 'axios';
import Qs from 'qs'
import { Toast } from 'antd-mobile';
function showLoading() {
  Toast.loading('加载中', 0);
}
function hideLoading() {
  Toast.hide();
}

const service = axios.create({
  timeout: 15000,
  baseURL: process.env.REACT_APP_BASE_API
});

service.interceptors.request.use(config => {
  // if(config.data) config.data.token = getToken()
  if (config.bUrl) config.baseURL = config.bUrl
  if (config.isForm) config.data = Qs.stringify(config.data)
 
 
  showLoading();
  return config;
}, error => {
  console.log(error);
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
  response => {
    hideLoading();
    const res = response.data;
    if (res.hasOwnProperty('status') && res.status !== 200) {
      console.log(999)
      Toast.fail(res.msg, 1);
      return Promise.reject(res.msg)
    }
    if (res.hasOwnProperty('errno') && res.errno !== 0) {
      Toast.fail(res.errmsg, 1);
      return Promise.reject(res.errmsg)
    }
    return res;
  },
  error => {
    hideLoading();
    console.log('err' + error);
    Toast.fail('请求错误，刷新重试', 1);
    return Promise.reject(error);
  }
);

export default service;


