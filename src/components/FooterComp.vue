<script>

     import JoinComp from './JoinComp.vue';
     import MenuFooterComp from './MenuFooterComp.vue';

     export default {
          name: "FooterComp",
          components: {
               JoinComp,
               MenuFooterComp,
          },
          data(){
               return{
                    
               }
          }
     }
</script>

<template>
     <JoinComp/>
     <MenuFooterComp/>
</template>

<style lang="scss" scoped>

</style>