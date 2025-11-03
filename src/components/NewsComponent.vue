<template>
  <div class="w-full">
    <!-- Header -->
    <div>
      <h1 class="text-4xl font-bold m-4 text-gray-700">Haberler</h1>
    </div>

    <!-- News Grid -->
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
      <!-- Card -->
      <div
        v-for="(newsItem, index) in newsItems"
        :key="index"
        class="relative h-64 rounded-md overflow-hidden group shadow-lg"
      >
        <!-- Background Image -->
        <img
          :src="newsItem.image"
          alt=""
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <!-- Black Transparent Overlay -->
        <div class="absolute inset-0 bg-black/50"></div>
        <!-- label  -->
        <div class="absolute inset-0 top-0 flex justify-end z-10">
          <div
            class="h-4 px-4 py-3 bg-primary text-secondary flex justify-center items-center text-xs m-2"
          >
            {{ newsItem.label }}
          </div>
        </div>

        <!-- Content -->
        <div
          class="absolute inset-0 bottom-0 flex flex-col justify-end items-start text-left text-white p-4 z-10"
        >
          <h2 class="text-xl font-semibold mb-2">{{ newsItem.title }}</h2>
          <div class="flex items-center gap-2 text-sm text-gray-200">
            <Calendar class="w-4 h-4" />
            <span>{{ newsItem.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar } from 'lucide-vue-next'
import { ref } from 'vue'

const newsItems = ref([
  {
    image: new URL('@/assets/images/news/1.jpg', import.meta.url).href,
    title: '23 Nisan Kutlaması',
    date: '25/04/2025',
    label: 'HABERLER',
  },
  {
    image: new URL('@/assets/images/news/1.jpg', import.meta.url).href,
    title: 'Gençlik Festivali',
    date: '10/05/2025',

    label: 'HABERLER',
  },
  {
    image: new URL('@/assets/images/news/1.jpg', import.meta.url).href,
    title: 'Okul Sporları Turnuvası',
    date: '18/05/2025',
    label: 'HABERLER',
  },
  {
    image: new URL('@/assets/images/news/1.jpg', import.meta.url).href,
    title: 'Yaz Şenlikleri Başladı',
    date: '01/06/2025',
    label: 'HABERLER',
  },
])
</script>

<style scoped>
/* Hover efekti üçün */
.group:hover .overlay {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
