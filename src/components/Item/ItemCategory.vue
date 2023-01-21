<script setup>
import { onMounted } from 'vue';

const props=defineProps({
    id:Number,
    description:String,
    category:String,
    descriptionDetail:String,
    price:Number,
    quantity:Number,
    size:String,
    secondCategory:String,
    offer:String,
    img:String
})


</script>

<template>

   
            <RouterLink :to="'/detail/'+id">
                <div class="itemCategory-container">
                    <img :src="img" alt="loading" class="item-img"/>
                    <p>{{ description }} </p>
                    <p>{{descriptionDetail}} </p>
                  
                </div>
       </RouterLink>

</template>

<style>

.item-img {
    width: 250px;
    

}

</style>