// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addFileType POST /api/fileType/add */
export async function addFileTypeUsingPost(
  body: API.FileTypeAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/fileType/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteFileType POST /api/fileType/delete */
export async function deleteFileTypeUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/fileType/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getFileTypeVOById GET /api/fileType/get/vo */
export async function getFileTypeVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFileTypeVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseFileTypeVO_>("/api/fileType/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listFileTypeByPage POST /api/fileType/list/page */
export async function listFileTypeByPageUsingPost(
  body: API.FileTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageFileType_>("/api/fileType/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listFileTypeVOByPage POST /api/fileType/list/page/vo */
export async function listFileTypeVoByPageUsingPost(
  body: API.FileTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageFileTypeVO_>(
    "/api/fileType/list/page/vo",
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

/** listMyFileTypeVOByPage POST /api/fileType/my/list/page/vo */
export async function listMyFileTypeVoByPageUsingPost(
  body: API.FileTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageFileTypeVO_>(
    "/api/fileType/my/list/page/vo",
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

/** updateFileType POST /api/fileType/update */
export async function updateFileTypeUsingPost(
  body: API.FileTypeUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/fileType/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
