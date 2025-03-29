// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addRegistrationForm POST /api/registrationForm/add */
export async function addRegistrationFormUsingPost(
  body: API.RegistrationFormAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/registrationForm/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteRegistrationForm POST /api/registrationForm/delete */
export async function deleteRegistrationFormUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/registrationForm/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** editRegistrationForm POST /api/registrationForm/edit */
export async function editRegistrationFormUsingPost(
  body: API.RegistrationFormEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/registrationForm/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getRegistrationFormVOById GET /api/registrationForm/get/vo */
export async function getRegistrationFormVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRegistrationFormVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseRegistrationFormVO_>(
    "/api/registrationForm/get/vo",
    {
      method: "GET",
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** listRegistrationFormByPage POST /api/registrationForm/list/page */
export async function listRegistrationFormByPageUsingPost(
  body: API.RegistrationFormQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageRegistrationForm_>(
    "/api/registrationForm/list/page",
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

/** listRegistrationFormVOByPage POST /api/registrationForm/list/page/vo */
export async function listRegistrationFormVoByPageUsingPost(
  body: API.RegistrationFormQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageRegistrationFormVO_>(
    "/api/registrationForm/list/page/vo",
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

/** listMyRegistrationFormVOByPage POST /api/registrationForm/my/list/page/vo */
export async function listMyRegistrationFormVoByPageUsingPost(
  body: API.RegistrationFormQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageRegistrationFormVO_>(
    "/api/registrationForm/my/list/page/vo",
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

/** updateRegistrationForm POST /api/registrationForm/update */
export async function updateRegistrationFormUsingPost(
  body: API.RegistrationFormUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/registrationForm/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
