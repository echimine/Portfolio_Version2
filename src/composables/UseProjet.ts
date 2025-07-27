import { ref } from 'vue';
import type { Projet } from '../type/projet.type'; // ⬅️ chemin à adapter selon ton arborescence

export function useProjets() {
  const projets = ref<Projet[]>([]); // ✅ Typé
  const error = ref<Error | null>(null);
  const isLoading = ref(true);

  const fetchProjets = async () => {
    try {
      const response = await fetch('/data/projets.json');
      if (!response.ok) throw new Error('Erreur lors du chargement');
      const data: { projets: Projet[] } = await response.json(); // ✅ Typé aussi ici
      projets.value = data.projets;
    } catch (err: any) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  return { projets, error, isLoading, fetchProjets };
}
