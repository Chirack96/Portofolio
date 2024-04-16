<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center animate-slideInRight">
      <h1 class="text-4xl font-bold text-gray-800">Hey, Je suis Jacques Gougou</h1>
      <p class="mt-3 text-lg text-gray-600">
        A Result-Oriented Web Developer building and managing Websites and Web Applications that lead to the success of
        the overall product.
      </p>
      <!-- Enlarged Projects button -->
      <button
        class="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-110 text-lg w-auto min-w-[200px]"
        @click="goToProjects">
        Projects
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToProjects = () => {
  router.push('/projects');
}
</script>

<style scoped>
@keyframes slideInRight {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slideInRight {
  animation: slideInRight 0.8s ease-out forwards;
}
</style>
