<template>
  <div class="flex justify-center items-center flex-col mt-10">
    <!-- Image avec animation de gauche à droite -->
    <div class="animate-slideInFromLeft">
      <img class="rounded-full object-cover w-48 h-48" src="@/assets/photo.jpg" alt="Profile Photo">
      <!-- Titre sous la photo -->
      <h2 class="text-xl font-bold text-gray-700 mt-4">Développeur Fullstack</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'ProfilePhoto',
});
</script>

<style scoped>
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slideInFromLeft {
  animation: slideInFromLeft 1s ease-out forwards;
}

/* Styles supplémentaires pour la taille de caractère et la couleur */
.text-xl {
  font-size: 20px;
  /* Taille de texte pour le titre */
  color: #333;
  /* Couleur de texte sombre pour un bon contraste */
}

.font-bold {
  font-weight: bold;
  /* Mettre le texte en gras */
}

.mt-4 {
  margin-top: 1rem;
  /* Espacement après l'image */
}
</style>
