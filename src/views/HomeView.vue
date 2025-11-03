<template>
  <!-- intro start  -->
  <div class="flex justify-center items-center w-full relative">
    <img src="@/assets/images/intro.png" class="object-cover p-2" alt="" />
    <div class="hidden md:flex absolute w-full h-full bg-[rgba(0,0,0,0.2)]"></div>
  </div>
  <!-- intro end  -->
  <NewsComponent />
  <ActivityComponent />
</template>

<script setup lang="ts">
import NewsComponent from '@/components/NewsComponent.vue'
import ActivityComponent from '@/components/ActivityComponent.vue'
</script>
