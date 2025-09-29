<template>
  <section id="educ-project">
    <div class="back-button-container">
      <button class="back-btn" @click="goBack">
        <i class="arrow-left"></i>
        Back to Projects
      </button>
    </div>
    <div class="project-content">
      <h1>FrontEnd Developer at EDUC</h1>

      <!-- Espacio para imagen -->
      <div class="image-container">
        <div class="image-placeholder">
          <img src="../../public/EDUC.png" alt="EDUC project image">
          <p>EDUC project image</p>
        </div>
      </div>

      <!-- Descripción breve -->
      <div class="project-description">
        <p>
          This project was for my <strong>constitutional service</strong> and was completed in collaboration with two front-end colleagues and a back-end team.
        </p>
        <p>
          My job was to create a <em>prototype of the website</em> in <strong>Figma</strong>. The front-end development used <strong>Vue 3</strong> along with <strong>Vuetify</strong> and <strong>CSS</strong> for the design. I also had to use <strong>Vue-Router</strong> for navigation and <em>API calls</em> to retrieve data.
        </p>
      </div>

      <!-- Información técnica -->
      <div class="tech-info">
        <!-- Herramientas -->
        <div class="tech-section">
          <h3>Tools used:</h3>
          <div class="tools-grid">
            <div class="tool-item"><span class="tool-name">Vue 3</span></div>
            <div class="tool-item"><span class="tool-name">Figma</span></div>
            <div class="tool-item"><span class="tool-name">APIs</span></div>
            <div class="tool-item"><span class="tool-name">Frontend Development</span></div>
          </div>
        </div>

        <!-- Cosas aprendidas -->
        <div class="learning-section">
          <h3>Things learned:</h3>
          <div class="learning-tags">
            <span class="learning-tag">Teamwork</span>
            <span class="learning-tag">Vue and Vue-Router</span>
            <span class="learning-tag">API Calls</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
    router.push('/')
};
</script>

<style scoped>
#educ-project {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  background: #0f172a;
  min-height: 100vh;
  color: #f9fafb;
  font-family: 'Poppins', sans-serif;
}

.project-content {
  background: #1e293b;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-content h1 {
  font-size: 2.3rem;
  color: #10b981;
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 3px solid #10b981;
  padding-bottom: 0.5rem;
}

/* Imagen */
.image-container {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  max-width: 600px;
  height: auto;
  min-height: 250px;
  background: #334155;
  border: 2px dashed #64748b;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: border-color 0.3s ease;
  position: relative;
  overflow: hidden;
}

.image-placeholder:hover {
  border-color: #10b981;
}

.image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.image-placeholder p {
  color: #94a3b8;
  font-style: italic;
  position: absolute;
  bottom: 1rem;
  z-index: 3;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin: 0;
}

/* Descripción */
.project-description p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #e2e8f0;
  margin-bottom: 1.2rem;
}

/* Estilos para texto resaltado */
.project-description strong,
.project-description em,
strong,
em {
  color: #10b981;
  font-weight: 600;
}

/* Herramientas y Aprendizajes */
.tech-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.tech-section h3,
.learning-section h3 {
  font-size: 1.3rem;
  color: #34d399;
  margin-bottom: 1rem;
}

/* Herramientas */
.tools-grid {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.tool-item {
  background: #334155;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #10b981;
  transition: transform 0.2s ease;
}

.tool-item:hover {
  transform: translateX(5px);
}

.tool-name {
  font-weight: 600;
  color: #f1f5f9;
  font-size: 1.1rem;
}

/* Aprendizajes */
.learning-tags {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.learning-tag {
  background: linear-gradient(135deg, #10b981, #34d399);
  color: #fff;
  padding: 0.8rem 1.2rem;
  border-radius: 20px;
  font-weight: 600;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.learning-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
}

.back-button-container {
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #1e293b;
  color: #10b981;
  border: 2px solid #10b981;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.back-btn:hover {
  background: #10b981;
  color: #fff;
  transform: translateX(-5px);
}

.arrow-left {
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 8px solid currentColor;
}

/* Responsive */
@media (max-width: 768px) {
  .tech-info {
    grid-template-columns: 1fr;
  }
  
  .image-placeholder {
    max-width: 100%;
    min-height: 200px;
  }
}
</style>