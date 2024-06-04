<script>
import ProjectCard from '../../components/ProjectCard.vue';
import axios from 'axios';
import { state } from '../../state';


export default {
  name: 'ProjectsView',


  components: {
    ProjectCard,
  },

  data() {
    return {
      state,
      singleProject: null,
    }
  },

  methods: {
    getSingleProject(id) {
      axios
        .get(state.base_api + state.name_api + `/${id}`) //ricordati che con  i backtick puoi utilizzare stringhe e variabili insieme con l'utilizzo del ${}

        .then((response) => {
          //quando ottengo response, svolgo la funzione
          console.log(response.data);
          if (response.data.success) {
            this.singleProject = response.data.response;
            console.log(this.singleProject);
          } else {
            this.$router.push({
              name: "NotFound",
            });
          }
        })
        .catch((error) => {
          console.error("Errore durante la chiamata API:", error);
        }); //aggiungo la catach per la gestione degli errori
    },
  },

  mounted() {
    console.log(this.$route.params.id)
    this.getSingleProject(this.$route.params.id)

  }


}

</script>

<template>

  <div class="row" v-if="this.singleProject">
    <div class="col-md-6 col-lg-4">
      <div class="card border-primary shadow">

        <div class="card-body">
          <div v-if="this.singleProject.cover_image">
            <img :src="state.base_api + 'storage/' + this.singleProject.cover_image" alt=""
              v-if="this.singleProject.cover_image.startsWith('uploads')" class="card-img-top">
            <img :src="this.singleProject.cover_image" alt="" v-else class="card-img-top">
          </div>
          <h5 class="card-title" v-if="this.singleProject.name">{{ this.singleProject.name }}</h5>
          <p class="card-text" v-if="this.singleProject.description">{{ this.singleProject.description }}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-if="this.singleProject.start_date">Start Date:
              {{ this.singleProject.start_date }}</li>
            <li class="list-group-item" v-if="this.singleProject.end_date">End Date: {{ this.singleProject.end_date }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="row" v-else>No projects found.</div>

</template>