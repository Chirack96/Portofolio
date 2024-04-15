<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap -mx-4">
      <!-- Section for Profile Photo -->
      <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
        <ProfilePhoto />
      </div>
      <!-- Section for Bio and Other Components -->
      <div class="w-full md:w-2/3 px-4">
        <Ma_Bio style="margin-top: 20px;"/>
      </div>
    </div>
    <div>
      <HomeListCard />
    </div>
  </div>
</template>

<script setup>
import HomeListCard from '@/components/HomeListCard.vue';
import Ma_Bio from '@/components/Ma_Bio.vue';
import ProfilePhoto from '@/components/ProfilePhoto.vue';
</script>

<style scoped>
/* Additional styles if needed */
</style>
