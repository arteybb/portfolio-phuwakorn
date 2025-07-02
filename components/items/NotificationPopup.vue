<template>
  <Teleport to="body">
    <div v-if="visible" class="toast" :class="type">
      {{ message }}
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps<{
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
  onClose?: () => void
}>()

const visible = ref(true)

watchEffect(() => {
  setTimeout(() => {
    visible.value = false
    props.onClose?.()
  }, props.duration || 3000)
})
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  z-index: 9999;
  transition: opacity 0.3s;
}
.success {
  background-color: #4caf50;
}
.error {
  background-color: #f44336;
}
.info {
  background-color: #2196f3;
}
</style>