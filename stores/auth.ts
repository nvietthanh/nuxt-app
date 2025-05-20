import { defineStore } from 'pinia'
import type { User } from '@/types/user';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null
    }),

    getters: {
        isAuthenticated: (state) => !!state.user,
        isAdmin: (state) => state.user?.role === 'admin'
    },

    actions: {
        setUser(userData: User) {
            this.user = userData
        },

        clearUser() {
            this.user = null
        }
    }
});
