<script>

     import JumbotronComp from './JumbotronComp.vue';
     import WhyusComp from './WhyusComp.vue';
     import BrandsComp from './BrandsComp.vue';

     export default {
          name: "MainComp",
          components: {
               JumbotronComp,
               WhyusComp,
               BrandsComp,
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
     </main>

</template>

<style lang="scss" scoped>

</style>