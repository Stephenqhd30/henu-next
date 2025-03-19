// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addAuth POST /api/auth/add */
export async function addAuthUsingPost(
  body: API.AuthAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/auth/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteAuth POST /api/auth/delete */
export async function deleteAuthUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/auth/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getAuthVOById GET /api/auth/get/vo */
export async function getAuthVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAuthVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseAuthVO_>("/api/auth/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listAuthByPage POST /api/auth/list/page */
export async function listAuthByPageUsingPost(
  body: API.AuthQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAuth_>("/api/auth/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listAuthVOByPage POST /api/auth/list/page/vo */
export async function listAuthVoByPageUsingPost(
  body: API.AuthQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAuthVO_>("/api/auth/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyAuthVOByPage POST /api/auth/my/list/page/vo */
export async function listMyAuthVoByPageUsingPost(
  body: API.AuthQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAuthVO_>("/api/auth/my/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
