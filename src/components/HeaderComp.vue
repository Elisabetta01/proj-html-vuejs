<script>
     export default {
          name: "HeaderComp",
          data(){
               return{
                    menu: [
                         {
                              nome: 'Home',
                              current: true
                         },
                         {
                              nome: 'Services',
                              current: false
                         },
                         {
                              nome: 'Why Us',
                              current: false
                         },
                         {
                              nome: 'Portfolio',
                              current: false
                         },
                         {
                              nome: 'About',
                              current: false
                         },
                         {
                              nome: 'Magazine',
                              current: false
                         },

                    ]
               }
          }
     }
</script>

<template>
     
     <header>
     <nav class="d-flex justify-content-between">
          <img src="/img/pantone.png" alt="logo">

          <ul>
               <li v-for="(element, index) in menu" :key="index"
               :class="element.current ? 'active' : '' ">
                    <a href="">{{ element.nome }}</a>
               </li>
          </ul>

          <div>
               <span class="me-3">
                    <i class="fa-solid fa-phone" style="color: #eb621f;"></i>
                    (+39)333 125 45 67
               </span>
     
               <button type="button" class="btn btn-warning">Free quote</button>
          </div>
          

     </nav>
  </header>

</template>

<style lang="scss" scoped>

     header{
          height: 100px;
          nav{
               display: flex;
               justify-content: space-around;
               align-items: center;
               width: 80%;
               margin: 0 auto;
               img{
                    width: 80px;
               }
               ul{
                    display: flex;
                    li{
                         list-style: none;
                         margin: 0 10px;
                         line-height: 100px;
                         a{
                              text-decoration: none;
                              color: black;
                              text-transform: uppercase; 
                         }
                         &.active {
                              border-bottom: 5px solid #eb621f; 
                         }
                         &.active a {
                              color: rgb(235, 98, 31);
                         }
                         &:hover {
                              border-bottom: 5px solid #eb621f; 
                         }
                         &:hover a{
                              color: #eb621f; 
                         }
                    }
               
               }
          }
     }

</style>