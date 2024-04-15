<template>
  <div class="p-4 md:w-1/3 sm:mb-0 mb-6" style="margin-top: 20px;">
    <div class="rounded-lg h-64 overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <img :alt="name" class="object-cover object-center h-full w-full" :src="image">
    </div>
    <h2 class="text-xl font-semibold title-font text-gray-900 mt-5">{{ name }}</h2>
    <p class="text-base leading-relaxed mt-2 text-gray-700">{{ description }}</p>
    <a href="#" class="text-indigo-600 inline-flex items-center mt-3 hover:text-indigo-800 transition-colors">
      Learn More
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['name', 'description', 'image']
}
</script>
