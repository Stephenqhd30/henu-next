// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addMessage POST /api/message/add */
export async function addMessageUsingPost(
  body: API.MessageAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/message/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteMessage POST /api/message/delete */
export async function deleteMessageUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/message/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** editMessage POST /api/message/edit */
export async function editMessageUsingPost(
  body: API.MessageEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/message/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getMessageVOById GET /api/message/get/vo */
export async function getMessageVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMessageVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseMessageVO_>("/api/message/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listMessageByPage POST /api/message/list/page */
export async function listMessageByPageUsingPost(
  body: API.MessageQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMessage_>("/api/message/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listMessageVOByPage POST /api/message/list/page/vo */
export async function listMessageVoByPageUsingPost(
  body: API.MessageQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMessageVO_>("/api/message/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyMessageVOByPage POST /api/message/my/list/page/vo */
export async function listMyMessageVoByPageUsingPost(
  body: API.MessageQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMessageVO_>(
    "/api/message/my/list/page/vo",
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

/** updateMessage POST /api/message/update */
export async function updateMessageUsingPost(
  body: API.MessageUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/message/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
