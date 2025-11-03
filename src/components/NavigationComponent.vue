<template>
  <nav
    class="w-full py-2 hidden md:flex justify-around items-center bg-secondary/10 backdrop-blur-md"
  >
    <!-- right side start  -->
    <div class="flex justify-center items-center">
      <ul class="flex justify-center gap-4 items-center">
        <li>
          <router-link to="/">Ana sayfa</router-link>
        </li>
        <li>Example</li>
        <li>Example</li>
      </ul>
    </div>
    <!-- right side end  -->
    <!-- logo start  -->
    <div class="flex justify-center items-center">
      <img
        src="@/assets/images/logo.png"
        class="object-cover shadow-xl rounded-full w-36 h-36"
        alt=""
      />
    </div>
    <!-- logo end  -->
    <!-- left side start  -->
    <div class="flex justify-center items-center">
      <ul class="flex justify-center items-center gap-4">
        <li>
          <router-link to="/">Ana sayfa</router-link>
        </li>
        <li>Example</li>
        <li>Example</li>
      </ul>
    </div>
    <!-- left side end  -->
  </nav>

  <!-- mobile menu start  -->
  <nav class="w-full flex md:hidden justify-center items-center fixed bottom-0">
    <ul
      class="w-full flex justify-around items-center px-2 py-3 m-2 bg-secondary/10 backdrop-blur-md border border-gray-200 rounded-2xl"
    >
      <li @click="mobileMenuToggle()" class="cursor-pointer">
        <Ellipsis />
      </li>
      <li>
        <router-link to="/"><Newspaper /></router-link>
      </li>
      <li>
        <router-link to="/"><House /></router-link>
      </li>
      <li>
        <router-link to="/">
          <Info />
        </router-link>
      </li>
      <li>
        <router-link to="/auth/profile">
          <CircleUserRound />
        </router-link>
      </li>
    </ul>
  </nav>
  <!-- mobile menu other side start  -->
  <transition name="slide-up">
    <div
      v-if="isMobileMenu"
      class="fixed z-50 bottom-0 w-full h-screen bg-secondary/30 backdrop-blur-md"
    >
      <!-- menu header start  -->
      <div class="w-full p-2 flex justify-between items-center">
        <div>
          <img src="@/assets/images/logo.png" class="w-16 rounded-full shadow-xl" alt="" />
        </div>
        <div class="flex justify-center items-center gap-2">
          <router-link
            to="/auth/login"
            class="p-2 rounded-full flex justify-center items-center border border-gray-300"
            ><LogIn class="w-4 h-4"
          /></router-link>
          <router-link
            to="/auth/register"
            class="p-2 rounded-full flex justify-center items-center border border-gray-300"
            ><UserRoundPlus class="w-4 h-4"
          /></router-link>
          <button
            type="button"
            @click="mobileMenuToggle()"
            class="px-4 py-1 rounded-2xl border border-gray-300 flex justify-center items-center"
          >
            <X class="w-4 h-4" /> close
          </button>
        </div>
      </div>
      <!-- menu header end  -->
      <!-- Search Bar Start -->
      <div class="w-full flex justify-center items-center py-6">
        <form action="#" class="relative w-full max-w-sm flex items-center p-2" @submit.prevent>
          <input
            type="search"
            placeholder="Ara..."
            class="w-full px-4 py-2 text-sm text-gray-700 placeholder-gray-400 border-b border-gray-300 focus:outline-none focus:border-primary text-center"
          />
          <button
            type="submit"
            class="absolute right-3 text-gray-400 hover:text-primary transition-colors duration-200"
          >
            <Search class="w-5 h-5" />
          </button>
        </form>
      </div>
      <!-- Search Bar End -->
      <!-- menu start  -->
      <div class="w-full grid grid-cols-2 place-items-center">
        <ul class="flex flex-col gap-2">
          <li class="text-gray-400 text-center">Menü</li>
          <li>
            <router-link to="/" class="px-2 py-1 border-b-2 border-b-gray-400 m-2"
              >Example</router-link
            >
          </li>
          <li>
            <router-link to="/" class="px-2 py-1 border-b-2 border-b-gray-400 m-2"
              >Example</router-link
            >
          </li>
          <li>
            <router-link to="/" class="px-2 py-1 border-b-2 border-b-gray-400 m-2"
              >Example</router-link
            >
          </li>
          <li>
            <router-link to="/" class="px-2 py-1 border-b-2 border-b-gray-400 m-2"
              >Example</router-link
            >
          </li>
          <ul class="flex justify-center items-center gap-2 py-2">
            <li>
              <a href=""><Instagram class="w-6 h-6 text-pink-700" /></a>
            </li>
            <li>
              <a href=""><Facebook class="w-6 h-6 text-blue-700" /></a>
            </li>
            <li>
              <a href=""><Linkedin class="w-6 h-6 text-blue-400" /></a>
            </li>
            <li>
              <a href="">
                <Youtube class="w-6 h-6 text-red-600" />
              </a>
            </li>
          </ul>
          <!-- contact btn  -->
          <router-link
            to="/contact"
            class="px-4 py-2 bg-primary flex justify-center items-center text-secondary font-bold rounded-2xl"
            >Iletişim</router-link
          >
        </ul>
        <ul class="flex flex-col gap-2">
          <li class="text-gray-400 text-center">Kısa linkler</li>
          <li>
            <router-link to="/" class="px-2 py-1 border-b-2 border-b-gray-400 m-2"
              >Example</router-link
            >
          </li>
          <li>
            <router-link to="/" class="px-2 py-1 border-b-2 border-b-gray-400 m-2"
              >Example</router-link
            >
          </li>
          <li>
            <router-link to="/" class="px-2 py-1 border-b-2 border-b-gray-400 m-2"
              >Example</router-link
            >
          </li>
          <li>
            <router-link to="/" class="px-2 py-1 border-b-2 border-b-gray-400 m-2"
              >Example</router-link
            >
          </li>

          <li>
            <router-link to="/" class="px-2 py-1 border-b-2 border-b-gray-400 m-2"
              >Example</router-link
            >
          </li>
          <li>
            <router-link to="/" class="px-2 py-1 border-b-2 border-b-gray-400 m-2"
              >Example</router-link
            >
          </li>
          <li>
            <router-link to="/" class="px-2 py-1 border-b-2 border-b-gray-400 m-2"
              >Example</router-link
            >
          </li>
        </ul>
      </div>
      <!-- menu end  -->
      <!-- info start  -->
      <div class="w-full py-6">
        <ul class="flex flex-col gap-4 justify-center items-center">
          <li class="text-center text-gray-400 text-md tracking-widest">info</li>
          <li>
            <a class="px-3 py-2 border border-gray-300 rounded-2xl" href="tel:9055555555"
              >+90 (555) 55 55</a
            >
          </li>
          <li>
            <a class="px-3 py-2 border border-gray-300 rounded-2xl" href="mailto:info@esazder.com"
              >info@esazder.com</a
            >
          </li>
        </ul>
      </div>
      <!-- info end  -->
    </div>
    <!-- mobile menu other side end  -->
  </transition>
  <!-- mobile menu end  -->
</template>

<script setup lang="ts">
import {
  Ellipsis,
  CircleUserRound,
  House,
  Newspaper,
  Info,
  X,
  LogIn,
  UserRoundPlus,
  Search,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from 'lucide-vue-next'
import { ref } from 'vue'
const isMobileMenu = ref(false)
const mobileMenuToggle = () => {
  isMobileMenu.value = !isMobileMenu.value
}
</script>
