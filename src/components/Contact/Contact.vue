<script setup>
import { ref } from 'vue';

const info=ref({name:"", surname:"", mail:"", comment:""})
//obtengo los datos de los input y los guardo en objeto para mandarlo al backend
const handleInput=(e)=>{
    e.preventDefault()
    console.log(e.target.value, "vuew")
    console.log(e.target.name, "name")
    if(e.target.name=="name"){
        info.value.name=e.target.value
        console.log(info.value, "info")
    }
    if(e.target.name=="surname"){
        info.value.surname=e.target.value
        console.log(info.value, "info")
    }
    if(e.target.name=="mail"){
        info.value.mail=e.target.value
        console.log(info.value, "info")
    }
    if(e.target.name=="comment"){
        info.value.comment=e.target.value
        console.log(info.value, "info")
    }
}


</script>

<template>
    <div class="contact-title">
        <h3>Contact</h3>
        <hr/>

    </div>
    <div class="contact">
        <label for="name">Escribe tu primer nombre</label>
        <input type="text" placeholder="Nombre" name="name" v-on:change="handleInput" />
        <label for="surname">Escribe tu apellido</label>
        <input type="text" placeholder="Apellido" name="surname" v-on:change="handleInput"/>
        <label for="mail">Escribe tu direccion de email</label>
        <input type="text" placeholder="Email" name="mail" v-on:change="handleInput"/>
        <label for="comment">Escribe tu comentario</label>
        <textarea  placeholder="Escribe tu comentario" name="comment" v-on:change="handleInput"></textarea>


    </div>

</template>

<style>

.contact{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: fit-content;
}
.contact input{
    width: 40vw;
    margin-bottom: 20px;
    
}

textarea{
    width: 40vw;
    height: 20vh;
}
</style>