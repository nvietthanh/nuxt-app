import type { ProductStatus } from "@/const/product-status";

export interface Cart {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  percent_sale: number;
  status: ProductStatus;
}
