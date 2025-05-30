// stores/errors.ts
import { defineStore } from 'pinia'
import { arrayWrap } from '@/libs/array'
import { objHasKey } from '@/libs/object'

export const useErrorsStore = defineStore('errors', {
  state: () => ({
    errors: {} as Record<string, string[]>,
  }),

  getters: {
    all: (state) => state.errors,
    any: (state) => Object.keys(state.errors).length > 0,
    get: (state) => {
      return (field: string) => state.errors[field] || []
    },
    first: (state) => {
      return (field: string) =>
        state.errors[field] ? state.errors[field][0] : undefined
    },
    has: (state) => {
      return (field: string) => (objHasKey(state.errors, field) ? false : null)
    },
    check: (state) => {
      return (field: string) => objHasKey(state.errors, field)
    },
  },

  actions: {
    set(field: string | Record<string, string[]>, messages?: string | string[]) {
      if (typeof field === 'object') {
        // Replace all errors
        this.errors = {}
        setTimeout(() => {
          this.errors = field
        }, 10)
      } else {
        // Set a specific field error
        this.errors = {
          ...this.errors,
          [field]: arrayWrap(messages),
        }
      }
    },

    clear(field?: string) {
      if (!field) {
        this.errors = {}
      } else {
        const newErrors: Record<string, string[]> = {}
        Object.keys(this.errors).forEach((key) => {
          if (key !== field) {
            newErrors[key] = this.errors[key]
          }
        })
        this.errors = newErrors
      }
    },
  },
})
