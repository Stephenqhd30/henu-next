// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** getOperationLogVOById GET /api/operationLog/get/vo */
export async function getOperationLogVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOperationLogVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseOperationLogVO_>("/api/operationLog/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listOperationLogByPage POST /api/operationLog/list/page */
export async function listOperationLogByPageUsingPost(
  body: API.OperationLogQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageOperationLog_>(
    "/api/operationLog/list/page",
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

/** listOperationLogVOByPage POST /api/operationLog/list/page/vo */
export async function listOperationLogVoByPageUsingPost(
  body: API.OperationLogQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageOperationLogVO_>(
    "/api/operationLog/list/page/vo",
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
