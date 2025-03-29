// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** deleteFileLog POST /api/file/delete */
export async function deleteFileLogUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/file/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getFileLogVOById GET /api/file/get/vo */
export async function getFileLogVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFileLogVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseFileLogVO_>("/api/file/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listFileLogByPage POST /api/file/list/page */
export async function listFileLogByPageUsingPost(
  body: API.FileLogQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageFileLog_>("/api/file/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listFileLogVOByPage POST /api/file/list/page/vo */
export async function listFileLogVoByPageUsingPost(
  body: API.FileLogQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageFileLogVO_>("/api/file/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyFileLogVOByPage POST /api/file/my/list/page/vo */
export async function listMyFileLogVoByPageUsingPost(
  body: API.FileLogQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageFileLogVO_>("/api/file/my/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadFile POST /api/file/upload */
export async function uploadFileUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileUsingPOSTParams,
  body: {},
  file?: File,
  options?: { [key: string]: any }
) {
  const formData = new FormData();

  if (file) {
    formData.append("file", file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === "object" && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ""));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.BaseResponseString_>("/api/file/upload", {
    method: "POST",
    params: {
      ...params,
    },
    data: formData,
    requestType: "form",
    ...(options || {}),
  });
}
