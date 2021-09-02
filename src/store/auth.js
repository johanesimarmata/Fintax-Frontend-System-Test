export default{
     namespaced: true,
     state: {
          token: '',
          email: ''
     },
     mutations: {
          setToken: (state, payload) => {
               state.token = payload
          },
          setEmail: (state, payload) => {
               state.email = payload
          }
     },
     actions: {
          setToken: ({commit}, payload) => {
               commit('setToken', payload)
          },
          setEmail: ({commit}, payload) => {
               commit('setEmail', payload)
          }
     },
     getters: {
          token: state => state.token,
          email: state => state.email
     }
}