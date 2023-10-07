//เมนูอาหาร 

// menuList [(
//     {title:'Stir-fried basil and pork',img:'https://a.cdn-hotels.com/gdcs/production46/d1018/d82d9c8c-8b6e-45a1-9346-124415a574f9.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',price: 45, rating: 5},
//     {title:'Spicy green papaya salad',img:'https://a.cdn-hotels.com/gdcs/production73/d1742/496b95ba-5a96-4728-84c5-f5abf8ce763d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',price: 50, rating: 5},
//     {title:'Spicy shrimp soup',img:'https://a.cdn-hotels.com/gdcs/production28/d353/1a4556f8-80ec-4c9d-b5fe-a067f8205db8.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',price: 80, rating: 4.5},
//     {title:'Spicy green papaya salad',img:'https://a.cdn-hotels.com/gdcs/production73/d1742/496b95ba-5a96-4728-84c5-f5abf8ce763d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',price: 5, rating: 5},
//     {title:'Red curry',img:'https://a.cdn-hotels.com/gdcs/production162/d920/76741ec4-324b-412e-950a-bc6c3d64987d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',price: 60, rating: 5},
// )]

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { computed } from 'vue';

export const productStore = defineStore('product', () => {

  const load_product = computed(() => productList.value.length > 0 )
  // const x =ref(500)
  const productList = ref([
    { 
      id: 1, name: 'ก', price:199 ,
      img: "",
      type: "ก",
      detail:'กขคง'
      },{ 
      id: 2, name: 'abc',price:199,
      img: "",
      type: "abc",
      detail:'aa'
      },{ 
      id: 3, name: 'hjk',price:199,
      img: "",
      type: "hjk",
      detail:'qq'
      },{ 
      id: 4, name: 'WER',price:199,
      img: "",
      type: "WER",
      detail:'222'
      },{ 
      id: 5, name: 'ASD',price:449,
      img: "",
      type: "ASD",
      detail:'33'
      },{ 
      id: 6, name: 'ADC',price:199,
      img: "",
      type: "ACD",
      detail:'Drip king'
      },{ 
      id: 7, name: 'Ice Mat',price:299,
      img: "",
      type: "Ice Mat",
      detail:'Mat'
      },{ 
      id: 8, name: 'Hot',price:299,
      img: "",
      type: "Hot",
      detail:' powder '
      },{ 
      id: 9, name: 'Set',price:299,
      img: "",
      type: "Set",
      detail:'Japanese'
      },{ 
      id: 10, name: 'Tea',price:99,
      img: "",
      type: "Tea",
      detail:'TeaChinese'
      },
    // Add more products as needed
  ])

  return {  productList,  load_product }
})



// function deleteMenu(i){
//   // console.log(i);

//   // menuList.value.pop(i)

//   menuList.value.splice(i, 1) // ลบตำแหน่งที่ i จำนวน 1 ตัว 
// }

// function addMenu(x){
//   menuList.value.push(x);
// }





// return {deleteMenu, addMenu,}