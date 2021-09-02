<template>
  <div class="container homeComponent p-3">
    <h3 class="title">Hello, {{email ? email : 'there'}}!</h3>
    <h6 class="subtitle text-muted">Here are informations that you can explore in this website:</h6>
    <div class="row p-3">
      <card-home
        :infoWebsite="dataWebsite"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardHome from '../components/CardHome.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return{
      dataWebsite: [
        {title: 'Explore Users', description: 'You can explore users data that we fetch from REQRES Rest API', path: '/users'},
        {title: 'Explore Employees', description: 'You can explore employees data such as name, age, and salary. You can use the table\'s filter ascending, descending, and the amount of entries.', path: '/employees'}
      ]
    }
  },
  components: {
    CardHome
  },
  computed:{
    ...mapGetters({
      email: 'auth/email'
    })
  }
}
</script>

<style scoped>
  .title{
    text-align: left;
    letter-spacing: 2px;
  }
  .subtitle{
    text-align: left;
  }
  .homeComponent{
    background: #f8f9fa4f;
    border-radius: 10px;
  }

  @media screen and (max-width:575px) {
      .title, .subtitle{
        text-align: center;
      }
  }
</style>
