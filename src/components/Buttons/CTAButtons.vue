<template>
  <component
    :is="props.href ? 'a' : 'button'"
    :href="props.href"
    :type="props.href ? undefined : type"
    :disabled="!props.href && props.disabled"
    :class="[
      'inline-flex items-center justify-center px-4 py-2 rounded-xl border-2 font-Inter transition-all duration-300',
      props.plein
        ? 'text-white bg-blue  border-blue  hover:bg-white hover:text-black'
        : 'text-black border-blue  hover:bg-blue hover:text-white',
      props.btnClass,
      props.disabled && !props.href
        ? 'opacity-50 cursor-not-allowed'
        : 'cursor-pointer',
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  btnClass?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  plein?: boolean;
}>();
</script>
