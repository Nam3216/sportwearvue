<script setup>
import { onMounted,ref } from 'vue';
import { useRoute } from 'vue-router';
import {Mock} from "../components/Mock/Mock"
import ItemDetailView from "./ItemDetailView.vue"


const name=ref("none")
/*asi es como se usa useParams*/
const getParam=()=>{
    const route=useRoute()
    name.value=route.params.id

}
onMounted(()=>{
    getParam()
    console.log(Mock, "mokc")
})
</script>

<template>

    <template v-for="item in Mock">
        <div v-if="item.id==name">

            <ItemDetailView :data="item"/> <!--para desestructurar paso :="item" y recibo en define props en hijo, dandole tipo a cada key del objeto-->
        </div>

    </template>
</template>

<style>
</style>