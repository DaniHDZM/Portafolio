<template>
  <section id="proyectos">
    <div class="section-header">
      <i class="fas fa-folder-open header-icon"></i>
      <h2>Projects</h2>
    </div>

    <div class="grid">
      <article>
        <h3>Virtual Reality</h3>
        <p>
          Thesis project developed in <strong>Godot</strong> with the <strong>XR</strong> tool to implement Virtual Reality.
          Currently includes two levels: a maze and a room with figures and boxes.
        </p>
        <router-link to="/realidad-virtual" class="btn">View more</router-link>
      </article>

      <article>
        <h3>2D Game</h3>
        <p>
          <em>Super Mario Bros</em> style game developed in <strong>Godot</strong>. 
          It was my first videogame project, using <strong>free assets</strong> for animations and audio.
        </p>
        <router-link to="/juego-2d" class="btn">View more</router-link>
      </article>

      <article>
        <h3>FrontEnd Developer at EDUC</h3>
        <p>
          Team-developed project, participating in the <strong>FrontEnd</strong> part with 
          <strong>Vue 3</strong>, <strong>Vuetify</strong> and <strong>Vue-Router</strong>. 
          Additionally, I implemented integration with <strong>APIs</strong> for real data collection.
        </p>
        <router-link to="/educ" class="btn">View more</router-link>
      </article>

      <article>
        <h3>Blender Models</h3>
        <p>
          I have created different 3D models in <strong>Blender</strong>.  
          Some examples are: <em>Spaceship</em>, <em>Weapon</em>, <em>Robot</em>.
        </p>
        <router-link to="/blender-models" class="btn">View more</router-link>
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

/* Header de sección con ícono */
.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
}

.header-icon {
  font-size: 2.2rem;
  color: #10b981;
  text-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
}

#proyectos h2 {
  font-size: 2rem;
  color: #10b981;
  margin: 0;
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
  color: #10b981;
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

  .section-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .header-icon {
    font-size: 2rem;
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

  .header-icon {
    font-size: 1.8rem;
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