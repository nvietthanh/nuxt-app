// plugins/errors.ts
import { defineNuxtPlugin } from '#app'
import { useErrorsStore } from '@/stores/errors'

export default defineNuxtPlugin((nuxtApp) => {
  const errorStore = useErrorsStore()

  nuxtApp.provide('errors', {
    get: (field: string) => errorStore.get(field),
    first: (field: string) => errorStore.first(field),
    has: (field: string) => errorStore.check(field),
    any: () => errorStore.any,
    all: () => errorStore.all,
    clear: (field?: string) => errorStore.clear(field),
    set: (field: string | Record<string, string[]>, messages?: string | string[]) =>
      errorStore.set(field, messages),
  })
})
