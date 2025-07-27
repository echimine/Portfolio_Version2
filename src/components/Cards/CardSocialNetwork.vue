<template>
  <component
    :is="link ? 'a' : 'div'"
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="label"
    :title="label"
    class="bg-blue dark:bg-orange w-12 h-12 rounded-2xl flex justify-center items-center transition-transform duration-200 hover:scale-110 hover:brightness-110"
  >
    <img :src="icons[img]" class="w-6 h-6 text-black fill-current" />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  img: 'instagram' | 'linkedin' | 'gitHub' | 'mail';
  link?: string;
}>();

import GithubIcon from '/images/logo/github.svg';
import LinkedinIcon from '/images/logo/linkedin.svg';
import InstagramIcon from '/images/logo/instagram.svg';
import MailIcon from '/images/logo/mail.svg';

const icons = {
  gitHub: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
};

const labelMap = {
  gitHub: 'GitHub',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  mail: 'Email',
};

const label = labelMap[props.img];
</script>
