<script>
import axios from 'axios';

import { RouterLink, RouterView } from 'vue-router';

export default {

  name: 'App',

}


</script>

<template>

  <h1>Vite-boolfolio</h1>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid justify-content-center">

        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink :to="{name:'home'}" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{name:'projects'}" class="nav-link">Projects</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{name:'about'}" class="nav-link">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{name:'contacts'}" class="nav-link">Contacts</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>


  
    <section class="container">
      <RouterView></RouterView>
    </section>
  
</template>

<style scoped></style>
