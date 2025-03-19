// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** getCaptcha POST /api/captcha/captcha */
export async function getCaptchaUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseCaptcha_>("/api/captcha/captcha", {
    method: "POST",
    ...(options || {}),
  });
}

/** checkCaptchaCode POST /api/captcha/check */
export async function checkCaptchaCodeUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkCaptchaCodeUsingPOSTParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/captcha/check", {
    method: "POST",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** createCaptcha GET /api/captcha/create */
export async function createCaptchaUsingGet(options?: { [key: string]: any }) {
  return request<any>("/api/captcha/create", {
    method: "GET",
    ...(options || {}),
  });
}
