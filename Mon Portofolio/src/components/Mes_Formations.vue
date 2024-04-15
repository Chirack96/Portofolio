<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-6">Mes Formations</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div class="bg-white shadow-lg rounded-lg p-4" v-for="(formation, index) in formations" :key="index">
        <h3 class="font-semibold text-lg">{{ formation.title }}</h3>
        <p>{{ formation.institution }}</p>
        <p class="text-sm text-gray-500">{{ formation.year }}</p>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

interface Formation {
  id: number;
  title: string;
  institution: string;
  year: string;
}

const formations = ref<Formation[]>([
  { id: 1, title: "Baccalauréat Scientifique", institution: "Université du Bénin", year: "2011 - 2012" },
  { id: 2, title: "Licence en Géosciences Appliquées", institution: "Université des Sciences du Bénin", year: "2012 - 2015" },
  { id: 3, title: "Licence en Géosciences Appliquées", institution: "Université de Rennes 1", year: "2018 - 2019" },
  { id: 4, title: "Pré-MSC Dévéloppeur Informatique", institution: "EPITECH Rennes", year: "2023 - 2024" },
  { id: 5, title: "POEC Développeur Cybersécurité", institution: "EPSI rennes", year: "2023 - 2024" },
  // Ajoutez plus de formations ici
]);
</script>

<style scoped>
/* Styles additionnels si nécessaire */
</style>
