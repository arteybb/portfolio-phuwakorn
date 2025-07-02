import { createApp, h } from 'vue'
import Toast from '@/components/items/NotificationPopup.vue'

export function useToast() {
  return (message: string, type: 'success' | 'error' | 'info' = 'info', duration = 3000) => {
    const container = document.createElement('div')
    document.body.appendChild(container)

    const app = createApp({
      render() {
        return h(Toast, {
          message,
          type,
          duration,
          onClose: () => {
            app.unmount()
            document.body.removeChild(container)
          },
        })
      },
    })

    app.mount(container)
  }
}