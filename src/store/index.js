import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUserLogged: false,
    user: null,
    actualProject: null
  },
  mutations: {
    SET_PROJECT(state, project) {
      state.actualProject = null
      state.actualProject = project
    },
  },
  actions: {
    getProject({ commit }, data) {
      const params = { id: data.id, access_token: data.access_token };
      axios.get(`${process.env.VUE_APP_API_LINK}projects/`, { headers: params }).then((res) => {
        commit('SET_PROJECT', res.data)
      }).catch((res) => {
        commit('SET_PROJECT', res.data)
      }
      )
    },
  },
  modules: {
  }
})
