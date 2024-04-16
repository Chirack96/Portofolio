<template>
    <div class="container mx-auto px-4 py-8 animate-fadeIn">
        <div class="flex flex-wrap items-center">
            <!-- Section photo avec animation adaptative -->
            <div class="w-full md:w-1/3 animate-slideInLeft flex justify-center mb-4 md:mb-0">
                <img class="rounded-full object-cover w-32 h-32 md:w-48 md:h-48" src="@/assets/photo.jpg"
                    alt="Profile Photo">
            </div>
            <!-- Section de contenu avec animation -->
            <div class="w-full md:w-2/3 md:pl-8 animate-slideInRight">
                <h2 class="text-2xl font-bold mb-3">À propos de moi</h2>
                <p class="text-justify mb-3">
                    Développeur Fullstack avec une forte expertise dans les technologies front-end et back-end, je crée
                    des solutions logicielles efficaces et performantes. Je possède une solide expérience en
                    développement web utilisant Node.js, Express.js, Angular, TypeScript, Vue.js, Java, JavaScript,
                    ainsi que des compétences en bases de données avec MongoDB et PHP.
                </p>
                <p class="text-justify mb-3">
                    J'ai également une expérience approfondie en administration réseau, ayant travaillé avec FreeBSD et
                    OpenBSD pour des configurations réseau complexes incluant DHCP, ping, et d'autres protocoles.
                </p>
                <h3 class="text-xl font-bold mb-2">Compétences techniques</h3>
                <ul class="list-disc pl-5 mb-3">
                    <li>Fullstack Development (Front-end & Back-end)</li>
                    <li>Frameworks & Technologies : Node.js, Express.js, Angular, Vue.js, React, TypeScript, Java,
                        JavaScript, Docker</li>
                    <li>Database Management: MongoDB, PHP</li>
                    <li>Network Administration: FreeBSD, OpenBSD</li>
                </ul>
                <h3 class="text-xl font-bold mb-2">Projets et Réalisations</h3>
                <p>Conception et développement de systèmes complexes pour des clients variés, améliorant
                    significativement les performances et la satisfaction utilisateur.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

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

.animate-fadeIn {
    animation: fadeIn 0.8s ease-out forwards;
}

.animate-slideInLeft {
    animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slideInRight {
    animation: slideInRight 0.8s ease-out forwards;
}
</style>
