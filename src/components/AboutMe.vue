<template>
  <section id="sobre-mí">
    <div class="section-header">
      <i class="fas fa-user-circle header-icon"></i>
      <h2>About me</h2>
    </div>
    
    <p>
      My name is Daniel, I am 21 years old and I am a <strong>Software Engineering</strong> student at the Faculty of Telematics of the University of Colima. 
      I am currently specializing in <strong>FrontEnd development</strong> and <strong>videogame creation</strong>, areas that I am passionate about for their creativity 
      and the possibility of impacting the user experience.
    </p>
    <p>
      I enjoy participating in projects that allow me to learn, collaborate and contribute <em>innovative solutions</em>. 
      My goal is to establish myself as a developer, focusing on <strong>attractive, functional and interactive digital experiences</strong>.
    </p>
  </section>

  <section id="skills">
    <div class="section-header">
      <i class="fas fa-tools header-icon"></i>
      <h2>Skills</h2>
    </div>

    <!-- Programming languages -->
    <div class="skill-category">
      <div class="category-header">
        <i class="fas fa-code category-icon"></i>
        <h3>Programming languages</h3>
      </div>
      <div class="skills-grid">
        <div class="skill-item html">
          <i class="fab fa-html5 skill-icon"></i>
          <span>HTML</span>
        </div>
        <div class="skill-item css">
          <i class="fab fa-css3-alt skill-icon"></i>
          <span>CSS</span>
        </div>
        <div class="skill-item javascript">
          <i class="fab fa-js-square skill-icon"></i>
          <span>JavaScript</span>
        </div>
      </div>
    </div>

    <!-- Frameworks and libraries -->
    <div class="skill-category">
      <div class="category-header">
        <i class="fas fa-layer-group category-icon"></i>
        <h3>Frameworks and libraries</h3>
      </div>
      <div class="skills-grid">
        <div class="skill-item vue">
          <i class="fab fa-vuejs skill-icon"></i>
          <span>Vue 3</span>
        </div>
        <div class="skill-item bootstrap">
          <i class="fab fa-bootstrap skill-icon"></i>
          <span>Bootstrap</span>
        </div>
        <div class="skill-item react-native">
          <i class="fab fa-react skill-icon"></i>
          <span>React Native</span>
        </div>
      </div>
    </div>

    <!-- Software and tools -->
    <div class="skill-category">
      <div class="category-header">
        <i class="fas fa-wrench category-icon"></i>
        <h3>Software and tools</h3>
      </div>
      <div class="skills-grid">
        <div class="skill-item blender">
          <i class="fas fa-cube skill-icon"></i>
          <span>Blender</span>
        </div>
        <div class="skill-item godot">
          <i class="fas fa-gamepad skill-icon"></i>
          <span>Godot</span>
        </div>
        <div class="skill-item figma">
          <i class="fab fa-figma skill-icon"></i>
          <span>Figma</span>
        </div>
        <div class="skill-item jira">
          <i class="fas fa-tasks skill-icon"></i>
          <span>Jira</span>
        </div>
      </div>
    </div>

    <!-- Languages -->
    <div class="skill-category">
      <div class="category-header">
        <i class="fas fa-globe category-icon"></i>
        <h3>Languages</h3>
      </div>
      <div class="skills-grid">
        <div class="skill-item spanish">
          <i class="fas fa-flag skill-icon"></i>
          <span>Native Spanish</span>
        </div>
        <div class="skill-item english">
          <i class="fas fa-language skill-icon"></i>
          <span>Basic English</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Contenedor principal */
section {
  max-width: 900px;
  margin: 2.5rem auto;
  padding: 3rem;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  border: 1px solid rgba(16, 185, 129, 0.1);
  position: relative;
  overflow: hidden;
}

section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #10b981, #34d399, #6ee7b7);
}

/* Header de sección */
.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  gap: 1rem;
}

.header-icon {
  font-size: 2.5rem;
  color: #10b981;
  text-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
}

h2 {
  font-size: 2.2rem;
  color: #10b981;
  margin: 0;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

/* Estilos simples para Sobre mí */
#sobre-mí p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  color: #e2e8f0;
}

/* Estilos para texto resaltado */
#sobre-mí strong,
#sobre-mí em,
p strong,
p em {
  color: #10b981;
  font-weight: 600;
}

/* Skills Categories */
.skill-category {
  margin-bottom: 3rem;
  background: rgba(15, 23, 42, 0.4);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(52, 211, 153, 0.1);
  transition: all 0.3s ease;
}

.skill-category:hover {
  border-color: rgba(52, 211, 153, 0.3);
  box-shadow: 0 5px 20px rgba(16, 185, 129, 0.1);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.category-icon {
  font-size: 1.5rem;
  color: #34d399;
}

h3 {
  font-size: 1.4rem;
  margin: 0;
  color: #34d399;
  font-weight: 600;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.2rem;
  margin-top: 1.5rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  background: linear-gradient(135deg, #334155 0%, #475569 100%);
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.skill-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.5s;
}

.skill-item:hover::before {
  left: 100%;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  border-color: rgba(16, 185, 129, 0.5);
}

.skill-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.skill-item span {
  font-weight: 600;
  color: #f1f5f9;
  font-size: 1rem;
}

/* Colores específicos para cada skill */
.html .skill-icon { color: #e34c26; }
.css .skill-icon { color: #1572b6; }
.javascript .skill-icon { color: #f7df1e; }
.vue .skill-icon { color: #4fc08d; }
.bootstrap .skill-icon { color: #7952b3; }
.react-native .skill-icon { color: #61dafb; }
.blender .skill-icon { color: #f5792a; }
.godot .skill-icon { color: #478cbf; }
.figma .skill-icon { color: #f24e1e; }
.jira .skill-icon { color: #0052cc; }
.spanish .skill-icon { color: #c41e3a; }
.english .skill-icon { color: #012169; }

/* Responsive */
@media (max-width: 768px) {
  section {
    margin: 2rem auto;
    padding: 2rem 1.5rem;
  }
  
  .section-header {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .header-icon {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.8rem;
  }
  
  h3 {
    font-size: 1.2rem;
  }
  
  #sobre-mí p {
    font-size: 1rem;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
  
  .skill-item {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .skill-icon {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  section {
    margin: 1.5rem auto;
    padding: 1.5rem 1rem;
  }
  
  h2 {
    font-size: 1.6rem;
  }
  
  h3 {
    font-size: 1.1rem;
  }
  
  #sobre-mí p {
    font-size: 0.95rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .skill-item {
    padding: 0.8rem;
  }
  
  .skill-item span {
    font-size: 0.9rem;
  }
}

/* Animaciones adicionales */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.skill-category {
  animation: fadeInUp 0.6s ease-out;
}

.skill-category:nth-child(2) {
  animation-delay: 0.2s;
}

.skill-category:nth-child(3) {
  animation-delay: 0.4s;
}

.skill-category:nth-child(5) {
  animation-delay: 0.8s;
}
</style>