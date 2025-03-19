import axios from "axios";
import { BASE_URL } from "@/constants";

/**
 * 创建 Axios 示例
 */
const request = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
});

/**
 * 创建请求拦截器
 */
request.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("henu-next-token");
    if (token) {
      // @ts-ignore
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    // 请求执行前执行
    return config;
  },
  function (error) {
    // 处理请求错误
    return Promise.reject(error);
  },
);

/**
 * 创建响应拦截器
 */
request.interceptors.response.use(
  // 2xx 响应触发
  function (response) {
    // 处理响应数据
    const { data } = response;
    // 未登录
    if (data.code === 40100) {
      // 不是获取用户信息接口，或者不是登录页面，则跳转到登录页面
      if (
        !response.request.responseURL.includes("user/get/login") &&
        !window.location.pathname.includes("/user/login")
      ) {
        window.location.href = `/user/login?redirect=${window.location.href}`;
      }
    }
    return data;
  },
  // 非 2xx 响应触发
  function (error) {
    // 处理响应错误
    return Promise.reject(error);
  },
);

export default request;
