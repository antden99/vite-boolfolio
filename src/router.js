import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './components/views/HomeView.vue'
import ProjectsView from './components/views/ProjectsView.vue'
import AboutView from './components/views/AboutView.vue'
import ContactsView from './components/views/ContactsView.vue'
import SingleProjectView from './components/views/SingleProjectView.vue'


const routes = [
  { path: '/', component: HomeView},
  { path: '/home', component: HomeView ,name:'home'},
  { path: '/projects', component: ProjectsView ,name:'projects'},
  { path: '/about', component: AboutView ,name:'about'},
  { path: '/contacts', component: ContactsView ,name:'contacts'},
  { path: '/projects/:id', component:SingleProjectView ,name:'project'},

    
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;