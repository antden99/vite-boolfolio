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
  },

  methods: {
    goTo(pageNumber) {
      
      axios.get(this.base_api + this.name_api +`?page=${pageNumber}`) //ricordati che con  i backtick puoi utilizzare stringhe e variabili insieme con l'utilizzo del ${}

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
}


</script>

<template>
  <h1>Vite-boolfolio</h1>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 gy-3" v-for="project in projectList.data">
        <ProjectCard :project="project" :url_Img="base_api"></ProjectCard>
      </div>

      <nav aria-label="..." class="mt-3">
        <ul class="pagination pagination-lg">
          <li class="page-item" v-for="pageNumber in projectList.last_page" @click="goTo(pageNumber)"><a class="page-link"
              href="#">{{ pageNumber }}</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
