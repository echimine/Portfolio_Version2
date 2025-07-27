<script setup lang="ts">
import Separator from '../components/Separator.vue';
import CardProjets from '../components/Cards/CardProjets.vue';
import CTAButtons from '../components/Buttons/CTAButtons.vue';
import Typographie from '../components/Typographie.vue';
import type { Projet } from '../type/projet.type';
import { onMounted, ref } from 'vue';

const projets = ref<Projet[]>([]);

onMounted(async () => {
  const response = await fetch('/data/projets.json');
  const data = await response.json();
  projets.value = data.projets;
});
</script>
<template>
  <section
    class="w-full min-h-[calc(100dvh-100px)] flex flex-wrap items-center justify-center gap-10 py-10 px-4 md:px-10"
  >
    <div class="flex flex-col gap-4">
      <Typographie size="bodyxl">Eliott CHIMINELLO - ECHIMINE</Typographie>
      <div class="flex flex-col gap-2">
        <Typographie size="h1" as="h1" class="leading-none"
          >DEVELOPPEUR</Typographie
        >
        <Typographie size="h1" as="h1" class="leading-none">WEB</Typographie>
      </div>
      <div class="md:flex md:justify-end hidden gap-6">
        <CTAButtons href="#a-propos">Explorer</CTAButtons>
        <CTAButtons target="_blank" href="/images/CV_Eliott_CHIMINELLO.pdf"
          >Mon CV</CTAButtons
        >
      </div>
    </div>
    <div class="max-w-[400px] max-h-[80vh]">
      <img
        class="rounded-2xl min-w-[300px]: max-w[500px] object-contain"
        src="/images/image-eliott.png"
        alt=""
      />
    </div>

    <div class="md:hidden flex gap-6">
      <CTAButtons href="#a-propos">Explorer</CTAButtons>
      <CTAButtons href="/images/CV_Eliott_CHIMINELLO.pdf">Mon CV</CTAButtons>
    </div>
  </section>
  <Separator home id="mes-projets" />
  <section class="h-full py-5 px-4 md:px-10">
    <Typographie size="h2" as="h2">MES DERNIERS PROJETS</Typographie>
    <div class="pt-4 md:flex flex-wrap justify-between gap-4 hidden">
      <Typographie size="bodyxl" as="p"
        >Découvrer mes autres projets
      </Typographie>
      <CTAButtons plein class="md:w-[300px] w-full" href="projets"
        >Découvrir tous mes projets
      </CTAButtons>
    </div>
    <CardProjets :projets="projets" home />
    <div class="flex flex-wrap justify-between gap-4 md:hidden pt-20 pb-20">
      <Typographie size="bodyxl" as="p" class="text-center w-full"
        >Découvrer mes autres projets
      </Typographie>
      <CTAButtons is="link" plein class="md:w-[300px] w-full" href="projets"
        >Découvrir tous mes projets
      </CTAButtons>
    </div>
  </section>
  <Separator class="pb-15 px-8" id="a-propos" />

  <section class="px-4 md:px-10">
    <Typographie size="h2" as="h2">A PROPOS DE MOI</Typographie>
    <div class="py-10 grid grid-cols-1 md:grid-cols-2 gap-10 2xlpx-40">
      <!-- Image -->

      <img
        src="/images/P1000884_1.jpg"
        alt="Image de présentation"
        class="rounded-2xl w-full transition"
      />

      <!-- Texte -->
      <div class="w-full flex flex-col gap-10">
        <Typographie size="bodyxl">
          Passionné par le web et la création numérique, je suis actuellement
          étudiant en DN MADE mention développement web à L'École by CCI à
          Annecy. Curieux, rigoureux et toujours à l’écoute, j’ai à cœur de
          développer des expériences interactives qui allient esthétique et
          performance. Mon parcours mêle design, code et une bonne dose de
          créativité.
        </Typographie>

        <Typographie size="bodyxl">
          En dehors je ne fais pas que coder, je pars faire du vélo soit autour
          d'Annecy, soit en Savoie. Cela me permet de découvrir de nouveaux
          paysages, mais aussi de faire des rencontres et de me dépenser en
          prenant du plaisir ;)
        </Typographie>
        <div class="flex flex-col gap-2">
          <img
            src="/images/velo-meribel-col-de-la-loze.jpg"
            alt="velo posez sur une table au col de la Loze à Meribel en savoie"
            class="rounded-2xl"
          />
          <Typographie class="italic opacity-50"
            >Sortie vélo au col de la Loze à Méribel</Typographie
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
