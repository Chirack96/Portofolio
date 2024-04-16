<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-6">Mes Formations</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div class="bg-white shadow-lg rounded-lg p-4 animate-slideIn" v-for="(formation, index) in formations"
        :key="index" :class="{ 'animate-slideInLeft': index % 2 === 0, 'animate-slideInRight': index % 2 !== 0 }">
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
  { id: 4, title: "MSC Architecte des Systèmes d'Informations", institution: "EPITECH Rennes", year: "2023 - 2024" },
  { id: 5, title: "POEC Développeur Cybersécurité", institution: "EPSI Rennes", year: "2023 - 2024" },
]);
</script>

<style scoped>
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slideInLeft {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slideInRight {
  animation: slideInRight 0.8s ease-out forwards;
}
</style>
