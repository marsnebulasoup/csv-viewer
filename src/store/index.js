import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    csvdata: ""
  },
  mutations: {
    updateData(state, new_data) {
      state.csvdata = new_data;
      // console.log(this.state.csvdata)
    }
  },
  actions: {
  },
  modules: {
  }
})
