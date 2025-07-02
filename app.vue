<template>
  <FirstLoadingScreen v-if="loading" />
  <div v-else>
    <NuxtPage />
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import FirstLoadingScreen from './components/FirstLoadingScreen.vue'


const loading = ref(true)


onMounted(() => {
  setTimeout(() => {
    const loaderEl = document.querySelector('.loading-inner')
    if (loaderEl) {
      gsap.to(loaderEl, {
        y: -window.innerHeight,
        duration: 1,
        ease: 'power2.inOut',
        onComplete() {
          loading.value = false
        }
      })
    } else {
      loading.value = false
    }
  }, 2000)
})
</script>