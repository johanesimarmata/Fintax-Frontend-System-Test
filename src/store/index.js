import { createStore } from 'vuex'
import auth from './auth'
import VuexPersistence from 'vuex-persist'

const vuexPersist = new VuexPersistence({
  key : 'fintax-frontend',
  storage: localStorage
})

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  },
  plugins: [vuexPersist.plugin]
})
