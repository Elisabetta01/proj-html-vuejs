<script>
     export default {
          name:"BrandsComp",
          data(){
               return{
                    brands: [
                         {
                              img: "/img/abstract.png",
                         },
                         {
                              img: "/img/cglobal.png",
                         },
                         {
                              img: "/img/digitalbox.png",
                         },
                         {
                              img: "/img/hemisferio.png",
                         },
                         {
                              img: "/img/next.png",
                         },
                         {
                              img: "/img/spaces.png",
                         },
                         {
                              img: "/img/artemide1.png",
                         },
                         {
                              img: "/img/arper.png",
                         },
                         {
                              img: "/img/cappellini-2.png",
                         },
                    ]
               }
          }
     }
</script>

<template>
     <div id="container-brand">
          <div class="container m-auto d-flex">
               <div id="brands" class="d-flex flex-wrap w-50">
                    <div v-for="(element, index) in brands" :key="index">
                         <img :src="element.img" alt="">
                    </div>
               </div>
               <div id="testo" class="w-50">
                    <h1>Insieme ai migliori brand dal 1965</h1>
                    <p>Siamo rivenditori ufficiali di oltre 400 brand del design mondiale.</p>
                    <button type="button" class="btn btn-dark">Tutti i brand</button>
               </div>
     
          </div>

     </div>
</template>


<style lang="scss" scoped>
     #container-brand{
          background-color: #38c3a0;
          padding-top: 50px;
          img{
               width: 200px;
               margin-bottom: 50px;
          }
          #testo{
               font-family: "Times New Roman", Times, serif;
               h1{
                    font-size: 70px;
               }
               p{
                    font-size: 25px
               }
          }
     }

</style>