<template>
    <div class="flex flex-wrap justify-center gap-40 p-32">
        <HomeCard v-for="(card, index) in cards" :key="card.id" :title="card.title" :description="card.description"
            :target="card.target" :class="[(index % 2 === 0) ? 'animate-slideInLeft' : 'animate-slideInRight']" />
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
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-slideInLeft {
    animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slideInRight {
    animation: slideInRight 0.8s ease-out forwards;
}
</style>
