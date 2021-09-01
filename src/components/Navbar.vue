<template>
     <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <div class="container-fluid">
          <a class="navbar-brand" href="#">Fintax.id</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
               <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    <a class="nav-link" href="/users">Users</a>
                    <a class="nav-link" href="/resources">Resources</a>
               </div>
          </div>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
               <div class="navbar-nav">
                    <a v-if="userToken === ''" class="nav-link navLogin" href="/login">Login</a>
                    <a v-if="userToken === ''" class="nav-link navRegister" href="/register">Register</a>
                    <a @click="logout" v-if="userToken" class="nav-link navRegister" href="/login">Logout</a>
               </div>
          </div>
          </div>
     </nav>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
     name: 'Navbar',
     computed: {
          ...mapGetters({
               userToken: 'auth/token'
          })
     },
     methods: {
          ...mapActions({
               setUserToken: 'auth/setToken'
          }),
          logout(){
               this.setUserToken('')
          }
     }
}
</script>

<style scoped>
.navbar{
     padding: 20px 10px;
}

</style>