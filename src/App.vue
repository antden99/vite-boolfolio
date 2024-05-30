<script>
import axios from 'axios';
import ProjectCard from '../src/components/ProjectCard.vue';

export default {

  name: 'App',
  data() {
    return {
      message: "Ciao Anto",
      projectList: [],
      base_api: 'http://127.0.0.1:8000/',
      name_api: 'api/projects',
    }
  },

  components: {
    ProjectCard,
  },

  mounted() {

    axios.get(this.base_api + this.name_api)
      .then(response => { //quando ottengo response, svolgo la funzione 
        console.log(response.data);
        this.projectList = response.data.projects; //salvo nell'array dichiarato in data, il risultato ottenuto dalla chiamata ajax
        //console.log( this.projectList);
      })
      .catch(error => {
        console.error('Errore durante la chiamata API:', error);
      }); //aggiungo la catach per la gestione degli errori
  }
}


</script>

<template>
  <h1>Vite-boolfolio</h1>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 gy-3" v-for="project in projectList.data">
        <ProjectCard :project="project"></ProjectCard>
      </div>
      <nav aria-label="...">
        <ul class="pagination pagination-lg">
          <li class="page-item active" aria-current="page">
            <span class="page-link">1</span>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
