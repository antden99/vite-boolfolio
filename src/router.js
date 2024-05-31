import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/views/HomeView.vue'
import ProjectsView from './components/views/ProjectsView.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: ProjectsView },

    
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;