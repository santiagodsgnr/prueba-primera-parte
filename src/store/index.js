import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoPersonaje: null,
    personajesSW: [],
    page: 1,
  },
  mutations: {
    setPersonajes(state, personajesSW) {
      state.personajesSW = personajesSW
    },
    setPage(state, url) {
      state.url = url
    },
    InfoPersonaje(state, infoPersonaje) {
      state.infoPersonaje = infoPersonaje
    }
  },
  actions: {
    getPersonajes({
      commit
    }, pageNumber) {
      axios.get(`https://swapi.dev/api/people/?page=${pageNumber}`)
        .then((personajesSW) => {
          commit('setPersonajes', personajesSW.data)
        })
    }
  },
  modules: {}
})