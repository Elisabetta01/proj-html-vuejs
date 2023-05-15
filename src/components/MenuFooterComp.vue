<script>
     export default {
        name:"MenuFooterComp",
     }
</script>

<template>
     <div id="footer">
          <div id="primaSezione" class="container d-flex justify-content-between">
               <div>
                    <h1>A-INTERIOR</h1>
                    <h3>Inspired by Beauty since 1965</h3>

                    <div id="social" class="d-flex me-3 mt-4">
                         <i class="fa-brands fa-facebook"></i>
                         <i class="fa-brands fa-twitter"></i>
                         <i class="fa-brands fa-instagram"></i>
                         <i class="fa-brands fa-youtube"></i>
                         <i class="fa-brands fa-linkedin-in"></i>
                         <i class="fa-brands fa-tiktok"></i>
                    </div>
               </div>

               <div>
                    <ul>
                         <li class="fw-bold">Services</li>
                         <li>Marketing Plan</li>
                         <li>Sales Development</li>
                         <li>Digital Marketing</li>
                         <li>Pricing</li>
                         <li>Why Us</li>
                         <li>Case Studies</li>
                    </ul>
               </div>

               <div>
                    <ul>
                         <li class="fw-bold">Resources</li>
                         <li>Learning Center</li>
                         <li>Video Tutorials</li>
                         <li>Customers</li>
                         <li>Blog</li>
                    </ul>
               </div>

               <div>
                    <ul>
                         <li class="fw-bold">Company</li>
                         <li>Who We Are</li>
                         <li>Contact Us</li>
                         <li>Careers</li>
                    </ul>
               </div>
          </div>

          <div id="secondaSezione" class=" container d-flex justify-content-between">
               
               <ul class="d-flex">
                    <li>
                         <i class="fa-regular fa-copyright"> 2020</i>
                    </li>
                    <li>Avada Interior Design</li>
                    <li>Powered by WordPress</li>
               </ul>

               <div>
                    <p>Call Us (+39)333 125 45 67 </p>
               </div>

               <div>
                    <p>info@yourcompany.com</p>
               </div>
          </div>

          <div id="terzaSezione" class="d-flex justify-content-end">

               <div class="btn-group dropup">
                    <button type="button" class="btn btn-warning rounded-circle dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-message"></i></button>
                    <ul class="dropdown-menu">
                         <p class="p-2">This is a free HubSpot live chat. You can create your own chat flows and engage your customers with Avada & HubSpot!</p>
                    </ul>
               </div>
               
          </div>
     </div>
</template>

<style lang="scss" scoped>
     #footer{
          background-color: rgb(46, 46, 46);
          color: white;
          padding: 50px;
          font-family: "Times New Roman", Times, serif;

          #primaSezione{

               h1{
                    font-size: 60px;
               }
               li{
                    list-style: none;
     
               }
               i{
                    margin-left: 10px;
               }

          }

          #secondaSezione{
               margin-top: 50px;
               li{
                    margin-left: 25px;

               }
          }

          #terzaSezione{
               
          }
     }
</style>