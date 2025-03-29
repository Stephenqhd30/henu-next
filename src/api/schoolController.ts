// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addSchool POST /api/school/add */
export async function addSchoolUsingPost(
  body: API.SchoolAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/school/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteSchool POST /api/school/delete */
export async function deleteSchoolUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/school/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getSchoolVOById GET /api/school/get/vo */
export async function getSchoolVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSchoolVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseSchoolVO_>("/api/school/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listSchoolByPage POST /api/school/list/page */
export async function listSchoolByPageUsingPost(
  body: API.SchoolQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageSchool_>("/api/school/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listSchoolVOByPage POST /api/school/list/page/vo */
export async function listSchoolVoByPageUsingPost(
  body: API.SchoolQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageSchoolVO_>("/api/school/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listMySchoolVOByPage POST /api/school/my/list/page/vo */
export async function listMySchoolVoByPageUsingPost(
  body: API.SchoolQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageSchoolVO_>("/api/school/my/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** updateSchool POST /api/school/update */
export async function updateSchoolUsingPost(
  body: API.SchoolUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/school/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
