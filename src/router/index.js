import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import RealidadVirtual from '@/components/RealidadVirtual.vue'
import Educ from '@/components/Educ.vue'
import Juego2D from '@/components/Juego2D.vue'
import BlenderModels from '@/components/BlenderModels.vue'

const router = createRouter({
  history: createWebHistory('#'),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/realidad-virtual', name: 'realidad-virtual', component: RealidadVirtual },
    { path: '/educ', name: 'educ', component: Educ },
    { path: '/juego-2d', name: 'juego-2d', component: Juego2D },
    { path: '/blender-models', name: 'blender-models', component: BlenderModels }
  ],
})

export default router
