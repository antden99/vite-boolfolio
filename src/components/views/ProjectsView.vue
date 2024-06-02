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
    }
  },

  mounted() {
    state.callApi();
  },

}

</script>

<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4 gy-3" v-for="project in state.projectList.data">  <!--ricordati di inserire .data perchè i tuoi elementi si trovano lì :)-->
      <ProjectCard :project="project" :url_Img="state.base_api"></ProjectCard>
    </div>

    <nav aria-label="..." class="mt-3">
      <ul class="pagination pagination-lg">
        <li class="page-item" v-for="pageNumber in state.projectList.last_page" @click="state.goTo(pageNumber)"> <!--ricordati che non puoi mettere direttamente i tuoi elementi in un array, perchè altrimenti non puoi accedere alle altre proprietà .)-->
          <a class="page-link">{{ pageNumber }}</a></li>
      </ul>
    </nav>
  </div>
</template>

<style></style>