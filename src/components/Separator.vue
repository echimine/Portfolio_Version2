<template>
  <div :class="['flex justify-center', props.home ? 'py-20 px-10' : '']">
    <div
      :class="[
        `bg-black dark:bg-white w-full`,
        props.projet ? 'h-[1px]' : 'h-[2px]',
      ]"
    ></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  home?: boolean;
  projet?: boolean;
}>();
</script>
