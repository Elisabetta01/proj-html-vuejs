<script>
     export default {
         name:"JoinComp", 
     }
</script>

<template>
     <div id="container-join">
          <div class="container w-75 d-flex justify-content-between">
               <div id="testo" class="w-50">
                    <h1>Join A-INTERIOR</h1>
                    <p class="bigger">Iscriviti al nostro e shop e riceverai subito un coupon di benvenuto</p>
                    <hr>
                    <img src="/img/user1.png" alt="" id="user" class="rounded-circle mx-auto d-block">
                    <p class="fst-italic">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores laborum, ad explicabo dolor aliquid quasi tenetur iste, laudantium ullam exercitationem est eaque quis enim in magni dignissimos iure cupiditate minus."</p>
                    <p>George Anderson</p>
                    <p class="smaller">Arper CEO</p>
               </div>

               <div id="card" class="d-flex align-items-center">
                    <div class="card" style="width: 20rem;">
                         <div class="card-body">
                              <h4 class="card-title text-center m-3">Crea il tuo account</h4>
                              <input class="form-control mb-2" type="text" placeholder="Il tuo nome" aria-label="default input example">
                              <input class="form-control mb-2" type="email" placeholder="La tua email" aria-label="default input example">
                              <input class="form-control mb-2" type="text" placeholder="Il tuo numero di telefono" aria-label="default input example">
                              <a href="#" class="btn btn-dark d-flex justify-content-center">Crea</a>
                              <p class="smaller text-center mt-2">By submitting my data I agree to be contacted</p>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<style lang="scss" scoped>
     #container-join{
          background-color: #424242;
          color: white;
          font-family: "Times New Roman", Times, serif;
          padding: 50px;
          h1{
               font-size: 70px;
          }
          img{
               width: 100px;
          }
          .bigger{
               font-size: 20px;
          }
          .smaller{
               font-size: 12px;
          }
          hr{
               width: 100px;
          }

     }
</style>