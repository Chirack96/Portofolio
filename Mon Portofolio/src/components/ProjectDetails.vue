<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap -m-4">
      <ProjectCard class="p-4 animate-slideInDown" v-for="project in projects" :key="project.id" :name="project.name"
        :description="project.description" :image="project.image" />
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        { id: 1, name: 'DevOps', description: 'Description of Project 1', image: 'https://www.1min30.com/wp-content/uploads/2018/04/Symbole-Docker.jpg' },
        { id: 2, name: 'Jobboard', description: 'Description of Project 2', image: 'https://uppercut-search.fr/wp-content/uploads/2019/11/JOBBOARD.png' },
        { id: 3, name: 'ChatApp', description: 'Description of Project 3', image: 'https://thumbs.dreamstime.com/z/chuchoter-chat-app-bulle-design-logo-deux-bulles-de-ou-des-ballons-dans-la-forme-earlobe-parfait-pour-cryptage-protection-vie-235091376.jpg' },
        { id: 4, name: 'Portfolio', description: 'Description of Project 4', image: 'https://www.extensis.com/hubfs/portfolio-hero-banner-img-D.png' },
        { id: 5, name: 'E-commerce', description: 'Description of Project 5', image: 'https://www.passion-entrepreneur.com/wp-content/uploads/2018/03/ecommerce.jpg' },
        { id: 6, name: 'Jeu 2D Java', description: 'Description of Project 6', image: 'https://javaetmoi.com/wp-content/uploads/2019/02/2019-02-Black-Hell-Screenshot-1-player-1024x643.png' },
        // Add more projects as needed
      ]
    };
  }
}
</script>

<style scoped>
@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideInDown {
  animation: slideInDown 0.8s ease-out forwards;
}
</style>
