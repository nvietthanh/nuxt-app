import type { ProductImage } from "./product-image";
import type { ProductStatus } from "./product-status";

export interface ProductOrder {
  id: number;
  name: string;
  images: ProductImage[];
  price: number;
  percent_sale: number;
  status: ProductStatus;
  purchase_quantity: number;
}
