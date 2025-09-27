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
  <body>
    <JuanDaniel></JuanDaniel>
    <AboutMe></AboutMe>
    <Projects></Projects>
  </body>
</template>

<script setup>
import AboutMe from './components/AboutMe.vue';
import JuanDaniel from './components/JuanDaniel.vue';
import Projects from './components/Projects.vue';
</script>

<style scoped>
html, body {
  border: none;
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #111827; /* gris oscuro */
  color: #f9fafb;
  font-family: 'Poppins', sans-serif;
}

</style>
