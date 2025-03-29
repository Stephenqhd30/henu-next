// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addMessagePush POST /api/messagePush/add */
export async function addMessagePushUsingPost(
  body: API.MessagePushAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/messagePush/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteMessagePush POST /api/messagePush/delete */
export async function deleteMessagePushUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/messagePush/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getMessagePushVOById GET /api/messagePush/get/vo */
export async function getMessagePushVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMessagePushVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseMessagePushVO_>("/api/messagePush/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listMessagePushByPage POST /api/messagePush/list/page */
export async function listMessagePushByPageUsingPost(
  body: API.MessagePushQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMessagePush_>(
    "/api/messagePush/list/page",
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

/** listMessagePushVOByPage POST /api/messagePush/list/page/vo */
export async function listMessagePushVoByPageUsingPost(
  body: API.MessagePushQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMessagePushVO_>(
    "/api/messagePush/list/page/vo",
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

/** listMyMessagePushVOByPage POST /api/messagePush/my/list/page/vo */
export async function listMyMessagePushVoByPageUsingPost(
  body: API.MessagePushQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMessagePushVO_>(
    "/api/messagePush/my/list/page/vo",
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

/** updateMessagePush POST /api/messagePush/update */
export async function updateMessagePushUsingPost(
  body: API.MessagePushUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/messagePush/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
