import ProjectDetails from '@/components/ProjectDetails.vue';
<template>
    <div class="container mx-auto px-4 py-8 animate-fadeIn">
        <div class="flex flex-wrap items-start">

          
            <div class="w-full md:w-1/2 p-4 animate-slideInLeft">
                <h2 class="text-2xl font-bold mb-3">Get to know me!</h2>
                <div class="text-justify mb-3 text">
                    <p>
                        Bienvenue sur mon espace professionnel ! Je suis un Développeur Web Full-Stack spécialisé dans
                        la conception des composants front-end et back-end de sites web et d'applications web. Mon
                        travail garantit le succès du produit final. Vous pouvez découvrir des exemples de mes projets
                        dans la section <strong><a href="/projects"
                                class="text-violet-900 text-lg">Projects</a></strong>.
                    </p><br>
                    <p>
                        Je suis passionné par l'apprentissage continu et la veille technologique dans le domaine de
                        l'IT. Je m'efforce constamment de me tenir au courant des dernières avancées et tendances.
                    </p><br>
                    <p>
                        Je suis actuellement à la recherche d'une alternance pour compléter mon Bac+5. Si vous avez une
                        opportunité excitante qui correspond à mes compétences, n'hésitez pas à me contacter.
                    </p>
                    <p>
                        N'hésitez pas à vous connecter avec moi <strong><a
                                href="https://www.linkedin.com/in/jacques-gougou-457a93287" target="_blank"
                                class="text-violet-900 text-lg">ici</a></strong> ou à
                        suivre mon <strong><a href="https://www.github.com/Chirack96" target="_blank"
                                class="text-violet-900 text-lg">Github</a></strong> pour des mises à jour
                        régulières sur mon parcours et mes projets de développement web.
                    </p>
                </div>
            </div>

           
            <div class="w-full md:w-1/2 p-4 animate-slideInRight">
                <h3 class="text-2xl font-bold mb-2">SKILLS</h3>
                <div class="flex flex-wrap gap-2">
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">Spring
                        Boot</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">Node.js</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">Express.js</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">Java</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">PHP</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">MongoDB</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">Sql</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">PostgreSql</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">SCSS</span>

                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">HTML5</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">Angular</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">Vue.js</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">React</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">TypeScript</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">JavaScript</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">Docker</span>

                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">FreeBSD</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">OpenBSD</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">Git</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">Github</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">Responsive
                        Design</span>
                    <span class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">Linux
                        CSS</span>
                    <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">Windows</span>
                        <span
                        class="bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-sm">Agile</span>

                </div>
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
.text {
    line-height: 1.6;
    /* Espacement entre les lignes */
    font-size: 1.1rem;
    /* Taille de la police */
    margin-bottom: 1.5em;
    /* Espacement entre les paragraphes */
}
</style>
