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
     <nav>
          <img src="/img/pantone.png" alt="logo">

          <ul>
               <li v-for="(element, index) in menu" :key="index"
               :class="element.current ? 'active' : '' ">
                    <a href="">{{ element.nome }}</a>
               </li>
          </ul>
          

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
                              color: #eb621f;
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