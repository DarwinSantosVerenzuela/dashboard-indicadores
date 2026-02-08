<script setup>
const isVisible = ref(true)
const emit = defineEmits(['finish'])

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false
    setTimeout(() => {
      emit('finish')
    }, 1000)
  }, 3500)
})
</script>

<template>
  <Transition name="fade-screen">
    <div v-if="isVisible" class="splash-overlay">
      <div class="logo-viewport">
        <img src="/imagenes/logo/kowntech_0.png" alt="Knowtech" class="majestic-logo">
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.splash-overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000000; /* Ensure it's above EVERYTHING */
  margin: 0;
  padding: 0;
}

.logo-viewport {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.majestic-logo {
  width: 300px;
  height: auto;
}

.fade-screen-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.fade-screen-leave-to {
  opacity: 0;
}
</style>
