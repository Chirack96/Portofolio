<template>
  <div class="flex flex-col min-h-screen bg-gray-200">
    
    <header class="sticky top-0 z-50 bg-gray-800">
      <HeaderComponent />
    </header>
    <main class="mx-auto main-bg flex-grow p-12 max-w-16xl w-full">
      <router-view />
    </main>
    <footer class="bg-black text-white text-center py-4">
      © JACQUES GOUGOU - Portfolio 2024
    </footer>
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import { defineComponent } from 'vue';

defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
  },
});
</script>

<style scoped>
.main-bg {
  background-image: url('@/assets/bg1.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
</style>
