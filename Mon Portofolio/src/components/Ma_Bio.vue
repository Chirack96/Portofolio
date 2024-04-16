<template>
  <div class="p-6 bg-white shadow rounded-lg animate-slideInRight">
    <p>"Salut ! Je suis un développeur fullstack qui est passionné par tous les aspects de l’informatique moderne. Mon
      désir sincère pour l’excellence se reflète dans mon attention méticuleuse aux détails et dans mon code propre et
      maintenable. Résoudre des problèmes difficiles me donne un réel sentiment de satisfaction, et je m’efforce
      toujours d’anticiper de nouveaux défis technologiques pour trouver des solutions innovantes.<br>Vous pouvez voir mon
      portfolio pour voir ce que signifie vraiment transformer vos idées en applications qui fonctionnent incroyablement
      bien tout en étant un régal pour les yeux. Si vous recherchez un développeur qui peut apporter une valeur tangible
      à vos projets, je serai ravi de discuter d’éventuels partenariats."</p>
  </div>
</template>

<style scoped>
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

.animate-slideInRight {
  animation: slideInRight 0.8s ease-out forwards;
}
</style>
