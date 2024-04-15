<template>
    <div class="border rounded-lg p-4 w-60 cursor-pointer hover:shadow-lg transition-shadow" @click="goTo(target)">
        <h2 class="font-bold text-lg mb-2">{{ title }}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps<{
    title: string;
    description: string;
    target: string;
}>();

const router = useRouter();

function goTo(target: string) {
    router.push(target);
}
</script>

<style scoped>
/* Add additional styles if needed */
</style>
