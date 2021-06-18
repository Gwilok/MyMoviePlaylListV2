<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">
      <v-card hover class="ma-3" min-height="500">
        <v-layout column align-center fill-height class="text-center">

          <v-img :src="imageURL + movie.poster_path"></v-img>

          <!-- <v-progress-circular size="90" color="white" rotate="-90" width="8" 
          :value="movie.vote_average * 10" class="font-weight-heavy my-5">
            {{movie.vote_average * 10}}
          </v-progress-circular> -->
          <v-progress-linear color="#0b488c" class="notation-horizontale" :value="movie.vote_average * 10">
            Noté :&nbsp;<span style="color:#e4872c">{{movie.vote_average * 10}}</span>&nbsp;
            /100, pour &nbsp;<span style="color:#e4872c">{{movie.vote_count}}</span>&nbsp;votant!
          </v-progress-linear>

          <v-card-title class="font-weight-light">{{movie.title || movie.name}}</v-card-title>
          
          <v-card-text>
            <v-expansion-panels focusable>
              <v-expansion-panel id="synopsis">
                <v-expansion-panel-header>Informations supplémentaires</v-expansion-panel-header>
                <v-expansion-panel-content><b>Synopsis : </b>{{movie.overview}}</v-expansion-panel-content>
                <v-expansion-panel-content>{{movie.adult}}</v-expansion-panel-content>
                <v-expansion-panel-content>{{movie.original_language}}</v-expansion-panel-content>
                <v-expansion-panel-content>{{movie.original_title}}</v-expansion-panel-content>
                <v-expansion-panel-content>{{movie.popularity}}</v-expansion-panel-content>
                <v-expansion-panel-content><b>Date de sortie : </b>{{movie.release_date}}</v-expansion-panel-content>
                <v-img :src="imageURL + movie.backdrop_path"></v-img>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>

        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ["movies", "imageURL"],
    data() {
      return {};
    }
  };
</script>

<style scoped>
div.theme--dark.v-card {
    background-color: #05213f;
    color: #fff;
}
div.v-card__title.font-weight-light {
  background-color: #05213f;
    width :100%;
    justify-content: center;
    padding: 5px;
}
  div.theme--dark.v-card:hover {
    background: #0b488c;
  }
  div.theme--dark.v-card:hover #synopsis {
    /* background: #303030; */
    background: #e4872c;
  }
  #synopsis {
    background: #0b488c;
  }
  .v-progress-linear.notation-horizontale.theme--dark{
    height: 30px !important;
    width:90%;
    border-radius:0 0 5px 5px;
    font-size: 12px;
  }
</style>

