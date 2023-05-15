<script>

     import JumbotronComp from './JumbotronComp.vue';
     import WhyusComp from './WhyusComp.vue';
     import BrandsComp from './BrandsComp.vue';
     import ProgettiComp from './ProgettiComp.vue';
     import AwardsComp from './AwardsComp.vue';
     import TestimonialComp from './TestimonialComp.vue';

     export default {
          name: "MainComp",
          components: {
               JumbotronComp,
               WhyusComp,
               BrandsComp,
               ProgettiComp,
               AwardsComp,
               TestimonialComp,
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
          <AwardsComp/>
          <TestimonialComp/>
     </main>

</template>

<style lang="scss" scoped>

</style>