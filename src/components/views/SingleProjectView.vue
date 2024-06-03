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

  mounted() {
    axios
      .get('http://127.0.0.1:8000/'+ 'api/projects' + `/${this.$route.params.id}`)
      .then((response) => {
        //quando ottengo response, svolgo la funzione
        console.log(response.data.response);
        this.singleProject = response.data.response; 
        
      })
      .catch((error) => {
        console.error("Errore durante la chiamata API:", error);
      }); //aggiungo la catach per la gestione degli errori
  },


}

</script>

<template v-if="this.singleProject">

  <div class="row">
    {{ $route.params.id }}
    {{ this.singleProject}}
  </div>
</template>