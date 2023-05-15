<script>
     export default {
          name: "TestimonialComp",
          data(){
               return{
                    awards: [
                         {
                              img: "/img/award-a.png",
                              testo: 'Winner Seo Master MAGT',
                              testo2: 'Smart Start Award 2017',
                         },
                         {
                              img: "/img/award-b.png",
                              testo: 'Top Interior Design Agencies',
                              testo2: 'Next Partner 2018',
                         },
                         {
                              img: "/img/award-c.png",
                              testo: '10 Fastest Growing Artemide',
                              testo2: 'Solution Provider 2019',
                         },
                         {
                              img: "/img/award-d.png",
                              testo: 'National Excellence Agencie',
                              testo2: 'Award Winner 2020',
                         },
                    ]
               }
          }
     }
</script>

<template>
     <div id="container-testimonial" >
          <div class="container w-50 d-flex justify-content-center">
               <img src="/img/large-testimonial.jpg" alt="" class="rounded shadow ">
               <div id="testo">
                    <p class="fw-bold">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure, corrupti iste soluta nobis cum autem, officiis qui laborum sed nihil ipsa ipsum architecto? Reprehenderit facilis expedita voluptate dolores quam."</p>
                    <p>Kate Schadler </p>
                    <p class="smaller">Interior Designer - Artemide</p>

               </div>
          </div>

          <div id="awards">
               <div>
                    <h1 class="text-center">Awards</h1>
               </div>
               <div class="d-flex justify-content-center">
                    <div v-for="(element, index) in awards" :key="index" 
                    class="text-center m-4">
                         <img :src="element.img" alt="">
                         <p>{{ element.testo }}</p>
                         <p>{{ element.testo2 }}</p>
     
                    </div>

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

     #awards{
          margin-top: 100px;
          font-family: "Times New Roman", Times, serif;
          h1{
               color: #eb621f;
          }
          img{
               width: 100px;

          }
     }
</style>