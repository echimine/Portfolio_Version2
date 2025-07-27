<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

type Size = 'h1' | 'h2' | 'h3' | 'h4' | 'bodyxl' | 'bodybase' | 'footer';
type Font = 'inter';
type Weight = 'regular' | 'medium' | 'bold';
type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

const props = defineProps<{
  size?: Size;
  font?: Font;
  weight?: Weight;
  as?: Tag;
}>();

const size = props.size ?? 'bodybase';
const font = props.font ?? 'inter';
const weight = props.weight ?? 'regular';
const as = props.as ?? 'p';
const currentMode = ref<'light' | 'dark'>('light');

let observer: MutationObserver | null = null;

const updateMode = () => {
  const isDark = document.documentElement.classList.contains('dark');
  currentMode.value = isDark ? 'dark' : 'light';
};

onMounted(() => {
  updateMode();
  if (typeof window !== 'undefined') {
    observer = new MutationObserver(updateMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});

const finalClass = computed(() => {
  return [
    `typo-${size}`,
    `font-${font}`,
    `weight-${weight}`,
    `mode-${currentMode.value}`,
  ].join(' ');
});
</script>

<template>
  <component :is="as" :class="finalClass">
    <slot />
  </component>
</template>
