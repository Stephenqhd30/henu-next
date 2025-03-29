// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addJob POST /api/job/add */
export async function addJobUsingPost(
  body: API.JobAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/job/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteJob POST /api/job/delete */
export async function deleteJobUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/job/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getJobVOById GET /api/job/get/vo */
export async function getJobVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getJobVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseJobVO_>("/api/job/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listJobByPage POST /api/job/list/page */
export async function listJobByPageUsingPost(
  body: API.JobQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageJob_>("/api/job/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listJobVOByPage POST /api/job/list/page/vo */
export async function listJobVoByPageUsingPost(
  body: API.JobQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageJobVO_>("/api/job/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyJobVOByPage POST /api/job/my/list/page/vo */
export async function listMyJobVoByPageUsingPost(
  body: API.JobQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageJobVO_>("/api/job/my/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** updateJob POST /api/job/update */
export async function updateJobUsingPost(
  body: API.JobUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/job/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
