import axios from "axios";

import { reactive } from "vue";

export const state = reactive({
  projectList: [],
  base_api: "http://127.0.0.1:8000/",
  name_api: "api/projects",

  callApi() {
    axios
      .get(this.base_api + this.name_api)
      .then((response) => {
        //quando ottengo response, svolgo la funzione
        console.log(response.data);
        this.projectList = response.data.projects; //salvo nell'array dichiarato in data, il risultato ottenuto dalla chiamata ajax
        //console.log( this.projectList);
      })
      .catch((error) => {
        console.error("Errore durante la chiamata API:", error);
      }); //aggiungo la catach per la gestione degli errori
  },

  goTo(pageNumber) {
    axios
      .get(this.base_api + this.name_api + `?page=${pageNumber}`) //ricordati che con  i backtick puoi utilizzare stringhe e variabili insieme con l'utilizzo del ${}

      .then((response) => {
        //quando ottengo response, svolgo la funzione
        console.log(response.data);
        this.projectList = response.data.projects; //salvo nell'array dichiarato in data, il risultato ottenuto dalla chiamata ajax
        //console.log( this.projectList);
      })
      .catch((error) => {
        console.error("Errore durante la chiamata API:", error);
      }); //aggiungo la catach per la gestione degli errori
  },
});
