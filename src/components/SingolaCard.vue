<script>
     export default {
          name: "SingolaCard",
          props: ['propsCard'],
     }
</script>

<template>

     <div id="card" class="d-flex">
          <div class="w-50">
               <img :src="propsCard.img" alt="img">
          </div>
          
          <div id="testo" class="w-25">
               <h2 class="my-3">{{ propsCard.titolo }}</h2>
               <p>{{ propsCard.testo }}</p>
               <button type="button" class="btn btn-warning"> {{ propsCard.button }}</button>
          </div>
          
     </div>

</template>


<style lang="scss" scoped>
     #card{
          margin-bottom: 100px;
          img{
               width: 100%;
               height: 100%;
          }
          #testo{
               font-family: "Times New Roman", Times, serif;
               margin-left: 70px;
               h2{
                    color: #eb621f;
               }
          }
     }

</style>