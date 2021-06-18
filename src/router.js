import Vue from 'vue'
import Router from 'vue-router'
import Accueil from './views/Accueil.vue'
import FilmsPopulaires from './views/FilmsPopulaires.vue'
import FilmsMieuxNotes from './views/FilmsMieuxNotes.vue';
import SeriesPopulaires from './views/SeriesPopulaires.vue'
import SeriesMieuxNotees from './views/SeriesMieuxNotees.vue'
import MaListe from './views/MaListe.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/films-populaires',
      name: 'filmsPopulaires',
      component: FilmsPopulaires
    },
    {
      path: '/films-mieux-notes',
      name: 'filmsMieuxNotes',
      component: FilmsMieuxNotes
    },
    {
      path: '/series-populaires',
      name: 'seriesPopulaires',
      component: SeriesPopulaires
    },
    {
      path: '/series-mieux-notees',
      name: 'seriesMieuxNotees',
      component: SeriesMieuxNotees
    },
    {
      path: '/maListe',
      name: 'maListe',
      component: MaListe
    }
  ]
})
