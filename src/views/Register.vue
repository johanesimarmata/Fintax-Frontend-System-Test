<template>
     <div class="container">
          <div class="row justify-content-center py-3 formComponent">
               <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#1e0dea" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
               </svg>
               <h3 class="title">Sign Up</h3>
               <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                    <div class="py-3">
                         <label class="form-label">Email address</label>
                         <input v-model="email" type="email" class="form-control inputStyle" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="py-3">
                         <label class="form-label">Password</label>
                         <input v-model="password" type="password" class="form-control inputStyle" id="exampleInputPassword1">
                    </div>
                    <div class="row py-3 d-flex justify-content-center">
                         <button class="btn btn-primary btnSubmit mt-3" @click="submitRegister">Submit</button>
                    </div>
               </div>
          </div>
     </div>     
</template>

<script>
import axios from 'axios'
export default {
     data: () => {
          return{
               email: '',
               password: '',
               apiDomain: 'https://reqres.in/api'
          }
     },
     methods: {
          submitRegister(){
               const data = {
                    email : this.email,
                    password : this.password
               }
               axios.post(`${this.apiDomain}/register`, data).then(() => {
                    this.clearForm()
                    this.$router.push({name : 'Login'})
                    alert('Successfully create your account! Please login first!')
               }).catch((err) => {
                    console.log(err)
                    this.clearForm()
                    alert('Failed to create your account! Please try again!')
               });
          },
          clearForm(){
               this.email = ''
               this.password = ''
          }
     }
}
</script>

<style scoped>
.formComponent{
          background: rgba(224, 224, 254, 0.5);
          border-radius: 20px;
          text-align: left;
     }

     .title{
          color: 13131c;
          text-align: center;
     }

     input.inputStyle{
          border-radius: 10px;
          background: transparent;
          border: 1px solid #50506A;
     }

     .form-label{
          color: #6f6d93;
          font-weight: 600;
     }

     .btnSubmit{
          border: none;
          background: #5944df;
          padding: 8px 12px;
          border-radius: 20px;
          width: 80%;
          text-align: center;
     }
</style>