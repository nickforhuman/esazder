<script setup lang="ts">
import { RouterView } from 'vue-router'
// components
import TitleComponent from './components/TitleComponent.vue'
import NavigationComponent from './components/NavigationComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <header class="w-full">
    <TitleComponent />
    <NavigationComponent />
  </header>
  <main class="w-full h-full">
    <RouterView />
  </main>
  <FooterComponent />
</template>

<style scoped></style>
