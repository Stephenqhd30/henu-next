// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** exportAdmin GET /api/excel/export/admin */
export async function exportAdminUsingGet(options?: { [key: string]: any }) {
  return request<any>("/api/excel/export/admin", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportCadreType GET /api/excel/export/cadre/type */
export async function exportCadreTypeUsingGet(options?: {
  [key: string]: any;
}) {
  return request<any>("/api/excel/export/cadre/type", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportDeadline GET /api/excel/export/deadline */
export async function exportDeadlineUsingGet(options?: { [key: string]: any }) {
  return request<any>("/api/excel/export/deadline", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportEducation GET /api/excel/export/education */
export async function exportEducationUsingGet(options?: {
  [key: string]: any;
}) {
  return request<any>("/api/excel/export/education", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportFamily GET /api/excel/export/family */
export async function exportFamilyUsingGet(options?: { [key: string]: any }) {
  return request<any>("/api/excel/export/family", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportFileLog GET /api/excel/export/file/log */
export async function exportFileLogUsingGet(options?: { [key: string]: any }) {
  return request<any>("/api/excel/export/file/log", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportFileType GET /api/excel/export/file/type */
export async function exportFileTypeUsingGet(options?: { [key: string]: any }) {
  return request<any>("/api/excel/export/file/type", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportJob GET /api/excel/export/job */
export async function exportJobUsingGet(options?: { [key: string]: any }) {
  return request<any>("/api/excel/export/job", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportMessageNotice GET /api/excel/export/message/notice */
export async function exportMessageNoticeUsingGet(options?: {
  [key: string]: any;
}) {
  return request<any>("/api/excel/export/message/notice", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportMessagePush GET /api/excel/export/message/push */
export async function exportMessagePushUsingGet(options?: {
  [key: string]: any;
}) {
  return request<any>("/api/excel/export/message/push", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportOperationLog GET /api/excel/export/operation/log */
export async function exportOperationLogUsingGet(options?: {
  [key: string]: any;
}) {
  return request<any>("/api/excel/export/operation/log", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportRegistrationForm GET /api/excel/export/registration/form */
export async function exportRegistrationFormUsingGet(options?: {
  [key: string]: any;
}) {
  return request<any>("/api/excel/export/registration/form", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportReviewLog GET /api/excel/export/review/log */
export async function exportReviewLogUsingGet(options?: {
  [key: string]: any;
}) {
  return request<any>("/api/excel/export/review/log", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportSchool GET /api/excel/export/school */
export async function exportSchoolUsingGet(options?: { [key: string]: any }) {
  return request<any>("/api/excel/export/school", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportSchoolSchoolType GET /api/excel/export/school/school/type */
export async function exportSchoolSchoolTypeUsingGet(options?: {
  [key: string]: any;
}) {
  return request<any>("/api/excel/export/school/school/type", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportSchoolType GET /api/excel/export/school/type */
export async function exportSchoolTypeUsingGet(options?: {
  [key: string]: any;
}) {
  return request<any>("/api/excel/export/school/type", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportSystemMessages GET /api/excel/export/system/message */
export async function exportSystemMessagesUsingGet(options?: {
  [key: string]: any;
}) {
  return request<any>("/api/excel/export/system/message", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportAdminTemplate GET /api/excel/export/template/admin */
export async function exportAdminTemplateUsingGet(options?: {
  [key: string]: any;
}) {
  return request<any>("/api/excel/export/template/admin", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportSchoolTemplate GET /api/excel/export/template/school */
export async function exportSchoolTemplateUsingGet(options?: {
  [key: string]: any;
}) {
  return request<any>("/api/excel/export/template/school", {
    method: "GET",
    ...(options || {}),
  });
}

/** exportUser GET /api/excel/export/user */
export async function exportUserUsingGet(options?: { [key: string]: any }) {
  return request<any>("/api/excel/export/user", {
    method: "GET",
    ...(options || {}),
  });
}

/** importAdminExcel POST /api/excel/import/admin */
export async function importAdminExcelUsingPost(
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

  return request<API.BaseResponseString_>("/api/excel/import/admin", {
    method: "POST",
    data: formData,
    requestType: "form",
    ...(options || {}),
  });
}

/** importSchoolExcel POST /api/excel/import/school */
export async function importSchoolExcelUsingPost(
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

  return request<API.BaseResponseString_>("/api/excel/import/school", {
    method: "POST",
    data: formData,
    requestType: "form",
    ...(options || {}),
  });
}
