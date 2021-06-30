<template>
  <v-row>
    <v-col class="text-center">
      <h1>Dragon Ball Z</h1>

<ul style="margin-top:20px" id="example-1">
  <li v-for="info in infos" :key="info.name">
    <h2>{{ info.name }}</h2><hr>
    <p><b>Description : </b>{{ info.overview }}<br>
    <b>Capacité du cargo : </b>{{ info.cargo_capacity }} Kg<br>
    <b>Modèle : </b>{{ info.model }}<br>
    <b>Ratio HyperDrive : </b>{{ info.hyperdrive_rating }}<br>
    <b>Modèle : </b>{{ info.model }}<br>
    <b>Taille : </b>{{ info.length }} Mètres<br>
    <b>Nombre de passagers : </b>{{ info.length }} passagers<br>
    <b>Prix estimé : </b>{{ info.cost_in_credits }} Crédits<br>
    </p>
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group v-model="dialogm1" column>
            <v-radio label="Bahamas, The" value="bahamas"></v-radio>
            <v-radio label="Bahrain" value="bahrain"></v-radio>
            <v-radio label="Bangladesh" value="bangladesh"></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </li>
</ul>
   </v-col>
    
    </v-row>
</template>

<script>
import axios from 'axios';
export default {
    data(){
    return{
    infos: null,
    dialogm1: '',
    dialog: false,
    }},
    mounted () {
     axios
    .get('https://dragon-ball-api.herokuapp.com/api/character/')
    .then(response => (this.infos = response.request=true))
    .catch(error => console.log(error))
  }
}
</script>

<style type="text/css" scoped>
li {
  background-color: white;
  color: black;
  padding: 20px;
  margin:auto;
  margin-bottom:20px;
  width:80%
}
</style>
