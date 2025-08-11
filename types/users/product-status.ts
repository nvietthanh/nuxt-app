import type { PRODUCT_STATUS } from "@/const/product-status";

export type ProductStatus = (typeof PRODUCT_STATUS)[keyof typeof PRODUCT_STATUS];
