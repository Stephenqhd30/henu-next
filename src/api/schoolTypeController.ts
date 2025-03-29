// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addSchoolType POST /api/schoolType/add */
export async function addSchoolTypeUsingPost(
  body: API.SchoolTypeAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/schoolType/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteSchoolType POST /api/schoolType/delete */
export async function deleteSchoolTypeUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/schoolType/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getSchoolTypeVOById GET /api/schoolType/get/vo */
export async function getSchoolTypeVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSchoolTypeVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseSchoolTypeVO_>("/api/schoolType/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listSchoolTypeByPage POST /api/schoolType/list/page */
export async function listSchoolTypeByPageUsingPost(
  body: API.SchoolTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageSchoolType_>("/api/schoolType/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listSchoolTypeVOByPage POST /api/schoolType/list/page/vo */
export async function listSchoolTypeVoByPageUsingPost(
  body: API.SchoolTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageSchoolTypeVO_>(
    "/api/schoolType/list/page/vo",
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

/** listMySchoolTypeVOByPage POST /api/schoolType/my/list/page/vo */
export async function listMySchoolTypeVoByPageUsingPost(
  body: API.SchoolTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageSchoolTypeVO_>(
    "/api/schoolType/my/list/page/vo",
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

/** updateSchoolType POST /api/schoolType/update */
export async function updateSchoolTypeUsingPost(
  body: API.SchoolTypeUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/schoolType/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
