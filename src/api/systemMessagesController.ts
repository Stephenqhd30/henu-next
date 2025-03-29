// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addSystemMessages POST /api/systemMessages/add */
export async function addSystemMessagesUsingPost(
  body: API.SystemMessagesAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/systemMessages/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteSystemMessages POST /api/systemMessages/delete */
export async function deleteSystemMessagesUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/systemMessages/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getSystemMessagesVOById GET /api/systemMessages/get/vo */
export async function getSystemMessagesVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSystemMessagesVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseSystemMessagesVO_>(
    "/api/systemMessages/get/vo",
    {
      method: "GET",
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** listSystemMessagesByPage POST /api/systemMessages/list/page */
export async function listSystemMessagesByPageUsingPost(
  body: API.SystemMessagesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageSystemMessages_>(
    "/api/systemMessages/list/page",
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

/** listSystemMessagesVOByPage POST /api/systemMessages/list/page/vo */
export async function listSystemMessagesVoByPageUsingPost(
  body: API.SystemMessagesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageSystemMessagesVO_>(
    "/api/systemMessages/list/page/vo",
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

/** updateSystemMessages POST /api/systemMessages/update */
export async function updateSystemMessagesUsingPost(
  body: API.SystemMessagesUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/systemMessages/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
