export default{
     namespaced: true,
     state: {
          token: ''
     },
     mutations: {
          setToken: (state, payload) => {
               state.token = payload
          }
     },
     actions: {
          setToken: ({commit}, payload) => {
               commit('setToken', payload)
          }
     },
     getters: {
          token: state => state.token
     }
}