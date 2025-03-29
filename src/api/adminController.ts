// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addAdmin POST /api/admin/add */
export async function addAdminUsingPost(
  body: API.AdminAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/admin/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteAdmin POST /api/admin/delete */
export async function deleteAdminUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/admin/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** editAdmin POST /api/admin/edit */
export async function editAdminUsingPost(
  body: API.AdminEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/admin/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getLoginAdmin GET /api/admin/get/login */
export async function getLoginAdminUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseLoginAdminVO_>("/api/admin/get/login", {
    method: "GET",
    ...(options || {}),
  });
}

/** getAdminVOById GET /api/admin/get/vo */
export async function getAdminVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAdminVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseAdminVO_>("/api/admin/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listAdminByPage POST /api/admin/list/page */
export async function listAdminByPageUsingPost(
  body: API.AdminQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAdmin_>("/api/admin/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listAdminVOByPage POST /api/admin/list/page/vo */
export async function listAdminVoByPageUsingPost(
  body: API.AdminQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAdminVO_>("/api/admin/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** adminLogin POST /api/admin/login */
export async function adminLoginUsingPost(
  body: API.AdminLoginRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLoginAdminVO_>("/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** updateAdmin POST /api/admin/update */
export async function updateAdminUsingPost(
  body: API.AdminUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/admin/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
