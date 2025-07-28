import type { ProductImage } from "./product-image";
import type { ProductStatus } from "./product-status";

export interface ProductCart {
  id: number;
  name: string;
  images: ProductImage[];
  price: number;
  stock_quantity: number;
  percent_sale: number;
  status: ProductStatus;
  purchase_quantity: number;
}
