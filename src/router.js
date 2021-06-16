import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FilmsPopulaires from './views/FilmsPopulaires.vue'
import TopRatedMovies from './views/TopRatedMovies.vue';
import PopularShows from './views/PopularShows.vue'
import TopRatedShows from './views/TopRatedShows.vue'
import MaListe from './views/MaListe.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/films-populaires',
      name: 'filmsPopulaires',
      component: FilmsPopulaires
    },
    {
      path: '/top-rated-movies',
      name: 'topratedmovies',
      component: TopRatedMovies
    },
    {
      path: '/popular-shows',
      name: 'popularshows',
      component: PopularShows
    },
    {
      path: '/top-rated-shows',
      name: 'topratedshows',
      component: TopRatedShows
    },
    {
      path: '/maListe',
      name: 'maListe',
      component: MaListe
    }
  ]
})
