<template>
  <v-container fluid>
    <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" :page.sync="page" :search="search"
      :sort-by="sortBy.toLowerCase()" :sort-desc="sortDesc" hide-default-footer>

      <!-- ------début du champ de recherche, par, et ordre -->
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1" >
          <!-- ------début du champ de recherche par mot cle -->
          <v-text-field v-model="search" clearable flat solo-inverted hide-details
           prepend-inner-icon="mdi-magnify" label="Recherche :" ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <!-- ------début du champ de par -->
            <v-select v-model="sortBy" flat solo-inverted hide-details :items="keys" 
            prepend-inner-icon="mdi-magnify" label="Trié par :" ></v-select>
            <v-spacer></v-spacer>
            <!-- ------début du champ ordre -->
            <v-btn-toggle v-model="sortDesc" mandatory >
              <v-btn large depressed color="blue" :value="false" ><v-icon>mdi-arrow-up</v-icon></v-btn>
              <v-btn large depressed color="blue" :value="true" ><v-icon>mdi-arrow-down</v-icon></v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <!-- ------ début Listes des datas items  -->
      <template v-slot:default="props">
        <ul>
          <li v-for="info in infos" :key="info.title">
            <h2>{{ info.title }}</h2><hr>
            <img :src="'https://image.tmdb.org/t/p/w500'+info.backdrop_path" alt="">
            <p><b>Synopsis : </b>{{ info.overview }}</p>
          </li>
        </ul>


        <v-row>
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
        </v-row>
        
      </template>

      <!-- ------début footer d'options de recherches  -->
      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <!-- ------ choix du nombre d'items par page  -->
          <span class="grey--text">Films par Page :</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark text color="primary" class="ml-2" v-bind="attrs" v-on="on">
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(number, index) in itemsPerPageArray" :key="index"
              @click="updateItemsPerPage(number)">
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-spacer></v-spacer>
          <!-- ------ statut du nombre de pages et boutons changer de page  -->
          <span class="mr-4 grey--text">
            Page {{ page }} sur {{ numberOfPages }}
          </span>
          <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage"><v-icon>mdi-chevron-left</v-icon></v-btn>
          <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage"><v-icon>mdi-chevron-right</v-icon></v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      infos:[],
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: 'name',
      keys: [
        'Name',
        'Calories',
        'Fat',
        'Carbs',
        'Protein',
        'Sodium',
        'Calcium',
        'Iron',
      ],
      items: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%',
        },
      ],
    }
  },
  computed: {
    numberOfPages () {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.keys.filter(key => key !== 'Name')
    },
  },
  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage (number) {
      this.itemsPerPage = number
    },
  },
  mounted () {
    axios
  .get('https://api.themoviedb.org/3/discover/movie?api_key=ad3aba60a11eb6e43170e9c6ec0d00e6&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
  .then(response => (this.infos = response.data.results))
  .catch(error => console.log(error))
  },
}
</script>