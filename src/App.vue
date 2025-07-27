<template>
  <div class="dark:bg-black">
    <ArrowTop />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import ArrowTop from './components/ArrowTop.vue';
import Footer from './components/Footer/Footer.vue';
import Header from './components/Header/Header.vue';
import { onMounted } from 'vue';

onMounted(async () => {
  const Lenis = (await import('@studio-freight/lenis')).default;
  const lenis = new Lenis();

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href')?.substring(1);
      const targetEl = document.getElementById(targetId || '');

      if (targetEl) {
        lenis.scrollTo(targetEl, {
          offset: 0,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    });
  });

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
});
</script>
<style></style>
