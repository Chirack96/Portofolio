<template>
  <div class="flex justify-center">
    <!-- Modification pour utiliser Tailwind pour les dimensions plutôt que des styles en ligne, 
         ajout de classes pour une meilleure réponse et qualité d'image -->
    <img class="rounded-full object-cover w-48 h-48" src="@/assets/photo.jpg" alt="Profile Photo">
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'ProfilePhoto',
});
</script>
