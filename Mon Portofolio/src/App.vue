<template>
  <div class="flex flex-col min-h-screen bg-gray-200">
    <header>
      <HeaderComponent />
    </header>
    <main class="mx-auto flex-grow p-12 max-w-16xl w-full">
      <router-view />
    </main>
    <footer class="bg-gray-800 text-white text-center py-4">
      © Votre Nom - Portfolio 2024
    </footer>
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
</script>
