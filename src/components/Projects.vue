<template>
  <section id="proyectos">
    <h2>Proyectos</h2>

    <div class="grid">
      <article>
        <h3>Realidad Virtual</h3>
        <p>
          Proyecto de tesis desarrollado en <strong>Godot</strong> con la herramienta <strong>XR</strong> para implementar Realidad Virtual.
          Incluye actualmente dos niveles: un laberinto y un cuarto de figuras y cajas.
        </p>
        <a href="#" class="btn">Ver más</a>
      </article>

      <article>
        <h3>Juego 2D</h3>
        <p>
          Juego estilo <em>Super Mario Bros</em> desarrollado en <strong>Godot</strong>. 
          Fue mi primer proyecto de videojuegos, utilizando <strong>assets gratuitos</strong> para animaciones y audio.
        </p>
        <a href="#" class="btn">Ver más</a>
      </article>

      <article>
        <h3>Sistema de Exámenes</h3>
        <p>
          Proyecto desarrollado en equipo, participando en la parte de <strong>FrontEnd</strong> con 
          <strong>Vue 3</strong>, <strong>Vuetify</strong> y <strong>Vue-Router</strong>. 
          Además, implementé la integración con <strong>APIs</strong> para la recopilación de datos reales.
        </p>
        <a href="#" class="btn">Ver más</a>
      </article>

      <article>
        <h3>Modelos de Blender</h3>
        <p>
          He realizado distintos modelos 3D en <strong>Blender</strong>.  
          Algunos ejemplos son: Nave, Arma, Robot.
        </p>
        <a href="#" class="btn">Ver más</a>
      </article>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

#proyectos {
  max-width: 900px;
  margin: 2.5rem auto;
  padding: 2.5rem;
  background: #1e293b;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  font-family: 'Poppins', sans-serif;
}

#proyectos h2 {
  font-size: 2rem;
  text-align: center;
  color: #10b981;
  margin-bottom: 2rem;
  border-bottom: 3px solid #10b981;
  display: inline-block;
  padding-bottom: 0.3rem;
}

/* Grid 2x2 */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

/* Tarjetas con tema oscuro */
article {
  background: #334155;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #475569;
}

article:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.15);
  border-color: #10b981;
}

article h3 {
  font-size: 1.4rem;
  color: #34d399;
  margin-bottom: 1rem;
}

article p {
  font-size: 1rem;
  line-height: 1.7;
  color: #cbd5e1;
  margin-bottom: 1.5rem;
}

article strong {
  color: #10b981;
}

article em {
  color: #34d399;
  font-style: italic;
}

/* Botón */
.btn {
  display: inline-block;
  background: #10b981;
  color: #fff;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s, transform 0.2s;
}

.btn:hover {
  background: #34d399;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  #proyectos {
    margin: 2rem auto;
    padding: 2rem 1.5rem;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  article {
    padding: 1.8rem;
  }

  #proyectos h2 {
    font-size: 1.7rem;
  }

  article h3 {
    font-size: 1.3rem;
  }

  article p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  #proyectos {
    margin: 1.5rem auto;
    padding: 1.5rem 1rem;
  }

  article {
    padding: 1.5rem;
  }

  #proyectos h2 {
    font-size: 1.5rem;
  }

  article h3 {
    font-size: 1.2rem;
  }

  article p {
    font-size: 0.95rem;
  }

  .btn {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>