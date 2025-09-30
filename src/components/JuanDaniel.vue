<template>
  <div class="juan-daniel-container">
    <header>
      <h1>Juan Daniel Hernández Mancilla</h1>
    </header>

    <main>
      <section id="bienvenido">
        <p>
          {{ $t('JuanDaniel.Welcome') }} <strong> {{ $t('JuanDaniel.FrontEnd') }} </strong> {{$t('JuanDaniel.And')}} 
          <strong>{{ $t('JuanDaniel.Videogame') }}</strong>.
        </p>
      </section>

      <!-- Foto -->
      <div class="foto-container">
        <img src="../../public/Yo-min-fotor-20250328135220.jpg" alt="Photo of Juan Daniel Hernández Mancilla" />
      </div>

      <!-- Contacto -->
      <section id="contacto">
        <p>
          {{ $t('JuanDaniel.Contact') }} 
          <a href="mailto:sayu142184@gmail.com">sayu142184@gmail.com</a>
        </p>
        <button>
          <a href="../../../Portafolio/public/CV.pdf" target="_blank">{{ $t('JuanDaniel.Download') }}</a>
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
  </div>
</template>

<script setup>
// Ya no necesitas el navbar aquí
</script>

<style scoped>
.juan-daniel-container {
  min-height: 100vh;
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

/* Main con mejor espaciado */
main {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

/* Sección de bienvenida */
#bienvenido {
  text-align: center;
  background: #1e293b;
  padding: 2.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

/* Estilos para texto resaltado */
#bienvenido strong,
#contacto strong,
p strong,
p em {
  color: #10b981;
  font-weight: 600;
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

  #bienvenido,
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

  #bienvenido,
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