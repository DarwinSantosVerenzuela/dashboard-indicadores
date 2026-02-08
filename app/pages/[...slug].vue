<script setup>
const route = useRoute()
</script>

<template>
  <div style="padding: 50px; background: #fff; border: 5px solid red;">
    <h1>Página de Diagnóstico</h1>
    <p>Ruta Actual: {{ route.path }}</p>
    <p>Si ves esto, el enrutamiento funciona pero la página específica podría estar vacía.</p>
    <NuxtLink to="/" style="color: blue; text-decoration: underline;">Ir al Inicio</NuxtLink>
  </div>
</template>
