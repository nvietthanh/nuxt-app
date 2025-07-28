import type { ProductImage } from "./product-image";
import type { ProductStatus } from "./product-status";

export interface ProductCategory {
  id: number;
  name: string;
}
export interface ProductAttribute {
  id: number;
  name: string;
  value: string;
}

export interface MakerShort {
  id: number;
  name: string;
  image_url: string;
  percent_rating: number;
  total_product: number;
  joined_at: string;
  last_login_at: string;
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
  maker: MakerShort;
}
