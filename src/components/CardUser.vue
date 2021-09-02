<template>
     <div class="card mx-auto" style="width:18rem;" >
          <img v-bind:src="user.avatar" class="card-img-top" v-bind:alt="'Photo of ' + user.first_name + ' ' + user.last_name">
          <div class="card-body">
               <h5 class="card-title">{{user.first_name + ' ' + user.last_name}}</h5>
               <h6 class="card-subtitle my-2 text-muted">{{user.email}}</h6>
          </div>
     </div>
</template>

<script>
export default {
     name: 'CardUser',
     props: ['user']
}
</script>

<style scoped>
     .card{
          border-radius: 20px;
          
     }

     .card-img-top{
          border-radius: 20px 20px 0 0;
          height: 300px;
     }
</style>