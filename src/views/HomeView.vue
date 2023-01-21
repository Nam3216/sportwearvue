<script setup>
/*marvel api
https://gateway.marvel.com/v1/public/characters?apikey=445178a8774e115f7c62a3cd7092c28c&ts=1&hash=d1f9b89e7d9d14df895da8787e66bee3 all characters
apipublickkey=445178a8774e115f7c62a3cd7092c28c
ts=1
hash= 1(del ts) + private_key(ee7) + public_key(aa3) pasarlo a md5 digest en https://www.md5hashgenerator.com/ */

import {ref} from "vue"
import Carusel from "../components/Carusel/Carusel.vue"
import { Mock } from "../components/Mock/Mock";




/* para api marvel
const getData=()=>{
  fetch("https://gateway.marvel.com/v1/public/characters?orderBy=-modified&apikey=445178a8774e115f7c62a3cd7092c28c&ts=1&hash=d1f9b89e7d9d14df895da8787e66bee3")
  .then((response)=>{
    return response.json()
  })
  .then((list)=>{

    pokeList=list.data.results
    console.log(pokeList, "poke")
    
  })
}

onMounted(()=>{
  getData()
})*/


const over=ref(0)

const handleOver=(id)=>{
 
  over.value=id/*cambio valor estado, accedo con .value*/
  console.log(over)

}

//concatemar elemento dinamico + string "item.thumbnail.path+'.jpg'" 
/*+'.'+item.thumbnail.extension"*/
const dot="."
</script>

<template>

<div class="header-home">
  <div>
    <h3>SportWear by VUE</h3>
  </div>
  <div class="header-img">
    <img src="select.jpg" alt="select"/>
    <p>Elige tu producto</p>
    <img src="cart.jpg" alt="select"/>
    <p>Agregalo al carrito</p>
    <img src="buyonline.jpg" alt="select"/>
    <p>Recibilo en tu casa!</p>
  </div>
</div>
<Carusel/>

<div class="home-offer">
  <div class="home-offer-title">
    <h3>Ofertas</h3>
    <hr/>
  </div>

  <div class="container">
    <!--en esta row, cdo se big screen va a tener 4 elementos por fila, max 768px 3, mas chico 2 y mas chico 1-->
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
      <template  v-for="item in Mock" :key=item.id>

      <div  v-if="item.offer=='yes'" class="card bg-white text-dark" ><!--crea un elemento nuevo con cada for, incluido este div-->
        <RouterLink :to="'/detail/'+item.id">
            <div class="col" v-on:mouseover="handleOver(item.id)" ><!--col de bootstrap-->
              <div class="item-all">
                  <img :src="item.img"  alt='loading' class="card-img" />  
                
                <div class="card-img-overlay">
                  <div v-bind:class="{'card-text':over==item.id ,  'card-text-no-display': over!=item.id}">
                    <p class="card-title-new">{{item.description}}</p>
                    <p class="card-text-new">Precio: {{item.price}}</p>
                  
                  </div>
                </div>
              </div>
            </div>
      
          </RouterLink>
  
      
      </div>
      
    </template>
    </div>

  </div>
</div>
</template>

<style>

.containerItems{
  display: flex;
  justify-content: space-around;
}

.card-img{
  width: 200px;

  height: 300px;
  text-size-adjust:inherit;
  text-align:match-parent;
  
}

.item{
  width: 300px;

  
 /* border: 1px solid black;*/
  margin: 0 auto;
  text-align: center;
  
}

.card-text{
 margin-top: 80%;
 background-color: rgb(210, 210, 211);
 /*border-radius: 30px;*/
 width: inherit;

}

.card-text-no-display{
  display: none;
}

.col{
 
  
  text-align: center;
  margin: 0 auto;
}

.item-all{
  cursor: pointer;
}

.card-title-new{
  font-weight: bold;
}

.header-home{
  display: flex;
  
}

.header-img{
  display: flex;
  justify-content: space-around ;
  width: 80%;

}

.header-img p{
  margin-top:20px;
  width: fit-content;
}

.home-offer{
  margin-top: 80px;


}

.home-offer-title{
  margin-bottom:80px ;
}

@media screen and (max-width: 800px) {

.header-home{
  display: none;
}
}

</style>

<script>/*
para marvel
 <div class="col" ><!--col de bootstrap-->
        <p> {{item.name}} </p>
        <p>{{item.position}}  </p>
        <img :src="item.thumbnail.path+dot+item.thumbnail.extension"  alt='loading' class="img"/>
        <div>
        <button type="button" class="btn btn-primary">Primary</button>
      </div>*/

      /*
      para sportwear normal

      <div class="container">
  <!--en esta row, cdo se big screen va a tener 4 elementos por fila, max 768px 3, mas chico 2 y mas chico 1-->
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
    <div v-for="item in Mock" :key=item.id class="item" >
      <div class="col" ><!--col de bootstrap-->
        <p> {{item.description}} </p>
        <p>{{item.price}}  </p>
        <img :src="item.img"  alt='loading' class="img"/>
        <div>
        <button type="button" class="btn btn-primary">Primary</button>
      </div>
    
      </div>
    </div>
  </div>
</div>*/
</script>