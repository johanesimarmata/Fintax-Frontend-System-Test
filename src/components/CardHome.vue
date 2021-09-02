<template>
     <div class="card mb-3"
          v-for="data in infoWebsite"
          :key="data.title"
     >
        <div class="card-body">
          <div class="row d-flex align-items-center">
            <div class="col-md-8 col-lg-9">
              <h5 class="card-title">{{data.title}}</h5>
              <p class="card-text">{{data.description}}</p>
            </div>
            <div class="col-md-4 col-lg-3 d-flex justify-content-center">
              <a v-bind:href="data.path" class="btn btn-outline-secondary ms-auto">Go to Page</a>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
     name: 'CardHome',
     props: ['infoWebsite'],
}
</script>
<style scoped>
     .card{
          background: #f8f9faef;
          border-radius: 20px;
          text-align: left;
     }

     .card-title{
          letter-spacing: 1.5px;
          font-weight: 700;
     }

     .card-text{
          font-size: 14px;
          text-align: justify;
     }

     .btn-outline-secondary{
          border-radius: 15px;
          padding: 8px 12px !important;
     }

     @media screen and (max-width: 767px) {
     .card-title{
          text-align: center;
     }
     .card-text{
          text-align: center;
     }
     .btn-primary{
          margin: 10px;
     }
}
</style>