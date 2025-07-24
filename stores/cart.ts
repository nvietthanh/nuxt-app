import { defineStore } from "pinia";
import type { Cart } from "@/types/users/cart";
import type { ProductDetail } from "@/types/users/product-detail";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Array<Cart>,
  }),
  getters: {
    totalPrice(state) {
      return state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    countLength(state) {
      return state.items.length;
    }
  },
  actions: {
    addToCart(product: ProductDetail, quantity: number = 1) {
      const existing = this.items.find((item) => item.id === product.id);

      if (!existing) {
        this.items.push({
          id: product.id,
          name: product.name,
          image: product.name,
          price: product.price,
          quantity: quantity,
          percent_sale: product.percent_sale,
          status: product.status,
        });
      } else {
        existing.quantity += quantity;
      }
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.items = [];
    },
  },
});
