<template>
  <section id="proyectos">
    <div class="section-header">
      <i class="fas fa-folder-open header-icon"></i>
      <h2>{{$t('Projects.Title')}}</h2>
    </div>

    <div class="grid">
      <article>
        <h3>{{$t('Projects.VirtualReality.Virtual')}}</h3>
        <p>
          {{$t('Projects.VirtualReality.Thesis')}}<strong>{{$t('Projects.VirtualReality.Godot')}}</strong> {{$t('Projects.VirtualReality.WithThe')}} <strong>{{ $t('Projects.VirtualReality.XR') }}</strong> {{$t('Projects.VirtualReality.Tool')}}
        </p>
        <router-link to="/realidad-virtual" class="btn">{{$t('Projects.VirtualReality.ViewMore')}}</router-link>
      </article>

      <article>
        <h3>{{ $t('Projects.2DGame.Game') }}</h3>
        <p>
          <em>{{$t('Projects.2DGame.SuperM')}}</em> {{$t('Projects.2DGame.Style')}} <strong>{{$t('Projects.2DGame.Godot')}}</strong>. 
          {{$t('Projects.2DGame.It')}} <strong>{{ $t('Projects.2DGame.Free') }}</strong> {{$t('Projects.2DGame.For')}}
        </p>
        <router-link to="/juego-2d" class="btn">{{$t('Projects.2DGame.ViewMore')}}</router-link>
      </article>

      <article>
        <h3>{{ $t('Projects.FrontEndEduc.FrontEndDev') }}</h3>
        <p>
          {{$t('Projects.FrontEndEduc.Team')}} <strong>{{$t('Projects.FrontEndEduc.FrontEnd')}}</strong> {{$t('Projects.FrontEndEduc.Part')}} 
          <strong>{{$t('Projects.FrontEndEduc.Vue3')}}</strong>, <strong>{{$t('Projects.FrontEndEduc.Vuetify')}}</strong> {{ $t('Projects.FrontEndEduc.And') }} <strong>{{$t('Projects.FrontEndEduc.VueRouter')}}</strong>. 
          {{$t('Projects.FrontEndEduc.Additionally')}} <strong>{{$t('Projects.FrontEndEduc.APIs')}}</strong> {{$t('Projects.FrontEndEduc.For')}}
        </p>
        <router-link to="/educ" class="btn">{{ $t('Projects.FrontEndEduc.ViewMore') }}</router-link>
      </article>

      <article>
        <h3>{{$t('Projects.Blender.BlenderModels')}}</h3>
        <p>
          {{$t('Projects.Blender.IHave')}} <strong>{{$t('Projects.Blender.Blender')}}</strong>.  
          {{$t('Projects.Blender.Some')}} <em>{{$t('Projects.Blender.Spaceship')}}</em>, <em>{{$t('Projects.Blender.Weapon')}}</em>, <em>{{ $t('Projects.Blender.Dog') }}</em> {{$t('Projects.Blender.And')}} <em>{{$t('Projects.Blender.Robot')}}</em>.
        </p>
        <router-link to="/blender-models" class="btn">{{$t('Projects.Blender.ViewMore')}}</router-link>
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