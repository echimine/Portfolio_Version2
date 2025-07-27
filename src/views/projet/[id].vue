<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useProjets } from '../../composables/UseProjet';

import Separator from '../../components/Separator.vue';
import Typographie from '../../components/Typographie.vue';
import Spinner from '../../components/Spinner.vue'; // Si tu as un spinner
import CTAButtons from '../../components/Buttons/CTAButtons.vue';

const route = useRoute();
const { projets, isLoading, error, fetchProjets } = useProjets();

// Rafraîchit les projets si nécessaire à l’arrivée sur la page
if (!projets.value.length) {
  fetchProjets();
}

// ID dynamique basé sur la route
const projetId = computed(() => route.params.id);

// Projet sélectionné dynamiquement
const projet = computed(() =>
  projets.value.find((p) => String(p.id) === String(projetId.value))
);

// Si tu veux re-fetch quand l'id change (optionnel)
watch(projetId, () => {
  if (!projets.value.length) fetchProjets();
});
</script>

<template>
  <!-- Spinner -->
  <div v-if="isLoading" class="flex justify-center items-center min-h-screen">
    <Spinner />
  </div>

  <!-- Erreur -->
  <div
    v-else-if="error"
    class="flex justify-center items-center min-h-screen text-red-600"
  >
    <Typographie size="h1" as="h1"
      >Une erreur est survenue : {{ error.message }}</Typographie
    >
  </div>

  <!-- Projet non trouvé -->
  <div
    v-else-if="!projet"
    class="flex justify-center items-center min-h-screen"
  >
    <Typographie size="h1" as="h1">Projet non trouvé</Typographie>
  </div>

  <!-- Affichage du projet -->
  <section v-else>
    <div class="mb-10 py-16 px-4 md:px-10">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <Typographie size="h1" as="h1">{{ projet.title }}</Typographie>
        <Typographie size="h4" weight="medium" as="h4" class="opacity-45">
          {{ projet.date }}
        </Typographie>
      </div>
      <div class="lg:w-3/4 mt-10">
        <Typographie size="bodyxl">{{ projet.text }}</Typographie>
      </div>
    </div>

    <!-- Détail du projet -->
    <div class="lg:w-3/4 rounded-2xl py-10 mb-8 px-4 md:px-10">
      <Typographie size="h3" as="h3">Détail du projet</Typographie>

      <div class="flex flex-col gap-6 pt-6">
        <!-- Technologies -->
        <div class="flex justify-between flex-wrap">
          <Typographie>Technologies</Typographie>
          <div class="flex gap-2 flex-wrap">
            <Typographie
              v-for="tech in projet.technologies"
              :key="tech.technologie"
            >
              {{ tech.technologie }}
            </Typographie>
          </div>
        </div>

        <Separator projet />

        <!-- Compétences -->
        <div class="flex justify-between flex-wrap">
          <Typographie>Compétences</Typographie>
          <div class="flex gap-2 flex-wrap">
            <Typographie
              v-for="comp in projet.competences"
              :key="comp.competence"
            >
              {{ comp.competence }}
            </Typographie>
          </div>
        </div>

        <Separator projet />

        <!-- Liens -->
        <div class="flex justify-between flex-wrap">
          <Typographie>Visiter</Typographie>
          <div class="flex gap-2">
            <div v-for="visite in projet.links" :key="visite.linksite">
              <CTAButtons is="a" :href="visite.linksite">{{
                visite.linkname
              }}</CTAButtons>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Paragraphes -->
    <Typographie class="py-6 px-4 md:px-10" size="h3" as="h3"
      >À propos du projet</Typographie
    >
    <div
      v-for="paragraphe in projet.paragraphes"
      :key="paragraphe.paragraphe"
      class="mb-4 lg:w-3/4 px-4 md:px-10"
    >
      <Typographie>{{ paragraphe.paragraphe }}</Typographie>
    </div>

    <!-- Galerie d'images -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 px-4 md:px-10">
      <img
        v-for="image in projet.images"
        :key="image.image"
        :src="image.image"
        :alt="image.alt"
        :title="image.alt"
        class="rounded-lg md:rounded-2xl object-cover w-full h-auto"
      />
    </div>
  </section>
</template>
