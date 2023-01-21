<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';


const props=defineProps({
    addHandler:Function,
    init:Number,
    idProduct:Number,
    from:String
})

const counter=ref(props.init)

console.log(props.idProduct,"idProduct counter")
console.log(props.from,"from")
const add=()=>{
    counter.value++
}

const decrease=()=>{

    if(counter.value>0){
        counter.value--
    }

}
</script>
<template>
    <div :class="from == 'cart' ? 'counter' : 'counter-detail' ">
        <button v-on:click="decrease">-</button>
        <h4>{{ counter }} </h4>
        <button v-on:click="add">+</button>
        <button v-on:click="addHandler(counter,idProduct)">Add product</button>
    </div>

</template>

<style>
.counter{
    display: flex;
    
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 10px;
        
}

.counter h4{
    width: 20px;
}


.counter button{
    margin-right: 5px;
    margin-left: 5px;
}

.counter-detail{
    display: flex;
    
    width: fit-content;
   
    margin-bottom: 10px;

}

.counter-detail h4{
    width: 20px;
}


.counter-detail button{
    margin-right: 5px;
    margin-left: 5px;
}



</style>