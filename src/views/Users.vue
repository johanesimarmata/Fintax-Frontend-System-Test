<template>
     <div class="container-fluid">
          <div class="row justify-content-around">
               <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-3" 
                    v-for="user in dataUsersPage.data"
                    :key="user.id">
                    <card-user
                         :user="user"
                    />
               </div>
          </div>
          <Pagination @getDataPage="changeCurrentPage($event)"/>
     </div>
</template>

<script>
import axios from 'axios'
import Pagination from '../components/Pagination.vue'
import CardUser from '../components/CardUser.vue'
export default {
     name: 'Users',
     components: {
          CardUser,
          Pagination
     },
     data(){
          return{
               dataUsersPage: {
                    page: null,
                    per_page: null,
                    total: null,
                    total_pages : null,
                    data: []
               },
               isLoading: true,
               apiDomain: 'https://reqres.in/api'
          }
     },
     methods: {
          changeCurrentPage(page){
               axios.get(`${this.apiDomain}/users?page=${page}`).then((result) => {
                    this.dataUsersPage.page = result.data.page
                    this.dataUsersPage.per_page = result.data.per_page
                    this.dataUsersPage.total = result.data.total
                    this.dataUsersPage.total_pages = result.data.total_pages
                    this.dataUsersPage.data = result.data.data
               }).catch((err) => {
                    console.log(err)
               }).finally(() => {
                    this.isLoading = false
               })
          }
     },
     created(){
          this.changeCurrentPage('1')
     }    
}
</script>

<style scoped>
     
</style>