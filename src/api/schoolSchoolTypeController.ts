// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addSchoolSchoolType POST /api/schoolSchoolType/add */
export async function addSchoolSchoolTypeUsingPost(
  body: API.SchoolSchoolTypeAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/schoolSchoolType/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteSchoolSchoolType POST /api/schoolSchoolType/delete */
export async function deleteSchoolSchoolTypeUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/schoolSchoolType/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getSchoolSchoolTypeVOById GET /api/schoolSchoolType/get/vo */
export async function getSchoolSchoolTypeVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSchoolSchoolTypeVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseSchoolSchoolTypeVO_>(
    "/api/schoolSchoolType/get/vo",
    {
      method: "GET",
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** listSchoolSchoolTypeByPage POST /api/schoolSchoolType/list/page */
export async function listSchoolSchoolTypeByPageUsingPost(
  body: API.SchoolSchoolTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageSchoolSchoolType_>(
    "/api/schoolSchoolType/list/page",
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

/** listSchoolSchoolTypeVOByPage POST /api/schoolSchoolType/list/page/vo */
export async function listSchoolSchoolTypeVoByPageUsingPost(
  body: API.SchoolSchoolTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageSchoolSchoolTypeVO_>(
    "/api/schoolSchoolType/list/page/vo",
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

/** listMySchoolSchoolTypeVOByPage POST /api/schoolSchoolType/my/list/page/vo */
export async function listMySchoolSchoolTypeVoByPageUsingPost(
  body: API.SchoolSchoolTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageSchoolSchoolTypeVO_>(
    "/api/schoolSchoolType/my/list/page/vo",
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

/** updateSchoolSchoolType POST /api/schoolSchoolType/update */
export async function updateSchoolSchoolTypeUsingPost(
  body: API.SchoolSchoolTypeUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/schoolSchoolType/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
