<template>
     <div class="container">
          <loading v-if="isLoading"/>
          <div class="row" v-if="!isLoading">
               <select class="form-select text-center" aria-label="Default select example" v-model="showDataCount" v-if="!isLoading">
                    <option v-bind:value="dataEmployees.length" v-bind:selected="showDataCount === dataEmployees.length">Showing all entries</option>
                    <option value="3" v-bind:selected="showDataCount === '3'">Showing 3 entries</option>
                    <option value="5" v-bind:selected="showDataCount === '5'">Showing 5 entries</option>
                    <option value="10" v-bind:selected="showDataCount === '10'">Showing 10 entries</option>
               </select>
          </div>
          <div class="row" v-if="!isLoading">
               <table class="table table-striped">
                    <thead>
                         <tr>
                              <th scope="col">
                                   Id
                              </th>
                              <th scope="col">
                                   Name
                                   <svg @click="sortByName('asc')" v-bind:fill="statusSort === 'sortByNameAsc' ? '#FF0000' : 'currentColor'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                   </svg>
                                   <svg @click="sortByName('desc')" v-bind:fill="statusSort === 'sortByNameDesc' ? '#FF0000' : 'currentColor'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                   </svg>
                              </th>
                              <th scope="col">
                                   Age
                                   <svg @click="sortByAge('asc')" xmlns="http://www.w3.org/2000/svg" v-bind:fill="statusSort === 'sortByAgeAsc' ? '#FF0000' : 'currentColor'" width="16" height="16" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                   </svg>
                                   <svg @click="sortByAge('desc')" xmlns="http://www.w3.org/2000/svg" v-bind:fill="statusSort === 'sortByAgeDesc' ? '#FF0000' : 'currentColor'" width="16" height="16" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                   </svg>
                              </th>
                              <th scope="col">
                                   Salary
                                   <svg @click="sortBySalary('asc')" v-bind:fill="statusSort === 'sortBySalaryAsc' ? '#FF0000' : 'currentColor'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                   </svg>
                                   <svg @click="sortBySalary('desc')" v-bind:fill="statusSort === 'sortBySalaryDesc' ? '#FF0000' : 'currentColor'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                   </svg>     
                              </th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr
                              v-for="(data, index) in dataEmployees"
                              :key="data.id"
                              v-show="index <= parseInt(showDataCount) - 1"
                         >
                              <th scope="row">{{data.id}}</th>
                              <td>{{data.employee_name}}</td>
                              <td>{{data.employee_age}}</td>
                              <td>{{data.employee_salary}}</td>
                         </tr>
                    </tbody>
               </table>
          </div>
     </div>
</template>
<script>
import axios from 'axios'
import Loading from '../components/Loading.vue'
export default {
     name: 'Employees',
     data(){
          return{
               dataEmployees: [],
               showDataCount: null,
               isLoading: true,
               statusSort: null
          }
     },
     components:{
          Loading
     },
     methods:{
          sortByName(param){
               if(param === 'asc'){
                    if(this.statusSort === 'sortByNameAsc'){
                         this.statusSort = null
                         this.backToInitialData()
                         return
                    }
                    this.statusSort = 'sortByNameAsc'
               }else{
                    if(this.statusSort === 'sortByNameDesc'){
                         this.statusSort = null
                         this.backToInitialData()
                         return
                    }
                    this.statusSort = 'sortByNameDesc'
               }
               this.dataEmployees.sort((a, b) => {
                    return ((a.employee_name < b.employee_name) ? -1 : ((a.employee_name > b.employee_name) ? 1 : 0))
               })
               if(param === 'desc'){
                    this.dataEmployees.reverse()
               }
          },
          sortByAge(param){
               if(param === 'asc'){
                    if(this.statusSort === 'sortByAgeAsc'){
                         this.statusSort = null
                         this.backToInitialData()
                         return
                    }
                    this.statusSort = 'sortByAgeAsc'
               }else{
                    if(this.statusSort === 'sortByAgeDesc'){
                         this.statusSort = null
                         this.backToInitialData()
                         return
                    }
                    this.statusSort = 'sortByAgeDesc'
               }
               this.dataEmployees.sort((a, b) => {
                    return ((a.employee_age < b.employee_age) ? -1 : ((a.employee_age > b.employee_age) ? 1 : 0))
               })
               if(param === 'desc'){
                    this.dataEmployees.reverse()
               }
          },
          sortBySalary(param){
               if(param === 'asc'){
                    if(this.statusSort === 'sortBySalaryAsc'){
                         this.statusSort = null
                         this.backToInitialData()
                         return
                    }
                    this.statusSort = 'sortBySalaryAsc'
               }else{
                    if(this.statusSort === 'sortBySalaryDesc'){
                         this.statusSort = null
                         this.backToInitialData()
                         return
                    }
                    this.statusSort = 'sortBySalaryDesc'
               }
               this.dataEmployees.sort((a, b) => {
                    return ((a.employee_salary < b.employee_salary) ? -1 : ((a.employee_salary > b.employee_salary) ? 1 : 0))
               })
               if(param === 'desc'){
                    this.dataEmployees.reverse()
               }
          },
          backToInitialData(){
               this.dataEmployees.sort((a, b) => {
                    return ((a.id < b.id) ? -1 : ((a.id > b.id) ? 1 : 0))
               })
          },
          fetchEmployeeData(){
               axios.get('https://fakejsonapi.com/fake-api/employee/api/v1/employees').then((result) => {
                    this.dataEmployees = result.data.data
                    this.showDataCount = result.data.data.length
               }).catch((err) => {
                    console.log(err)
               }).finally(() => {
                    this.isLoading = false
               })
          }
     },
     created(){
          this.fetchEmployeeData()
     }     
}
</script>

<style scoped>

</style>