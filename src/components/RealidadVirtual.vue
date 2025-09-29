<template>
  <section id="realidad-virtual">
    <div class="back-button-container">
      <button class="back-btn" @click="goBack">
        <i class="arrow-left"></i>
        Back to Projects
      </button>
    </div>

    <div class="project-content">
      <h1>Virtual Reality</h1>
      
      <div class="image-container">
        <div class="image-placeholder">
          <img src="../../public/Realidad virtual.jpeg" alt="Image of the virtual reality project">
          <p>Image of the virtual reality project</p>
        </div>
      </div>
      <div class="image-container">
        <div class="image-placeholder">
          <img src="../../public/Realidad virtual 2.jpeg" alt="Second image of the virtual reality project">
          <p>Development in Godot with VR</p>
        </div>
      </div>

      <div class="project-description">
        <p>
          In this project, I participated in the creation of a virtual reality video game prototype using the Godot engine with the XR Tools extension.
        </p>
        
        <h3>Main Responsibilities:</h3>
        <ol>
          <li>Design and development of 3D assets in Blender for the construction of the scenarios.</li>
          <li>Implementation and programming of the scenarios within the Godot Engine.</li>
          <li>Preparation of detailed technical documentation, describing learning objectives, properties of each level, objects, sounds, and a visual representation of the organization of each scenario.</li>
        </ol>

        <h3>Highlights and Achievements:</h3>
        <ol>
          <li>Mastery in the creation of optimized assets in **Blender for VR**.</li>
          <li>Experience in the development, coding, and structuring of **interactive environments in Godot**.</li>
          <li>Production of **technical documentation** that facilitates the understanding and scalability of the project.</li>
        </ol>
      </div>

      <div class="tech-info">
        <div class="tech-section">
          <h3>Tools Used:</h3>
          <div class="tools-grid">
            <div class="tool-item">
              <span class="tool-name">Godot</span>
            </div>
            <div class="tool-item">
              <span class="tool-name">Blender</span>
            </div>
          </div>
        </div>

        <div class="learning-section">
          <h3>Things Learned:</h3>
          <div class="learning-tags">
            <span class="learning-tag">Software Infrastructure</span>
            <span class="learning-tag">Video Game Industry</span>
            <span class="learning-tag">Game Design</span>
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
/* (The CSS remains the same as it is styling, not content) */
html, body {
  border: none;
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #111827; /* gris oscuro */
  color: #f9fafb;
  font-family: 'Poppins', sans-serif;
}
#realidad-virtual {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  background: #0f172a;
  min-height: 100vh;
  color: #f9fafb;
  font-family: 'Poppins', sans-serif;
}

/* Botón de regreso */
.back-button-container {
  margin-bottom: 2rem;
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

/* Contenido principal */
.project-content {
  background: #1e293b;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.project-content h1 {
  font-size: 2.5rem;
  color: #10b981;
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 3px solid #10b981;
  display: inline-block;
  width: 100%;
  padding-bottom: 0.5rem;
}

/* Contenedor de imagen */
.image-container {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  max-width: 600px;
  height: auto;
  min-height: 300px;
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

.vr-icon {
  font-size: 3rem;
  position: absolute;
  z-index: 1;
  color: #10b981;
}

/* Descripción del proyecto */
.project-description {
  margin-bottom: 2.5rem;
}

.project-description p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #e2e8f0;
  margin-bottom: 2rem;
}

.project-description h3 {
  font-size: 1.4rem;
  color: #34d399;
  margin: 2rem 0 1rem 0;
}

.project-description ol {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.project-description li {
  font-size: 1rem;
  line-height: 1.6;
  color: #cbd5e1;
  margin-bottom: 0.8rem;
}

/* Información técnica */
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

/* Tags de aprendizaje */
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
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.learning-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  #realidad-virtual {
    padding: 1.5rem 1rem;
  }

  .project-content {
    padding: 2rem 1.5rem;
  }

  .project-content h1 {
    font-size: 2rem;
  }

  .tech-info {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .image-placeholder {
    min-height: 250px;
    max-width: 100%;
  }

  .vr-icon {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .project-content {
    padding: 1.5rem 1rem;
  }

  .project-content h1 {
    font-size: 1.7rem;
  }

  .back-btn {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }

  .image-placeholder {
    min-height: 200px;
  }

  .learning-tags {
    gap: 0.6rem;
  }

  .learning-tag {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}
</style>