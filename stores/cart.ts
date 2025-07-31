import { defineStore } from "pinia";
import type { ProductCart } from "@/types/users/cart";
import type { ProductImage } from "@/types/users/product-image";
import type { ProductStatus } from "@/types/users/product-status";

interface ProductItem {
  id: number;
  name: string;
  images: ProductImage[];
  price: number;
  stock_quantity: number;
  percent_sale: number;
  status: ProductStatus;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Array<ProductCart>,
  }),
  getters: {
    totalPrice(state) {
      return state.items.reduce(
        (sum, item) => sum + item.price * item.purchase_quantity,
        0
      );
    },
    countLength(state) {
      return state.items.length;
    },
  },
  actions: {
    addToCart(product: ProductItem, quantity: number = 1) {
      const existing = this.items.find((item) => item.id === product.id);

      if (!existing) {
        this.items.push({
          id: product.id,
          name: product.name,
          images: product.images,
          price: product.price,
          stock_quantity: product.stock_quantity,
          percent_sale: product.percent_sale,
          status: product.status,
          purchase_quantity: quantity,
        });
      } else {
        existing.purchase_quantity += quantity;
      }
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
      console.log("🚀 ~ removeFromCart ~ this.items:", this.items)
    },
    clearCart() {
      this.items = [];
    },
  },
});
