<template>
  <main class="py-16 px-4 md:px-10">
    <Typographie size="h1" as="h1">MES PROJETS</Typographie>
    <Typographie size="bodyxl" as="h2" class="mb-4">
      Découvrez mes projets
    </Typographie>
    <Separator />

    <CardsCardProjets :projets="projets" />
  </main>
</template>

<script setup lang="ts">
import CardsCardProjets from '../components/Cards/CardProjets.vue';
import Typographie from '../components/Typographie.vue';
import { onMounted, ref } from 'vue';
import type { Projet } from '../type/projet.type';

const projets = ref<Projet[]>([]);

onMounted(async () => {
  const response = await fetch('/data/projets.json');
  const data = await response.json();
  projets.value = data.projets;
});
</script>
