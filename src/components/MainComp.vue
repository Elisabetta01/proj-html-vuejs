<script>

     import JumbotronComp from './JumbotronComp.vue';
     import WhyusComp from './WhyusComp.vue';
     import BrandsComp from './BrandsComp.vue';
     import ProgettiComp from './ProgettiComp.vue';
     import AccountComp from './AccountComp.vue';
     import TestimonialComp from './TestimonialComp.vue';
     import AmbientiComp from './AmbientiComp.vue';
     import JoinComp from './JoinComp.vue';

     export default {
          name: "MainComp",
          components: {
               JumbotronComp,
               WhyusComp,
               BrandsComp,
               ProgettiComp,
               AccountComp,
               TestimonialComp,
               AmbientiComp,
               JoinComp,
          },

          data(){
               return{
                    
               }
          }
     }
</script>

<template>
     <main>
          <JumbotronComp/>
          <WhyusComp/>
          <BrandsComp/>
          <ProgettiComp/>
          <AccountComp/>
          <TestimonialComp/>
          <AmbientiComp/>
          <JoinComp/>
     </main>

</template>

<style lang="scss" scoped>

</style>