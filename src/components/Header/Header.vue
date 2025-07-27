<template>
  <header class="px-4 md:px-10 z-10 sticky top-0">
    <div
      class="h-[100px] flex items-center justify-center bg-white/70  backdrop-blur-sm border-x-2 border-b-2 border-blue rounded-b-lg px-2"
    >
      <ul class="flex items-center justify-between w-full px-6">
        <li>
          <RouterLink to="/">
            <Typographie size="bodyxl">ELIOTT CHIMINELLO</Typographie>
          </RouterLink>
        </li>
        <li class="hidden md:block">
          <MenuDesktop />
        </li>
        <li class="block md:hidden">
          <MenuMobile />
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import MenuMobile from './MenuMobile.vue';
import MenuDesktop from './MenuDesktop.vue';
import Typographie from '../Typographie.vue';
</script>
