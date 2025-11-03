<template>
  <footer class="bg-black w-full">
    <div class="py-10 w-full min-h-72 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <div class="text-center flex flex-col justify-center items-center gap-2">
        <img src="@/assets/images/logo.png" class="w-36" alt="" />
        <h1 class="text-xl text-secondary">ESAZDER</h1>
        <p class="text-xs text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti facilis labore
          nostrum quo reiciendis asperiores aperiam, dignissimos quis fugiat harum omnis nulla in
          sit esse tempora doloremque distinctio id!
        </p>
      </div>
      <div class="grid grid-cols-2 text-md text-secondary py-6">
        <ul class="flex items-center justify-center flex-col">
          <li class="text-gray-300 text-center">Menü</li>
          <li>
            <router-link to="/">Example</router-link>
          </li>
          <li>
            <router-link to="/">Example</router-link>
          </li>
          <li>
            <router-link to="/">Example</router-link>
          </li>
          <li>
            <router-link to="/">Example</router-link>
          </li>

          <li>
            <router-link to="/">Example</router-link>
          </li>
          <li>
            <router-link to="/">Example</router-link>
          </li>
        </ul>
        <ul class="flex items-center justify-center flex-col">
          <li class="text-gray-300 text-center">Kısa linkler</li>
          <li>
            <router-link to="/">Example</router-link>
          </li>
          <li>
            <router-link to="/">Example</router-link>
          </li>
          <li>
            <router-link to="/">Example</router-link>
          </li>
          <li>
            <router-link to="/">Example</router-link>
          </li>

          <li>
            <router-link to="/">Example</router-link>
          </li>
          <li>
            <router-link to="/">Example</router-link>
          </li>
        </ul>
      </div>
      <div>
        <form action="" class="flex justify-center items-center gap-2">
          <input
            type="email"
            placeholder="email"
            class="px-4 py-2 rounded-md bg-secondary roudned-md"
          />
          <button type="submit" class="px-4 rounded-md py-2 bg-primary text-secondary font-bold">
            Abone ol
          </button>
        </form>
      </div>
    </div>
    <div class="flex text-xs text-gray-300 py-2 justify-center items-center text-secondary">
      &copy; all right reserved. code by IGstudio.
    </div>
  </footer>
</template>
