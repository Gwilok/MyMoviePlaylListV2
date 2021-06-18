<template>
  <v-container id="accueil">
    <v-layout align-center justify-space-around column fill-height wrap class="my-5 text-center">
      <h1 class="display-3 my-3 my-5">Accueil</h1>
        <p>Ce site contient plus de <b>8820 Films</b> et <b>1880 Séries</b>!</p>

      <v-img contain width="50vw" height="50vh" src="../assets/undraw_horror_movie.svg"></v-img>

      <v-btn min-width="200" class="my-5" router to="/films-populaires">Films Populaires</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    }
  };
</script>

<style scoped>

</style>
