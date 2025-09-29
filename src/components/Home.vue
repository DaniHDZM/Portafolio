<!-- Componente Principal (tu template actual) -->
<template>
  <head>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      >
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      >
    </head>
  <div id="app">
    
    
    <!-- Navbar global -->
    

    <!-- Contenido de los componentes -->
    <div class="main-content">
      <JuanDaniel></JuanDaniel>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </div>
  </div>
</template>

<script setup>

import AboutMe from './AboutMe.vue';
import JuanDaniel from './JuanDaniel.vue';
import Projects from './Projects.vue';


</script>

<style>
/* Estilos globales - sin scoped para que afecten todo */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  font-family: 'Poppins', sans-serif;
  background: #0f172a;
  color: #f9fafb;
  line-height: 1.8;
  font-size: 18px;
}

#app {
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}



/* Responsive navbar */

</style>