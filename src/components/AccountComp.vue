<script>
     export default {
          name: "AccountComp",
              
     }
</script>

<template>
     <div id="container-unique" class="position-relative">
          <div class="container w-75">
               <div class="d-flex">
                    <div class="w-50 p-4">
                         <h1>Il miglior modo per rendere il tuo progetto unico</h1>
                         <p id="testo" class="w-75 mt-3">Un servizio dedicato con cui curiamo tutti gli aspetti necessari per realizzare un progetto perfetto. Ovunque nel mondo.</p>
                    </div>

                    <div class="w-50">
                         <div id="img-unique" >
                              <img src="/img/unique.jpg" alt="" class="shadow">

                              <div id="servizi">
                                   <ul class="position-relative">
                                        <li >
                                             <button id="vendita" type="button" class="btn btn-outline-warning"><i class="fa-solid fa-file-invoice-dollar "></i></button>
                                             <h4>Condizioni di vendita esclusive</h4>
                                             <p>Dolor sit amet consectetur adipisicing elit.</p>  
                                        </li>
                                        <li>
                                             <button id="management" type="button" class="btn btn-outline-warning"><i class="fa-solid fa-chart-line "></i></button>
                                             <h4>Project Management</h4>
                                             <p>Dolor sit amet consectetur adipisicing elit.</p>
                                        </li>
                                        <li>
                                             <button id="logistica" type="button" class="btn btn-outline-warning"><i class="fa-solid fa-gears"></i></button>
                                             <h4>Logistica e consegna</h4>
                                             <p>Dolor sit amet consectetur adipisicing elit.</p>
                                        </li>
                                   </ul>
                              </div>
                         </div>

                    </div>
               </div>
     
               <div class="d-flex">
                    <div class="card shadow" style="width: 20rem;">
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
     #container-unique{
          background-color: #eb621f;
          padding-top: 50px;
          font-family: "Times New Roman", Times, serif;
          height: 800px;
          margin-top: 100px;
          margin-bottom: 100px;


          h1{
               font-size: 70px;
          }
          #testo{
               font-size: 20px;
          }
          #img-unique{
               z-index: 1;
               position: absolute;
               top: -50px;
               img{
                    width: 600px;
               }
               #servizi{
                    margin-top: 40px;
                    margin-bottom: 40px;
     
                    li{
                         list-style: none;
                         margin-left: 20px;
                         button{
                              width: 40px;
                         }
                         #vendita{
                              position: absolute;
                              left: 0;
                              top: 15px;
                              
                         }
                         #management{
                              position: absolute;
                              left: 0;
                              top: 90px;
                         }
                         #logistica{
                              position: absolute;
                              left: 0;
                              bottom: 15px;
                         }
                    }
               }
          }
          .card{
               z-index: 1;
               padding: 20px;
               position: absolute;
               bottom: -50px;
               .smaller{
                    font-size: 12px;
               }
          }

     }
</style>