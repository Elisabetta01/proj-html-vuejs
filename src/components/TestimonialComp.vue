<script>
     export default {
          name: "TestimonialComp",
     }
</script>

<template>
     <div id="container-testimonial" >
          <div class="container w-50 d-flex justify-content-center">
               <img src="/img/large-testimonial.jpg" alt="" class="rounded shadow ">
               <div id="testo">
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure, corrupti iste soluta nobis cum autem, officiis qui laborum sed nihil ipsa ipsum architecto? Reprehenderit facilis expedita voluptate dolores quam."</p>
                    <p>Kate Schadler </p>
                    <p class="smaller">Interior Designer - Artemide</p>

               </div>
          </div>
     </div>
</template>

<style lang="scss" scoped>
     #container-testimonial{
          padding: 70px;
          img{
               width: 300px;
          }
          #testo{
               font-family: "Times New Roman", Times, serif;
               margin: 50px;
               .smaller{
                    font-size: 12px;
               }

          }
     }
</style>