import type { UPLOAD_STATUS } from "@/const/upload-status";

export type UploadStatus = (typeof UPLOAD_STATUS)[keyof typeof UPLOAD_STATUS];
