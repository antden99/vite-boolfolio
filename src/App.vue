<script>
import axios from 'axios';

export default {

  name: 'App',
  data() {
    return {
      message: "Ciao Anto",
      projectList:[],
      base_api:'http://127.0.0.1:8000/',
      name_api:'api/projects',
    }
  },

  mounted() {

    axios.get(this.base_api + this.name_api)
      .then(response => { //quando ottengo response, svolgo la funzione 
        //console.log(response.data);
        this.projectList = response.data; //salvo nell'array dichiarato in data, il risultato ottenuto dalla chiamata ajax
      })
      .catch(error => {
        console.error('Errore durante la chiamata API:', error);
      }); //aggiungo la catach per la gestione degli errori
  }
}


</script>

<template>
  <div>{{ message }} </div>
</template>

<style scoped></style>
