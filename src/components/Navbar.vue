<template>
     <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <div class="container">
          <a class="navbar-brand" href="/">Fintax.id</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
               <div class="navbar-nav">
                    <a class="nav-link" href="/" v-bind:style="$router.currentRoute.value.path === '/' ? styleBold : ''">Home</a>
                    <a class="nav-link" href="/users" v-bind:style="$router.currentRoute.value.path === '/users' ? styleBold : ''">Users</a>
                    <a class="nav-link" href="/employees" v-bind:style="$router.currentRoute.value.path === '/employees' ? styleBold : ''">Employees</a>
               </div>
          </div>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
               <div class="navbar-nav">
                    <a v-if="userToken === ''" class="nav-link navLogin" href="/login">Login</a>
                    <a v-if="userToken === ''" class="nav-link navRegister" href="/register">Register</a>
                    <a @click="logout" v-if="userToken" class="nav-link navLogout" href="/login">Logout</a>
               </div>
          </div>
          </div>
     </nav>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
     name: 'Navbar',
     data() {
          return{
               styleBold:{
                    fontWeight: 'bold'
               }
          }
     },
     computed: {
          ...mapGetters({
               userToken: 'auth/token'
          })
     },
     methods: {
          ...mapActions({
               setEmail: 'auth/setEmail',
               setUserToken: 'auth/setToken'
          }),
          logout(){
               this.setEmail('')
               this.setUserToken('')
          }
     }
}
</script>

<style scoped>
.navbar{
     padding: 20px 10px;
}

.navbar-brand{
     font-family: cursive;
     text-transform: uppercase;
     letter-spacing: 3px;
}

.nav-link{
     margin: 0 10px;
}

.navLogin{
     border: 1px solid #3E7DC0;
     border-radius: 10px;
     padding: 8px 12px !important;
     color: #4481C2 !important;
     background: white;
}

.navLogin:hover{
     background: whitesmoke;
}

.navRegister{
     border: 1px solid #3E7DC0;
     border-radius: 10px;
     padding: 8px 12px !important;
     background: #3E7DC0;
     color: white !important;
}

.navRegister:hover{
     background: #195697;
}

.navLogout{
     border-radius: 10px;
     padding: 8px 15px !important;
     border: 1px solid #e70a0a94;
     background: white;
     color: #e70a0a !important;
}

.navLogout:hover{
     background: #e70a0a;
     color: white !important;
}


@media screen and (max-width: 991px) {
     .navLogout, .navRegister, .navLogin{
          align-self: center;
          width: 80%;
          margin-top: 10px;
     }
}

</style>