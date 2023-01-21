<script setup>

//agarro las props como si fuese desestruracin

import { onMounted,ref } from 'vue';
import {useStoreOk} from "../store/pinia.js"
import Counter from "../components/counter/counter.vue"
import { Mock } from '../components/Mock/Mock';


    const useStore=useStoreOk()

    const sizeProduct=ref("L")

    const props=defineProps({
    data:Object /*para desestructurar aca recibo, si es q pase :="item", las key ej description:String y asi, no todo el objeto*/

})

const sizeHandler=(size)=>{//con esto cambio el state de size
 
  sizeProduct.value=size

  
}

const addHandler=(quantity,idProduct)=>{//con idProduct aca no hago nada, porque en este comp uso directo producto desde data, sirve para emparejar con addHanlder de cart
  console.log(sizeProduct.value, "add")
//  console.log(props.data)//asi accedo a prop aca
console.log(useStore.cartList,"cart")
  for (const item of Mock){
    //secondCategory iguala el modelo del producto, ahi busco size.
    if(item.secondCategory==props.data.secondCategory){
      if(sizeProduct.value==item.size){
        useStore.addProduct(item,quantity)
      }
    }
  }
 
}

</script>

<template>


    <div class="item-container">
        <h3>{{ data.description }} </h3>

        <div class="item" >
           <div class="container"><!--aca pongo el bootstrap grid, ya que quiero que los prox dos elementos, la imagen y el texto, se vean flex en big screen, y column en chica-->
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
                  <div class="col">
                    <img :src="data.img"  alt='loading'  />  
                  </div>
                <div class="col">
                  <div class="item-text" >
                
                      <p class="card-title-new">{{data.description}}</p>
                      <p class="card-title-new">{{data.descriptionDetail}}</p>
                      <p class="card-text-new">Precio: {{data.price}}</p>
                      <div class="card-size-container">
                        <p>Elige tu talle: </p>
                        <p class="card-size" v-on:click="sizeHandler('S')">S </p>
                        <p class="card-size" v-on:click="sizeHandler('M')">M </p>
                        <p class="card-size" v-on:click="sizeHandler('L')">L </p>
                     </div>
                     <div class="counter-detail">
                      <p>Cantidad: </p>
                      <Counter :addHandler="addHandler" :init=1 :idProduct=1 from="detail" />
                    </div>
                            
                  </div>
              </div>
            </div>

            </div>
        </div>
    </div>


</template>

<style>

.item{
    display: flex;
    width:50vw;
   /* border: 5px solid black;*/
    border-radius: 30px;
}

.item img{
 width:25vw;
 height: 35vh;
 padding: 20px;
   } 

  .item-text{
  
    text-align: left;
    widows: 20vw;

    margin-left: 20px;
  } 

  .item-container{
    text-align: center;
   
  
  }

  .item-container h3{
    margin-bottom: 150px;
    margin-top: 50px;
  }

  .card-size-container{
    display: flex;
    justify-content:flex-start;
    
    width: fit-content;
    
  }

  .card-size{
    margin-right: 20px;
    border: 1px solid black;
    background-color: grey;
    font-weight: bold;
    cursor: pointer;
    width: 30px;
    text-align: center;
   
  }

  .counter-detail{
    text-align: left;
    display: flex;
 

  }

  /*<div class="item-container">
        <h3>{{ data.description }} </h3>

        <div class="item" ><!--col de bootstrap-->
           
                <img :src="data.img"  alt='loading'  />  
              
              <div class="item-text" >
            
                  <p class="card-title-new">{{data.description}}</p>
                  <p class="card-title-new">{{data.descriptionDetail}}</p>
                  <p class="card-text-new">Precio: {{data.price}}</p>
                  <p class="card-size" v-on:click="sizeHandler('S')">"S" </p>
                  <p class="card-size" v-on:click="sizeHandler('M')">"M" </p>
                  <p class="card-size" v-on:click="sizeHandler('L')">"L" </p>
                  <Counter :addHandler="addHandler" :init=1 :idProduct=1 />
                  
                  
                
            
              </div>
        </div>
    </div>*/

</style>