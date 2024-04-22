<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-wrap justify-center">
      <div v-for="(project, index) in projects" :key="project.id" class="w-full md:w-1/3 p-4"
        :class="{ 'animate-slideInLeft': index % 2 === 0, 'animate-slideInRight': index % 2 !== 0 }">
        <ProjectCard class="w-full shadow-lg text-lg" :name="project.name" :description="project.description"
          :image="project.image" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ProjectCard from './ProjectCard.vue';

export default defineComponent({
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        { id: 1, name: 'Jobboard', description: 'Projet académique consitstant à créer un site web de recherche d\'emploi comme indeed. HTML CSS FOMANTIC-UI PHP.', image: 'https://uppercut-search.fr/wp-content/uploads/2019/11/JOBBOARD.png' },
        { id: 2, name: 'Jeu 2D Java', description: 'Création d\'un jeu 2D programmé en Java et LibGDX. Modelisation et conception. ', image: 'https://javaetmoi.com/wp-content/uploads/2019/02/2019-02-Black-Hell-Screenshot-1-player-1024x643.png' },
        { id: 3, name: 'ChatApp', description: 'Réalisation d\'une appli web de type discord. Technos utilisés: NodeJS, ExpressJS, MongoDB, ReactJS', image: 'https://img.freepik.com/premium-vector/chat-app-logo-design-template-can-be-used-icon-chat-application-logo_605910-1724.jpg' },
        { id: 4, name: 'DevOps', description: 'Creation d\'images dokerfile pour des app prédéfinies. Creation de containers et build avec Docker Compose.', image: 'https://www.1min30.com/wp-content/uploads/2018/04/Symbole-Docker.jpg' },
        { id: 5, name: 'Management Project', description: 'Creation d\'une entreprise fictive de production d\'aspirateurs robots. Gestion de projet, Management d\'équipe.', image: 'https://www.cahra.com/content/uploads/Visuel-Decryptage-managerial_Travail-en-mode-projet-et-management-de-transition.png' },
        { id: 6, name: 'Extension Web', description: 'Développement d\'une extension web de prévention contre des sites frauduleux. Entièrement développée en javascript.', image: 'https://www.lesvlogsdundev.com/wp-content/uploads/2023/12/emoji-everywhere-cover.jpeg' },
        { id: 7, name: 'E-commerce', description: 'Création d\'un site e-commerce avec en backend NodeJS, ExpressJS, MongoDB et Angular en frontend.', image: 'https://www.passion-entrepreneur.com/wp-content/uploads/2018/03/ecommerce.jpg' },
        { id: 8, name: 'Portfolio', description: 'Réalisation de mon portfolio pour la présentation de mes projets. Technos: VueJs, Typescript. ', image: 'https://www.extensis.com/hubfs/portfolio-hero-banner-img-D.png' },
        { id: 9, name: 'Backend Spring Boot', description: 'Backend de recupération des données de mon formulaire de contact depuis mon portfolio. Springboot, Postgresql.', image: 'https://www.developpez.com/public/images/news/spting-boot.png' }
      ]
    }
  }
});
</script>

<style scoped>
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100%);
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
