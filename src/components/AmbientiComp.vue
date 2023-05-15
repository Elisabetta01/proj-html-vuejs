<script>
     export default {
          name: "AmbientiComp", 
          data(){
               return{
                    arrayAmbienti: [
                         {
                              img: "/img/ambiente-livingroom.jpg",
                              testo: 'Design for living'
                         },
                         {
                              img: "/img/ambiente-bedroom.jpg",
                              testo: 'Vivere la Notte'
                         },
                         {
                              img: "/img/ambiente-kitchen.jpg",
                              testo: "L'arte della cucina"
                         },
                         {
                              img: "/img/ambiente-bathroom.jpg",
                              testo: "Bagno, il nuovo benessere"
                         },
                    ]
               }
          } 
     }
</script>

<template>
     <div id="container-ambienti">
          <div class="container">

               <div class="d-flex justify-content-between align-items-center">
                    <div class="w-50">
                         <h1>Ambienti</h1>
                         <p>La giusta ispirazione per ogni stanza della casa, per donare a ciascun ambiente carattere e unicità con i prodotti di design più esclusivi.</p>
                    </div>
                    <div>
                         <button type="button" class="btn btn-dark">Esplora</button>
                    </div>
               </div>

               <div class="d-flex justify-content-center">
                    <div v-for="(element, index) in arrayAmbienti" :key="index" >
                         <div class="m-4">
                              <img :src="element.img" alt="">
                              <p>{{ element.testo }}</p>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>


<style lang="scss" scoped>
     #container-ambienti{
          background-color: #ebebe7;
          font-family: "Times New Roman", Times, serif;
          padding: 50px;
          h1{
               font-size: 70px;
          }
          p{
               font-size: 20px;
          }
          img{
               width: 300px;
               height: 250px;
          }
     }
</style>