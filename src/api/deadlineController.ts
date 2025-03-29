// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addDeadline POST /api/deadline/add */
export async function addDeadlineUsingPost(
  body: API.DeadlineAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/deadline/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteDeadline POST /api/deadline/delete */
export async function deleteDeadlineUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/deadline/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getDeadlineVOById GET /api/deadline/get/vo */
export async function getDeadlineVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDeadlineVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseDeadlineVO_>("/api/deadline/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listDeadlineByPage POST /api/deadline/list/page */
export async function listDeadlineByPageUsingPost(
  body: API.DeadlineQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageDeadline_>("/api/deadline/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listDeadlineVOByPage POST /api/deadline/list/page/vo */
export async function listDeadlineVoByPageUsingPost(
  body: API.DeadlineQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageDeadlineVO_>(
    "/api/deadline/list/page/vo",
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

/** listMyDeadlineVOByPage POST /api/deadline/my/list/page/vo */
export async function listMyDeadlineVoByPageUsingPost(
  body: API.DeadlineQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageDeadlineVO_>(
    "/api/deadline/my/list/page/vo",
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

/** updateDeadline POST /api/deadline/update */
export async function updateDeadlineUsingPost(
  body: API.DeadlineUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/deadline/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
