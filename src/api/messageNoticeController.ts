// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addMessageNotice POST /api/messageNotice/add */
export async function addMessageNoticeUsingPost(
  body: API.MessageNoticeAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/messageNotice/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteMessageNotice POST /api/messageNotice/delete */
export async function deleteMessageNoticeUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/messageNotice/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getMessageNoticeVOById GET /api/messageNotice/get/vo */
export async function getMessageNoticeVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMessageNoticeVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseMessageNoticeVO_>(
    "/api/messageNotice/get/vo",
    {
      method: "GET",
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** listMessageNoticeByPage POST /api/messageNotice/list/page */
export async function listMessageNoticeByPageUsingPost(
  body: API.MessageNoticeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMessageNotice_>(
    "/api/messageNotice/list/page",
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

/** listMessageNoticeVOByPage POST /api/messageNotice/list/page/vo */
export async function listMessageNoticeVoByPageUsingPost(
  body: API.MessageNoticeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMessageNoticeVO_>(
    "/api/messageNotice/list/page/vo",
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

/** listMyMessageNoticeVOByPage POST /api/messageNotice/my/list/page/vo */
export async function listMyMessageNoticeVoByPageUsingPost(
  body: API.MessageNoticeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMessageNoticeVO_>(
    "/api/messageNotice/my/list/page/vo",
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

/** updateMessageNotice POST /api/messageNotice/update */
export async function updateMessageNoticeUsingPost(
  body: API.MessageNoticeUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/messageNotice/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
