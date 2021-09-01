<template>
     <nav aria-label="Page navigation example">
          <div class="container-fluid">
               <ul class="pagination justify-content-center">
                    <li  class="page-item" 
                         v-bind:class="currentPage === 1 ? ' disabled' : ''"
                         @click="previousPage"
                    >
                         <a class="page-link previousNextButton" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item"
                         v-for="i in totalPage"
                         :key="`page-` + i"
                         @click="moveToAnotherPage(i)"
                         v-bind:class="currentPage === i ? ' active' : '' "
                    ><a class="page-link" href="#">{{i}}</a>
                    </li>
                    <li  class="page-item" 
                         v-bind:class="currentPage === totalPage ? ' disabled' : ''"
                         @click="nextPage"
                    >
                         <a class="page-link previousNextButton" href="#">Next</a>
                    </li>
               </ul>
          </div>
     </nav>
</template>

<script>
import axios from 'axios'
export default {
     name: 'Pagination',
     data(){
          return{
               currentPage: 1,
               totalPage: null,
               apiDomain: 'https://reqres.in/api'
          }
     },
     methods: {
          moveToAnotherPage(i){
               this.currentPage = i
               this.$emit('getDataPage', i)
          },
          nextPage(){
               if(this.currentPage === this.totalPage){
                    return
               }
               this.currentPage += 1
          },
          previousPage(){
               if(!this.currentPage || this.currentPage === 1){
                    return
               }
               this.currentPage -= 1
          }
     },
     created(){
          axios.get(`${this.apiDomain}/users`).then((response) => {
               this.totalPage = response.data.total_pages
          }).catch((err) => {
               console.log(err)
          });
     }
}

</script>

<style scoped>
     nav{
          padding: 10px;
     }

     .pagination{
          width: 100%;
     }

     .page-item{
          margin: 0 20px;
     }

     .disabled .previousNextButton{
          background: rgba(70, 70, 70, 0.2);
     }

     .page-item .page-link{
          border-radius: 20px;
          color: #2ECD70;
     }

     .page-item.active .page-link{
          background-color: #2ECD70;
          border: 1px solid #2ECD70;
          border-radius: 20px;
          color: white;
     }
</style>