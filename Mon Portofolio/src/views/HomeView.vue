<template>
  <div class="min-h-screen flex items-center justify-center ">
    <aside
      class="hidden sm:block fixed top-1/2 left-0 -translate-y-1/2 z-50 space-y-4 p-2 bg-white rounded-r-lg shadow-lg">
      <a href="https://www.linkedin.com/in/jacques-gougou-457a93287" target="_blank"
        class="block bg-white m-2 p-2 rounded-full shadow">
        <img src="@/assets/linkedin.png" alt="LinkedIn" class="h-8 w-8">
      </a>
      <a href="https://github.com/Chirack96" target="_blank" class="block bg-white m-2 p-2 rounded-full shadow">
        <img src="@/assets/github.png" alt="GitHub" class="h-8 w-8">
      </a>
      <a href="https://twitter.com/chirack98" target="_blank" class="block bg-white m-2 p-2 rounded-full shadow">
        <img src="@/assets/TWITTER.png" alt="Twitter" class="h-8 w-8">
      </a>
    </aside>
    <div class="text-center animate-slideInRight">
      <h1 class="text-4xl font-bold text-gray-800">HEY, JE SUIS JACQUES GOUGOU</h1>
      <p class="mt-3 text-lg text-gray-600 max-w-2xl">
        Bienvenue sur mon portfolio ! Je suis un développeur fullstack, spécialisé dans la création de solutions web
        aussi bien côté client (frontend) que côté serveur (backend). Mon approche, centrée sur les résultats, enrichit
        chaque projet, assurant des produits finaux performants et réussis. Découvrez mes projets et voyez comment je
        peux donner vie à vos idées.
      </p>
      <button
        class="mt-8 bg-violet-900 hover:bg-violet-900 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-110 text-lg w-auto min-w-[200px]"><a
          href="/projects">Voir mes Projets</a>
      </button>
    </div>
  </div>
</template>

<script setup>
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
