import type { UploadStatus } from "./upload-status";

export interface ImageUpload {
  id?: number;
  file?: File;
  image_url?: string;
  preview?: string;
  status?: UploadStatus;
}
