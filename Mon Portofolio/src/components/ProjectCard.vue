<template>
  <div class="p-4 md:w-1/8 sm:mb-0 mb-6">
    <div class="rounded-lg h-48 overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <img :alt="name" class="object-cover object-center h-full w-full" :src="image">
    </div>
    <h2 class="text-lg font-semibold title-font text-gray-900 mt-5">{{ name }}</h2>
    <p class="text-sm leading-relaxed mt-2 text-black">{{ description }}</p>
    <a href="https://github.com/Chirack96" class="text-violet-900 inline-flex items-center mt-3 hover:text-violet-900 font-bold transition-colors" target="_blank">
      Visiter le projet
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        class="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['id', 'name', 'description', 'image']
}
</script>
