// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addEducation POST /api/education/add */
export async function addEducationUsingPost(
  body: API.EducationAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/education/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteEducation POST /api/education/delete */
export async function deleteEducationUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/education/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** editEducation POST /api/education/edit */
export async function editEducationUsingPost(
  body: API.EducationEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/education/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getEducationVOById GET /api/education/get/vo */
export async function getEducationVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getEducationVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseEducationVO_>("/api/education/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listEducationByPage POST /api/education/list/page */
export async function listEducationByPageUsingPost(
  body: API.EducationQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageEducation_>("/api/education/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listEducationVOByPage POST /api/education/list/page/vo */
export async function listEducationVoByPageUsingPost(
  body: API.EducationQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageEducationVO_>(
    "/api/education/list/page/vo",
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

/** listMyEducationVOByPage POST /api/education/my/list/page/vo */
export async function listMyEducationVoByPageUsingPost(
  body: API.EducationQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageEducationVO_>(
    "/api/education/my/list/page/vo",
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

/** updateEducation POST /api/education/update */
export async function updateEducationUsingPost(
  body: API.EducationUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/education/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
