// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addConversion POST /api/conversion/add */
export async function addConversionUsingPost(
  body: API.ConversionAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/conversion/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteConversion POST /api/conversion/delete */
export async function deleteConversionUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/conversion/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** editConversion POST /api/conversion/edit */
export async function editConversionUsingPost(
  body: API.ConversionEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/conversion/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getConversionVOById GET /api/conversion/get/vo */
export async function getConversionVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getConversionVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseConversionVO_>("/api/conversion/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listConversionByPage POST /api/conversion/list/page */
export async function listConversionByPageUsingPost(
  body: API.ConversionQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageConversion_>("/api/conversion/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listConversionVOByPage POST /api/conversion/list/page/vo */
export async function listConversionVoByPageUsingPost(
  body: API.ConversionQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageConversionVO_>(
    "/api/conversion/list/page/vo",
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

/** listMyConversionVOByPage POST /api/conversion/my/list/page/vo */
export async function listMyConversionVoByPageUsingPost(
  body: API.ConversionQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageConversionVO_>(
    "/api/conversion/my/list/page/vo",
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

/** updateConversion POST /api/conversion/update */
export async function updateConversionUsingPost(
  body: API.ConversionUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/conversion/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
