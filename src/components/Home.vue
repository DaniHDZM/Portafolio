<!-- Componente Principal (tu template actual) -->
<template>
  <div id="app">
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
    
    <!-- Navbar global -->
    <nav class="navbar">
      <div class="nav-container">
        <button class="menu-toggle" @click="menuOpen = !menuOpen">
          <span class="hamburger-line" :class="{ active: menuOpen }"></span>
          <span class="hamburger-line" :class="{ active: menuOpen }"></span>
          <span class="hamburger-line" :class="{ active: menuOpen }"></span>
        </button>
        <ul class="nav-menu" :class="{ open: menuOpen }">
          <li>
            <a @click="navigateAndScroll('sobre-mí')">About me</a>
          </li>
          <li>
            <a @click="navigateAndScroll('skills')">Skills</a>
          </li>
          <li>
            <a @click="navigateAndScroll('proyectos')">Projects</a>
          </li>

        </ul>
      </div>
    </nav>

    <!-- Contenido de los componentes -->
    <div class="main-content">
      <JuanDaniel></JuanDaniel>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import AboutMe from './AboutMe.vue';
import JuanDaniel from './JuanDaniel.vue';
import Projects from './Projects.vue';

const menuOpen = ref(false);

const router = useRouter();
const route = useRoute();

// Función para scroll suave a las secciones
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const elementPosition = element.offsetTop - navbarHeight - 20;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

const navigateAndScroll = (sectionId) => {
  menuOpen.value = false;

  if (route.path !== "/") {
    router.push("/").then(() => {
      setTimeout(() => scrollToSection(sectionId), 300);
    });
  } else {
    scrollToSection(sectionId);
  }
};
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

/* Navbar mejorado - ahora global y sticky */
.navbar {
  background: #064e3b;
  padding: 0;
  position: fixed; /* Cambiado de sticky a fixed */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.nav-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
}

.nav-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-menu li a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}

.nav-menu li a:hover {
  color: #34d399;
  background: rgba(16, 185, 129, 0.1);
}

/* Hamburger button */
.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1001;
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background: #fff;
  margin: 3px 0;
  transition: 0.3s;
  transform-origin: center;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Responsive navbar */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-menu {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(6, 78, 59, 0.95);
    backdrop-filter: blur(10px);
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 1000;
  }

  .nav-menu.open {
    display: flex;
  }

  .nav-menu li a {
    font-size: 1.3rem;
    padding: 1rem 2rem;
  }
}

/* Agregar padding-top al contenido para compensar el navbar fixed */
.main-content {
  padding-top: 70px; /* Ajusta según la altura de tu navbar */
}
</style>