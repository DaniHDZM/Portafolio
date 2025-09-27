<template>
  <section id="sobre-mi">
    <h2>Sobre mí</h2>
    <p>
      Mi nombre es Daniel, tengo 21 años y soy estudiante de Ingeniería de Software en la Facultad de Telemática de la Universidad de Colima. 
      Actualmente me estoy especializando en el desarrollo FrontEnd y en la creación de videojuegos, áreas que me apasionan por su creatividad 
      y la posibilidad de impactar en la experiencia de los usuarios. 
    </p>
    <p>
      Disfruto participar en proyectos que me permitan aprender, colaborar y aportar soluciones innovadoras. 
      Mi meta es consolidarme como desarrollador, enfocándome en experiencias digitales atractivas, funcionales e interactivas.
    </p>
  </section>

  <section id="skills">
    <h2>Skills</h2>

    <h3>Lenguajes de programación</h3>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>

    <h3>Frameworks y librerías</h3>
    <ul>
      <li>Vue 3</li>
      <li>Bootstrap</li>
      <li>React Native</li>
    </ul>

    <h3>Software y herramientas</h3>
    <ul>
      <li>Blender</li>
      <li>Godot</li>
      <li>Figma</li>
      <li>Jira</li>
    </ul>
  </section>
</template>

<style scoped>
/* Contenedor principal con mejor espaciado */
section {
  max-width: 900px;
  margin: 2.5rem auto;
  padding: 2.5rem;
  background: #1e293b;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

h2 {
  font-size: 2rem;
  color: #10b981;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #10b981;
  display: inline-block;
  padding-bottom: 0.3rem;
}

h3 {
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #34d399;
}

p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  color: #e2e8f0;
}

ul {
  list-style: none;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
}

ul li {
  font-size: 1rem;
  margin-bottom: 0.7rem;
  padding-left: 1.2rem;
  position: relative;
  color: #cbd5e1;
}

ul li::before {
  content: "•";
  color: #10b981;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

/* Responsive con mejor espaciado */
@media (max-width: 768px) {
  section {
    margin: 2rem auto;
    padding: 2rem 1.5rem;
  }
  
  h2 {
    font-size: 1.7rem;
  }
  
  h3 {
    font-size: 1.2rem;
  }
  
  p, ul li {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  section {
    margin: 1.5rem auto;
    padding: 1.5rem 1rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.1rem;
  }
  
  p, ul li {
    font-size: 0.95rem;
  }
}
</style>