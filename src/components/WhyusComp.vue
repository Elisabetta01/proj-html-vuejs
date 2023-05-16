<script>

     import SingolaCard from './SingolaCard.vue';

     export default {
          name:"WhyusComp",
          components: {
               SingolaCard,
          },
          data(){
               return{
                    whyus: [
                         {
                              img: "/public/img/unicità_i_design.jpg",
                              titolo: "Unicità",
                              testo:"Spinti da una forte passione per il design, bello e funzionale, ci piace ispirare e influenzare ogni nostro progetto per rendere unico il tuo spazio.",
                              button: "Chi siamo"
                         },
                         {
                              img: "/public/img/ispirazione_i_design.webp",
                              titolo: "Ispirazione",
                              testo:"Lasciati trasportare dalla creatività e immergiti in un suggestivo viaggio tra i prodotti più esclusivi e l’eccellenza del made in Italy e del design internazionale.",
                              button: "Chi siamo"
                         },
                         {
                              img: "/public/img/internazionalità_i_design.avif",
                              titolo: "Internazionalità",
                              testo:"Da oltre 50 anni collaboriamo con partner in tutto il mondo. Una contaminazione che permette di avere un approccio attento e diversificato per rispondere ad ogni tipo di esigenza.",
                              button: "Chi siamo"
                         },
                    ]
               }
          },
     }
</script>

<template>
     <div class=" container w-75 m-auto mt-4">
          <div id="container-whyus" >
               <SingolaCard v-for="(element, index) in whyus" :key="index" :propsCard="element"/>
          </div>

     </div>
</template>


<style lang="scss" scoped>
     
</style>