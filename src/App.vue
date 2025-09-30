<template>
  <nav class="navbar">
    <div class="nav-container">
      <button class="menu-toggle" @click="menuOpen = !menuOpen">
        <span class="hamburger-line" :class="{ active: menuOpen }"></span>
        <span class="hamburger-line" :class="{ active: menuOpen }"></span>
        <span class="hamburger-line" :class="{ active: menuOpen }"></span>
      </button>
      <ul class="nav-menu" :class="{ open: menuOpen }">
        <li>
          <a @click="navigateAndScroll('sobre-mí')">{{ $t('App.About') }}</a>
        </li>
        <li>
          <a @click="navigateAndScroll('skills')">{{ $t('App.Skill') }}</a>
        </li>
        <li>
          <a @click="navigateAndScroll('proyectos')">{{ $t('App.Project') }}</a>
        </li>
        <li class="lang-selector">
          <select v-model="$i18n.locale">
            <option value="EN">EN</option>
            <option value="MX">MX</option>
          </select>
        </li>
      </ul>
    </div>
  </nav>

  <router-view />

  <!-- Popup -->
  <div v-if="showPopup" class="popup-overlay">
    <div class="popup-content">
      <h2>🚧 {{ $t('App.Page') }} 🚧</h2>
      <p>{{ $t('App.Portfolio') }}</p>
      <button class="popup-btn" @click="showPopup = false">{{ $t('App.Close') }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const menuOpen = ref(false);
const showPopup = ref(true); // popup visible al inicio

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
/* Navbar */
.navbar {
  background: rgba(6, 78, 59, 0.8);
  padding: 0;
  position: fixed;
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

/* Botón hamburguesa */
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

html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #111827;
  color: #f9fafb;
  font-family: 'Poppins', sans-serif;
}

/* Dropdown idiomas */
.lang-selector select {
  background: #064e3b;
  color: #fff;
  border: 1px solid #34d399;
  border-radius: 6px;
  padding: 0.3rem 0.6rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
}

.lang-selector select:hover {
  background: #065f46;
}

.lang-selector option {
  background: #111827;
  color: #fff;
}

/* Responsive */
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

  .lang-selector select {
    font-size: 1.1rem;
    padding: 0.6rem 1.2rem;
  }
}

/* Padding del contenido */
.main-content {
  padding-top: 70px;
}

/* --- Popup --- */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 24, 39, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.popup-content {
  background: #1e293b;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  color: #f9fafb;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
  border: 2px solid #10b981;
}

.popup-content h2 {
  margin-bottom: 1rem;
  color: #10b981;
}

.popup-content p {
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #e5e7eb;
}

.popup-btn {
  background: #10b981;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.popup-btn:hover {
  background: #34d399;
}
</style>
