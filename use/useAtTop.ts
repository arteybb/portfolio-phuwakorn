import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useAtTop() {
  const isAtTop = ref<boolean>(true)

  const handleScroll = () => {
    isAtTop.value = window.scrollY === 0
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { isAtTop }
}