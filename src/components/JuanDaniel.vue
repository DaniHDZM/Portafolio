<template>
  <header>
    <h1>Juan Daniel Hernández Mancilla</h1>
  </header>

  <!-- Navbar con hamburguesa corregida -->
  <nav class="navbar">
    <div class="nav-container">
      <button class="menu-toggle" @click="menuOpen = !menuOpen">
        <span class="hamburger-line" :class="{ active: menuOpen }"></span>
        <span class="hamburger-line" :class="{ active: menuOpen }"></span>
        <span class="hamburger-line" :class="{ active: menuOpen }"></span>
      </button>
      <ul class="nav-menu" :class="{ open: menuOpen }">
        <li><a href="#sobre-mí" @click="menuOpen = false">Sobre mí</a></li>
        <li><a href="#skills" @click="menuOpen = false">Skills</a></li>
        <li><a href="#proyectos" @click="menuOpen = false">Proyectos</a></li>
      </ul>
    </div>
  </nav>

  <main>
    <section id="sobre-mí">
      <p>
        Bienvenido a mi portafolio como <strong>desarrollador FrontEnd</strong> y 
        <strong>desarrollador de videojuegos</strong>.
      </p>
    </section>

    <!-- Foto -->
    <div class="foto-container">
      <img src="../photos/Yo-min-fotor-20250328135220.jpg" alt="Foto de Juan Daniel Hernández Mancilla" />
    </div>

    <!-- Contacto -->
    <section id="contacto">
      <p>
        Si quieres ponerte en contacto conmigo escríbeme a 
        <a href="mailto:sayu142184@gmail.com">sayu142184@gmail.com</a>
      </p>
      <button>
        <a href="" download>Descargar CV</a>
      </button>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/juan-daniel-hernandez-mancilla-bb1413284/" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/DaniHDZM" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
const menuOpen = ref(false);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background: #0f172a; /* fondo oscuro elegante */
  color: #f9fafb;
  line-height: 1.8;
  font-size: 18px;
}

/* Header */
header {
  background: #065f46;
  color: #fff;
  padding: 2rem;
  text-align: center;
}

header h1 {
  font-size: 2.3rem;
  font-weight: 600;
}

/* Navbar corregida */
.navbar {
  background: #064e3b;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
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
}

.nav-menu li a:hover {
  color: #34d399;
  background: rgba(16, 185, 129, 0.1);
}

/* Hamburger button mejorado */
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

/* Main con mejor espaciado */
main {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

/* Sección de bienvenida */
#sobre-mí {
  text-align: center;
  background: #1e293b;
  padding: 2.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

/* Foto */
.foto-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.foto-container img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #10b981;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

/* Contacto */
#contacto {
  text-align: center;
  margin: 3rem auto;
  padding: 2.5rem;
  background: #1e293b;
  border-radius: 12px;
}

#contacto a {
  color: #10b981;
  font-weight: 600;
  text-decoration: none;
}

#contacto button {
  background: #10b981;
  border: none;
  padding: 0.8rem 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  cursor: pointer;
}

#contacto button:hover {
  background: #34d399;
}

#contacto button a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

/* Redes sociales */
.social-links {
  margin-top: 1.5rem;
}

.social-links a {
  margin: 0 1rem;
  font-size: 2rem;
  color: #10b981;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #34d399;
}

/* Responsive adicional */
@media (max-width: 768px) {
  main {
    padding: 1.5rem 1rem;
  }

  #sobre-mí,
  #contacto {
    padding: 2rem 1.5rem;
  }

  header h1 {
    font-size: 2rem;
  }

  .foto-container img {
    width: 180px;
    height: 180px;
  }
}

@media (max-width: 480px) {
  main {
    padding: 1rem 0.5rem;
  }

  #sobre-mí,
  #contacto {
    padding: 1.5rem 1rem;
  }

  header h1 {
    font-size: 1.8rem;
  }

  .foto-container img {
    width: 160px;
    height: 160px;
  }
}
</style>