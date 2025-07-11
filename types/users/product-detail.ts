import type { ProductStatus } from "@/const/product-status";

interface ProductImage {
  id: number;
  thumbnal_url?: string;
  url: string;
}
interface ProductCategory {
  id: number;
  name: string;
}
interface ProductAttribute {
  id: number;
  name: string;
  value: string;
}

export interface ProductDetail {
  id: number;
  name: string;
  images: ProductImage[];
  description: string;
  stock_quantity: number;
  price: number;
  category: ProductCategory;
  status: ProductStatus;
  attributes: ProductAttribute[];
  percent_sale: number;
  rating: number;
  sold: number;
}
