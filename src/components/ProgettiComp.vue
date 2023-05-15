<script>
     export default {
          name: "ProgettiComp",
          data(){
               return{
                    currentSlideI: 0,
                    arrayProgetti: [
                         {
                              img: '/img/living-room.jpg',
                              testo: 'Living-room in centro storico a Milano',
                         },
                         {
                              img: '/img/ufficio.jpg',
                              testo: 'Un elegante ufficio in centro città',
                         },
                         {
                              img: '/img/casa-montagna.jpg',
                              testo: 'Casa in montagna ',
                         },
                         {
                              img: '/img/stanza-letto.jpg',
                              testo: 'Raffinata stanza da letto in periferia a Milano',
                         },
                         {
                              img: '/img/cucina.jpg',
                              testo: 'Cucina luminosa',
                         },
                         {
                              img: '/img/bagno.jpg',
                              testo: 'Piccolo bagno degli ospiti',
                         },
                    ]
               }
          },

          

          methods: {
               nextSlide(){
                     this.currentSlideI++;
                     if(this.currentSlideI >= this.arrayProgetti.length){
                          this.currentSlideI = 0;
                    }
               }
          }
     }
</script>

<template>
     <div id="container-progetti">
          <div class="container m-auto d-flex">
               <div>
                    <h1>Il tuo nuovo progetto di design parte da qui</h1>
               </div>
               <div>
                    <p>Il nostro servizio di progettazione risponderà ad ogni esigenza e metterà a disposizione l’esperienza del suo team di architetti per realizzare il tuo sogno.</p>
                    <button type="button" class="btn btn-outline-dark">Get a consultation</button>
               </div>
          </div>

          <!-- slider -->
          <div class=" container d-flex justify-content-end m-4">
               <button @click="nextSlide" type="button" class="btn btn-outline-dark">Di più</button>
          </div>

          <div>
               <div id="container-slider" >
                    <div class="d-flex justify-content-center">
                         <div>
                              <img :src="arrayProgetti[currentSlideI].img" :alt="arrayProgetti[currentSlideI].img">
                              <p>{{ arrayProgetti[currentSlideI].testo }}</p>
                         </div>
                         <div>
                              <img :src="arrayProgetti[(currentSlideI + 1) % arrayProgetti.length].img" alt="">
                              <p>{{ arrayProgetti[currentSlideI + 1].testo }}</p>
                         </div>
                    </div>
                    
               </div>
          </div> 



     </div>
</template>


<style lang="scss" scoped>
     #container-progetti{
          font-family: "Times New Roman", Times, serif;
          padding: 30px;
          h1{
               font-size: 70px;
          }
          p{
               margin-top: 50px;
               font-size: 20px;
          }

          #container-slider{
               img{
                    width: 500px;
                    margin-left: 50px;
               }
               p{
                    margin-top: 20px;
                    margin-left: 50px;
               }
          }
     }
</style>