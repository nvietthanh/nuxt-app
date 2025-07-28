import type { productStatus } from "@/const/product-status";

export type ProductStatus = (typeof productStatus)[keyof typeof productStatus];
