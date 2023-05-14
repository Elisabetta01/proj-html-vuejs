<script>
     export default {
          name:"JumbotronComp"
     }
</script>

<template>
     <header>
          <div class="d-flex justify-content-end me-4">
               <div>
                    <h1 id="titolo" class="d-flex justify-content-center mt-4">A-INTERIOR</h1>
                    <h1>Lasciati ispirare dal design</h1>
                    <p class="d-flex justify-content-center">Contemporaneo, moderno, esclusivo: scopri la nostra selezione di prodotti di design e interpreta il tuo stile.</p>
                    <div class="d-flex justify-content-center">
                         <button type="button" class="btn btn-light">Shop online</button>
                    </div>
               </div>
          </div>
     </header>
</template>


<style lang="scss" scoped>
     header{
               background-image: url('/img/primafoto.jpg');
               background-size: cover;
               background-repeat: no-repeat;
               background-position: center;
               height: 500px;
               width: 100%;
               margin-top: 5px;
               
               #titolo{
                    font-size: 100px;
               }
               
               h1{
                    font-family: "Times New Roman", Times, serif;
                    color: white;
                    font-size: 70px;
               }
               p{
                    font-family: "Times New Roman", Times, serif;
                    color: white;
               }
               button{
                    font-family: "Times New Roman", Times, serif;

               }
          }
</style>