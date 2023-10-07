<script setup>
import { computed } from "vue";
import { useRoute } from 'vue-router';
// import { ref } from 'vue'
import { productStore } from '@/stores/product'

const product = productStore()
const list = computed(() => product.productList)
// const cartList = []





// const route = useRoute()
// const id = parseInt(route.params.id)

</script>

<template>
   <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style="display: grid; grid-template-columns: 1fr 1fr 1fr;"
      v-for="(coffee, index) in list" :key="index">
      <div class="my-3 p-3">
        <h2 class="display-5" style="margin-top: 70px;">{{ coffee.name }}</h2>
        <p class="lead">{{coffee.type}} </p>
      </div>
 
           <img src="https://www.pinclipart.com/picdir/big/218-2185409_new-new-logo-new-sign-new-new-png.png" width=50 href="#">
 
           <h3 class="mb-0">กิจกรรมเเนะนำ {{ id }}.</h3>
           <div class="mb-1 text-body-secondary">Nov 12</div>
           <p >
               <img src="" width=90 href="#">
 
               <img src="" width=150 href="#">
 
               <img src="" width=150 href="#">
 
               <img src="" width=90 href="#">
             </p>
           <p class="card-text mb-auto">
             ดช.บริติชสีบลู วัย1ขวบ💙🐻
             ฟอร์มหมี ✅
             รัฐบาลบริติช #wcf<br>
 
             ติดต่อผู้เพาะพันธุ์สัตว์เลี้ยง <br>
 
             tel.093 580 9356 <br>
 
             ยังไม่มีคะแนน (0 รีวิว) 
           </p><br>
 
           <button @click="addMenu">เพิ่มไปยังตระกร้าสินค้า</button>
 
           
 
         </div>
         
         <div class="col-auto d-none d-lg-block">
           <img src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/320315426_1579472242511179_2105333197071377454_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=MF_F0wHE0f8AX8qd8Xf&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfBuA51Fy-AkksWKFrUvuw1H2iRKahDOhNl19phzQ74gdw&oe=6513FFDD" width=100 href="#">
         </div>
     
 

 </template>
 
  



