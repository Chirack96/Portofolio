<template>
    <div class="flex flex-wrap justify-center gap-40 p-32 lg:animate-fadein animate-none">
        <HomeCard v-for="card in cards" :key="card.id" :title="card.title" :description="card.description"
            :target="card.target" />
    </div>
</template>

<script setup>
import HomeCard from '@/components/HomeCard.vue';

const cards = [
    { id: 5, title: 'Home', description: 'Accueil.', target: '/home' },
    { id: 1, title: 'Profil', description: 'Voir mon profil.', target: '/bio' },
    { id: 2, title: 'Projets', description: 'Découvrir mes projets.', target: '/projects' },
    { id: 3, title: 'Contact', description: 'Me contacter.', target: '/contact' },
    { id: 4, title: 'Technos', description: 'Voir mes technos', target: '/technos' }
];
</script>

<style scoped>
/* Additional styles if needed */
</style>
