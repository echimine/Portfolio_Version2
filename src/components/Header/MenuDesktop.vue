<template>
  <div class="flex gap-6">
    <RouterLink to="/projets" :class="[getLinkClass('/projets')]">
      <Typographie size="bodyxl">Mes projets</Typographie>
    </RouterLink>

    <RouterLink to="/a-propos" :class="getLinkClass('/a-propos')">
      <Typographie size="bodyxl" class="hover:text-blue">À propos</Typographie>
    </RouterLink>

    <!-- <RouterLink to="/contact" :class="getLinkClass('/contact')">
      <Typographie size="bodyxl">Contact</Typographie>
    </RouterLink> -->

    <!-- <SwitchColor /> -->
  </div>
</template>

<script setup lang="ts">
import Typographie from '../Typographie.vue';
// import SwitchColor from '../Buttons/SwitchColor.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const getLinkClass = (targetPath: string) => {
  return route.path === targetPath
    ? 'underline text-blue font-Inter font-normal' // ou hover:text-blue-700
    : '';
};
</script>
