<template>
  <section id="blender-models">
    <div class="back-button-container">
      <button class="back-btn" @click="goBack">
        <i class="arrow-left"></i>
        {{$t('Projects.Blender.View.Back')}}
      </button>
    </div>
    <div class="project-content">
      <h1>{{$t('Projects.Blender.View.BlenderModels')}}</h1>

      <!-- Contenedor de imágenes -->
      <div class="image-container grid-4">
        <div class="image-placeholder">
          <i class="fa-solid fa-rocket"></i>
          <img src="../../public/Nave.jpeg" alt="Rick and Morty style spaceship">
          <p>{{$t('Projects.Blender.View.Rick')}}</p>
        </div>
        <div class="image-placeholder">
          <i class="fa-solid fa-sword"></i>
          <img src="../../public/Arma.jpeg" alt="Scythe modeled in Blender">
          <p>{{$t('Projects.Blender.View.Weapon')}}</p>
        </div>
        <div class="image-placeholder">
          <i class="fa-solid fa-robot"></i>
          <img src="../../public/PyramidHead.jpeg" alt="Robot inspired by Astrobot + Pyramid Head">
          <p>{{$t('Projects.Blender.View.Robot')}}</p>
        </div>
        <div class="image-placeholder">
          <i class="fa-solid fa-dog"></i>
          <img src="../../public/Perro.jpeg" alt="Dog used in VR">
          <p>{{$t('Projects.Blender.View.Dog')}}</p>
        </div>
      </div>

      <!-- Descripción -->
      <div class="project-description">
        <p>
          {{$t('Projects.Blender.View.These')}} <strong>{{$t('Projects.Blender.View.3Dmodels')}}</strong>. {{$t('Projects.Blender.View.IHave')}} <strong>{{$t('Projects.Blender.View.Blender')}}</strong>, {{$t('Projects.Blender.View.Each')}} <em>{{$t('Projects.Blender.View.Unique')}}</em> 
          {{$t('Projects.Blender.View.Applied')}} <em>{{$t('Projects.Blender.View.Videogames')}}</em> {{$t('Projects.Blender.View.To')}} <strong>{{$t('Projects.Blender.View.Visual')}}</strong>.
        </p>
      </div>

      <!-- Cosas aprendidas -->
      <div class="learning-section">
        <h3>{{$t('Projects.Blender.View.Things')}}</h3>
        <div class="learning-tags">
          <span class="learning-tag">{{$t('Projects.Blender.View.Basic')}}</span>
          <span class="learning-tag">{{$t('Projects.Blender.View.Model')}}</span>
          <span class="learning-tag">{{$t('Projects.Blender.View.Export')}}</span>
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
#blender-models {
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
}

.project-content h1 {
  font-size: 2.3rem;
  color: #10b981;
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 3px solid #10b981;
  padding-bottom: 0.5rem;
}

/* Contenedor de imágenes */
.image-container {
  margin: 2rem 0;
  display: grid;
  gap: 1.5rem;
}

.grid-4 {
  grid-template-columns: repeat(2, 1fr);
}

.image-placeholder {
  width: 100%;
  height: 200px;
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

.image-placeholder i {
  font-size: 2rem;
  color: #10b981;
  position: absolute;
  z-index: 1;
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
  text-align: center;
  padding: 0.5rem 1rem;
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  margin: 0;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 90%;
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

/* Cosas aprendidas */
.learning-section h3 {
  font-size: 1.3rem;
  color: #34d399;
  margin-bottom: 1rem;
}

.learning-tags {
  display: flex;
  flex-wrap: wrap;
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
  .grid-4 {
    grid-template-columns: 1fr;
  }
  
  .image-placeholder {
    height: 250px;
  }
  
  .image-placeholder p {
    font-size: 0.8rem;
    white-space: normal;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .image-placeholder {
    height: 200px;
  }
  
  .image-placeholder p {
    font-size: 0.75rem;
    padding: 0.3rem 0.8rem;
  }
}
</style>