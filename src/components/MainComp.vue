<script>

     import JumbotronComp from './JumbotronComp.vue';
     import WhyusComp from './WhyusComp.vue';
     import BrandsComp from './BrandsComp.vue';
     import ProgettiComp from './ProgettiComp.vue';

     export default {
          name: "MainComp",
          components: {
               JumbotronComp,
               WhyusComp,
               BrandsComp,
               ProgettiComp,
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
     </main>

</template>

<style lang="scss" scoped>

</style>