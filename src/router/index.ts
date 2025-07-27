import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/index.vue';
import AProposView from '../views/a-propos.vue';
import ContactView from '../views/contact.vue';
import ProjetsView from '../views/projets.vue';
import ProjetView from '../views/projet/[id].vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/a-propos', component: AProposView },
  { path: '/contact', component: ContactView },
  { path: '/projets', component: ProjetsView },
  {
    path: '/projet/:id',
    name: 'Projet',
    component: ProjetView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
