<template>
      <!-- :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc" -->
  <v-container fluid>
    <v-data-iterator
      :infos="infos"
      :infos-par-page.sync="infosParPage"
      :page.sync="page"
      
      hide-default-footer
    >
      <!-- champ de recherche ------------------------------------------------------------------------>
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1">
          <v-text-field v-model="search" clearable flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Recherche"></v-text-field>
          <!-- <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select v-model="sortBy" flat solo-inverted hide-details :infos="keys" prepend-inner-icon="mdi-magnify" label="Trié par :"></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory>
              <v-btn large depressed color="blue" :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn large depressed color="blue" :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template> -->
        </v-toolbar>
      </template>

      <template>
        <v-row>
            <v-col class="text-center" v-for="info in infos" :key="info.name" cols="12" sm="6" md="4" lg="3">
              <v-card>
                <v-card-title class="subheading font-weight-bold">{{ info.name }}</v-card-title>
              <!-- <v-divider></v-divider>
              <v-list dense>
                <v-list-item v-for="(key, index) in filteredKeys" :key="index">
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}: </v-list-item-content>
                  <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }"> {{ infos[key.toLowerCase()] }} </v-list-item-content>
                </v-list-item>
              </v-list> -->
              </v-card>
            <h1>Liste de 731 Super-Héros</h1>

            <ul style="margin-top: 20px" id="example-1">
              <li>
                <hr />
                <h2>{{ info.name }}</h2>
                <hr />
                <div class="d-flex flex-column justify-space-between align-center">
                  <v-subheader style="color: black">Taille des images : </v-subheader>
                  <v-slider thumb-size="20px" thumb-color="yellow" track-color="black" style="width: 80%; margin: auto" v-model="tailleImage"
                    class="align-self-stretch" min="50" max="800" step="1"></v-slider>
                  <v-img :width="tailleImage" :src="info.image.url"></v-img>
                </div>
                <br />
                <hr />

                <v-dialog v-model="dialog" scrollable max-width="300px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">Les détails :</v-btn>
                  </template>
                  <v-card>
                    <v-card-title>Les détails :</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 300px">
                      <v-radio-group v-model="dialogm1" column>
                        <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                        <v-radio label="Bahrain" value="bahrain"></v-radio>
                        <v-radio label="Bangladesh" value="bangladesh"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="blue darken-1" text @click="dialog = false"
                        >Close</v-btn
                      >
                      <v-btn color="blue darken-1" text @click="dialog = false"
                        >Save</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </li>
            </ul>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col v-for="item in props.items" :key="item.name" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
              </v-card-title>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-item v-for="(key, index) in filteredKeys" :key="index">
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                    {{ key }}:
                  </v-list-item-content>
                  <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">
                    {{ item[key.toLowerCase()] }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row> -->
      </template>

      <!-- footer de la page recherche ---------------------------------------------------------------------->
      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Nombre de fiches par page :</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark text color="primary" class="ml-2" v-bind="attrs" v-on="on">
                {{ infosParPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(number, index) in infosParPageArray" :key="index" @click="updateInfosParPage(number)">
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 grey--text">
            Page {{ page }} of {{ numberOfPages }}
          </span>

          <!-- boutons changement de pages ------------------------------------------------------------------------>
          <v-btn fab dark color="blue darken-3" class="mr-1" @click="pagePrecedente" title="Page Précédente">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="blue darken-3" class="ml-1" @click="pageSuivante" title="Page Suivante">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>

        </v-row>
      </template>
    </v-data-iterator>
  </v-container>

 
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      infos: '',
      dialogm1: "",
      dialog: false,
      tailleImage: 150,
      infosParPageArray: [1, 5, 10, 20],
      search: '',
      // filter: {},
      // sortDesc: true,
      page: 1,
      infosParPage: 10,
      // sortBy: 'nom',
      // keys: [
      //     'Nom',
      // ],
    };
  },
  mounted() {
    axios
      .get("https://superheroapi.com/api/1190710881379673/search/a")
      .then((response) => (this.infos = response.data.results))
      .catch((error) => console.log(error));
  },
  computed: {
    numberOfPages () {
      return Math.ceil(this.infos.length / this.infosParPage)
    },
    // filteredKeys () {
    //   return this.keys.filter(key => key !== 'Nom')
    // },
  },
  methods: {
    pageSuivante () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    pagePrecedente () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateInfosParPage (number) {
      this.infosParPage = number
    },
  },
};
</script>

<style type="text/css" scoped>
li {
  background-color: white;
  display: inline-table;
  border: 5px solid black;
  color: black;
  padding: 20px;
  margin: auto;
  margin-bottom: 20px;
  width: 30%;
}
</style>
