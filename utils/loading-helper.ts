// utils/loadingHelper.ts
import { useLoadingStore } from '@/stores/loading'


export function startLoading() {
  const loading = useLoadingStore()

  loading.start()
}

export function stopLoading() {
  const loading = useLoadingStore()

  loading.stop()
}
