<script setup>
import { onMounted,ref,onUpdated } from 'vue';
import { useRoute } from 'vue-router';
import { Mock } from '../components/Mock/Mock';
import ItemCategoryView from "../components/Item/ItemCategory.vue"

const categoryOk=ref("none")

onMounted(()=>{ //es como el useEffect []

    const route=useRoute()
    categoryOk.value=route.params.category

})

onUpdated(()=>{ //es como el useEffect cuando se actualiza dependencia [category]

    const route=useRoute()
    categoryOk.value=route.params.category

})

const aside="aside.jpg"
</script>

<template>
<div class="category-container">
    <div class="aside-table">
        <ul>
            <li class="title">Categorias</li>
            <li>Football</li>
            <li>Running</li>
            <li>Boxing</li>
            <li>Tennis</li>
            <li>Hockey</li>
            <li  class="title">Talle</li>
            <li>Small</li>
            <li>Medium</li>
            <li>Large</li>
            <li  class="title">Genero</li>
            <li>Hombre</li>
            <li>Mujer</li>
            <li  class="title">Secciones</li>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
           

        </ul>
    </div>


    <div class="container"><!--pongo aca el row col bootstrap para q ande ok-->
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
            
            <template v-for="item in Mock" :key="item.id">
                <div v-if="item.category==categoryOk && item.size=='L'" class="col">
                    <ItemCategoryView :="item"/>
                
                
                </div>
            </template>

        </div>
    </div>
</div>

 
</template>

<style>

.category-container{
    display: flex;
    margin-top: 50px;
}

.title{
    font-weight: bold;margin-top: 10px;
}

.aside-table ul{
    display: none;
}

@media screen and (min-width: 900px) {

    .category-container{
    display: flex;
    margin-top: 50px;
    }


.title{
    font-weight: bold;margin-top: 10px;
}
.aside-table ul{
    display: grid;
}


}

</style>