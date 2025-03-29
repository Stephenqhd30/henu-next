// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addFamily POST /api/family/add */
export async function addFamilyUsingPost(
  body: API.FamilyAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/family/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteFamily POST /api/family/delete */
export async function deleteFamilyUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/family/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** editFamily POST /api/family/edit */
export async function editFamilyUsingPost(
  body: API.FamilyEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/family/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getFamilyVOById GET /api/family/get/vo */
export async function getFamilyVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFamilyVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseFamilyVO_>("/api/family/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listFamilyByPage POST /api/family/list/page */
export async function listFamilyByPageUsingPost(
  body: API.FamilyQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageFamily_>("/api/family/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listFamilyVOByPage POST /api/family/list/page/vo */
export async function listFamilyVoByPageUsingPost(
  body: API.FamilyQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageFamilyVO_>("/api/family/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyFamilyVOByPage POST /api/family/my/list/page/vo */
export async function listMyFamilyVoByPageUsingPost(
  body: API.FamilyQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageFamilyVO_>("/api/family/my/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** updateFamily POST /api/family/update */
export async function updateFamilyUsingPost(
  body: API.FamilyUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/family/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
