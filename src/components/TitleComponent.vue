<template>
  <div class="w-full flex md:justify-between justify-center items-center bg-primary">
    <!-- left side start  -->
    <div>
      <h1 class="text-xs m-1 text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
    </div>
    <!-- left side end  -->
    <!-- right side start  -->
    <div class="hidden md:flex justify-center items-center">
      <ul class="flex justify-center gap-2 m-1 text-xs border-r border-r-secondary">
        <li>
          <router-link to="/auth/login" class="px-4 py-2 text-secondary font-bold"
            >Giriş</router-link
          >
        </li>
        <li>
          <router-link to="/auth/register" class="px-4 py-2 text-secondary font-bold"
            >Kayıt</router-link
          >
        </li>
      </ul>
      <!-- social media start  -->
      <ul class="flex justify-center items-center px-2">
        <li class="bg-secondary p-1 border-r border-r-gray-300">
          <a href="https://instagram.com/">
            <Facebook class="w-4 h-4 text-blue-700" />
          </a>
        </li>
        <li class="bg-secondary p-1 border-r border-r-gray-300">
          <a href="https://facebook.com/">
            <Instagram class="w-4 h-4 text-purple-600" />
          </a>
        </li>
        <li class="bg-secondary p-1">
          <a href="https://linkedin.com/">
            <Linkedin class="w-4 h-4 text-blue-300" />
          </a>
        </li>
      </ul>
      <!-- social media end  -->
    </div>
    <!-- right side end  -->
  </div>
</template>

<script setup lang="ts">
import { Facebook, Instagram, Linkedin } from 'lucide-vue-next'
</script>
