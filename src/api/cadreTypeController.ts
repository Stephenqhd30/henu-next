// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addCadreType POST /api/cadreType/add */
export async function addCadreTypeUsingPost(
  body: API.CadreTypeAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/cadreType/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteCadreType POST /api/cadreType/delete */
export async function deleteCadreTypeUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/cadreType/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getCadreTypeVOById GET /api/cadreType/get/vo */
export async function getCadreTypeVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCadreTypeVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCadreTypeVO_>("/api/cadreType/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listCadreTypeByPage POST /api/cadreType/list/page */
export async function listCadreTypeByPageUsingPost(
  body: API.CadreTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCadreType_>("/api/cadreType/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listCadreTypeVOByPage POST /api/cadreType/list/page/vo */
export async function listCadreTypeVoByPageUsingPost(
  body: API.CadreTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCadreTypeVO_>(
    "/api/cadreType/list/page/vo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** listMyCadreTypeVOByPage POST /api/cadreType/my/list/page/vo */
export async function listMyCadreTypeVoByPageUsingPost(
  body: API.CadreTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCadreTypeVO_>(
    "/api/cadreType/my/list/page/vo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** updateCadreType POST /api/cadreType/update */
export async function updateCadreTypeUsingPost(
  body: API.CadreTypeUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/cadreType/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
