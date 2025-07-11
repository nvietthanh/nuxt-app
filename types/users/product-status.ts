import type { status } from "@/const/product-status";

export type ProductStatus = (typeof status)[keyof typeof status];
